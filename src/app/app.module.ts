import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './components/account/account/account.component';
import { InterestRulesComponent } from './components/interest-rules/interest-rules/interest-rules.component';
import { TransactionComponent } from './components/transaction/transaction/transaction.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatementsComponent } from './components/statements/statements.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    InterestRulesComponent,
    TransactionComponent,
    NavbarComponent,
    StatementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
