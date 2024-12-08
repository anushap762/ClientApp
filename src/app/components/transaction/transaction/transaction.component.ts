import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent{

  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {
    this.transactionForm = this.fb.group({
      accountId: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]],
    });
  }
  
  onSubmit() {
    if (this.transactionForm.valid) {
      this.transactionService.addTransaction(this.transactionForm.value).subscribe({
        next: () => alert('Transaction successful!'),
        error: (err) => console.error('Error:', err),
      });
    }
  }
}
