import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account/account.component';
import { InterestRulesComponent } from './components/interest-rules/interest-rules/interest-rules.component';
import { TransactionComponent } from './components/transaction/transaction/transaction.component';
import { StatementsComponent } from './components/statements/statements.component';

const routes: Routes = [
  { path: 'accounts', component: AccountComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'interest-rules', component: InterestRulesComponent },
  { path: 'statements', component: StatementsComponent },
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
