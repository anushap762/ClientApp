import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { StatementService } from 'src/app/services/statement.service';

@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent implements OnInit {
  statementForm: FormGroup;
  statementData: any; 

  constructor(private fb: FormBuilder, private statementService: StatementService) {}

  ngOnInit(): void {
    this.statementForm = this.fb.group({
      account: ['', Validators.required],
      month: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],  // YYYYMM format
    });
  }

  generateStatement(): void {
    if (this.statementForm.valid) {
      const { account, month } = this.statementForm.value;
      this.statementService.getStatement(account, month).subscribe(
        (data) => {
          this.statementData = data;
        },
        (error) => {
          console.error('Error generating statement:', error);
        }
      );
    }
  }
}


