import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderAfterLoginComponent } from './header-after-login/header-after-login.component';
import { DashboardLeftComponent } from './dashboard-left/dashboard-left.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { HomeComponent } from './home/home.component';
import { FinalDashboardComponent } from './final-dashboard/final-dashboard.component';
import { RecentComponent } from './recent/recent.component';
import { SettleComponent } from './settle/settle.component';
import { AllComponent } from './all/all.component';
import { GroupsComponent } from './groups/groups.component';
import { FriendsComponent } from './friends/friends.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    HeaderAfterLoginComponent,
    DashboardLeftComponent,
    DashboardComponent,
    AddExpenseComponent,
    HomeComponent,
    FinalDashboardComponent,
    RecentComponent,
    SettleComponent,
    AllComponent,
    GroupsComponent,
    FriendsComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
