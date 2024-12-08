import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InterestRuleService } from 'src/app/services/interest-rule.service';

@Component({
  selector: 'app-interest-rules',
  templateUrl: './interest-rules.component.html',
  styleUrls: ['./interest-rules.component.css']
})
export class InterestRulesComponent implements OnInit{
  ruleForm: FormGroup;
  rules:any=[];

  constructor(private fb: FormBuilder, private interestRuleService: InterestRuleService) {
    this.ruleForm = this.fb.group({
      effectiveDate: ['',Validators.required],
      rate: [0,[Validators.required,Validators.min(0),Validators.max(100)]],
      ruleId:['',Validators.required]
    });
  }
 
  ngOnInit(): void {
    this.rules=this.interestRuleService.getInterestRules()
    .subscribe(
      (response)=>{
        this.rules = response;
      },
      (error)=>
        console.log(error)
    )
  }

  addRule() {
    const formValue = this.ruleForm.value;

    // Transform the effectiveDate to YYYYMMdd format
    const effectiveDate = this.formatDateToYYYYMMdd(formValue.effectiveDate);

    // Prepare the payload
    const payload = {
      ruleId: formValue.ruleId, // Keep RuleId as entered by the user
    effectiveDate: this.formatDateToYYYYMMdd(formValue.effectiveDate), // Format only the effectiveDate
    rate: formValue.rate 
    };

    this.interestRuleService.createRule(payload).subscribe({
      next: () => alert('Rule added!'),
      error: (err) => console.error('Error:', err),
    });
  }

  // Helper method to format the date
  private formatDateToYYYYMMdd(date: string): string {
    const d = new Date(date); // Convert string to Date object
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
}

