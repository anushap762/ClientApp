import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accounts: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts().subscribe((data) => (this.accounts = data));
  }

  deleteAccount(accountId: string) {
    this.accountService.deleteAccount(accountId).subscribe(() => this.loadAccounts());
  }
}

