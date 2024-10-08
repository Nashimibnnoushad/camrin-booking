import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { VoiceCallComponent } from './voice-call/voice-call.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ComponentsComponent } from './components/components.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { PackagePageComponent } from './package-page/package-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PackageViewComponent } from './package-view/package-view.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    PagesComponent,
    VoiceCallComponent,
    VideoCallComponent,
    CalendarComponent,
    ComponentsComponent,
    InvoicesComponent,
    InvoiceViewComponent,
    BlankPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PrivacyPolicyComponent,
    TermConditionComponent,
    PricingPageComponent,
    PackagePageComponent,
    ConfirmationComponent,
    PackageViewComponent,
    WhatsappComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
