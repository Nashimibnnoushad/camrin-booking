import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() enquiryData: any; // Property to receive the data
  @Input() redirectPage: any;

  page: any = 'login';
  username: any = '';
  password: any = '';
  fname: any = '';
  lname: any = '';
  email: any = '';
  phone: any = '';
  regPassword: any = '';
  loginEmailError: any = '';
  loginError: any = '';
  registerEmailError: any = '';
  registerPhoneError: any = '';
  registerError: any = '';
  loading: any = false;

  constructor(
    private apiService: ApiService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  close(): void {
    this.activeModal.close();
  }

  goToRegisterPage() {
    this.page = 'register';
  }

  goToLogin() {
    this.page = 'login';
  }

  onLoginEmailChange(): void {
    console.log('entered');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(this.username);
    if (!valid) {
      this.loginEmailError = 'Invalid Email';
    } else {
      this.loginEmailError = '';
    }
  }

  onRegisterEmailChange(): void {
    console.log('entered');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = emailRegex.test(this.email);
    if (!valid) {
      this.registerEmailError = 'Invalid Email';
    } else {
      this.registerEmailError = '';
    }
  }

  onRegisterPhoneChange(): void {
    console.log('entered');
    const mobileRegex = /^[0-9]{10}$/;
    const valid = mobileRegex.test(this.phone);
    if (!valid) {
      this.registerPhoneError = 'Invalid Phone Number';
    } else {
      this.registerPhoneError = '';
    }
  }

  validateLogin(): boolean {
    if (
      this.loginEmailError === '' &&
      this.username !== '' &&
      this.password !== ''
    ) {
      this.loginError = '';
      return true;
    } else {
      this.loginError = 'Please enter valid username and password';
      return false;
    }
  }

  validateRegister(): boolean {
    if (
      this.fname !== '' &&
      this.email !== '' &&
      this.phone !== '' &&
      this.regPassword !== ''
    ) {
      if (this.registerEmailError === '' && this.registerPhoneError === '') {
        this.registerError = '';
        return true;
      } else {
        this.registerError = 'Please enter valid data';
        return false;
      }
    } else {
      this.registerError = 'Please enter all mandatory fields';
      return false;
    }
  }

  // Function to set data with expiration
  public setSessionData(key: any, value: any) {
    const now = new Date().getTime();
    sessionStorage.setItem(`${key}_data`, JSON.stringify(value));
    sessionStorage.setItem(`${key}_timestamp`, now.toString());
  }

  login() {
    let valid = this.validateLogin();
    if (valid) {
      this.loading = true;
      let sendData = {
        username: this.username,
        password: this.password,
      };
      this.apiService.clientLogin(sendData).subscribe(
        (data: any) => {
          this.loading = false;
          if (data.token) {
            // Usage
            this.setSessionData('camrinToken', data.token);
            localStorage.setItem(
              'camrinEnquiryData',
              JSON.stringify(this.enquiryData)
            );
            this.close();
            let url;
            if (this.redirectPage == 'Dashboard') {
              localStorage.removeItem('camrinEnquiryData');
              localStorage.removeItem('camrinSelectedPackage');
              url = this.router
                .createUrlTree(['/clients/client-dashboard'])
                .toString();
            } else {
              url = this.router
                .createUrlTree(['/pages/pricing-page'])
                .toString();
            }
            window.location.href = url;
          }
        },
        (error) => {
          this.loading = false;
          if (error.status === 401) {
            this.loginError = 'Please enter valid username and password';
          } else {
            console.error('An error occurred:', error);
            this.loginError = 'An unexpected error occurred. Please try again.';
          }
        }
      );
    }
  }

  register() {
    let valid = this.validateRegister();
    if (valid) {
      this.loading = true;
      let sendData = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        phone: this.phone,
        password: this.regPassword,
      };
      this.apiService.clientRegister(sendData).subscribe(
        (data: any) => {
          this.loading = false;
          if (data.status === 'success') {
            this.page = 'login';
          }
        },
        (error) => {
          this.loading = false;
          if (error.status === 401) {
            this.registerError = 'Please enter valid username and password';
          } else if (error.status === 400) {
            console.log(
              error,
              error.error,
              error.error.errors,
              error.error.errors[0],
              error.error.errors[0].message,
              'message'
            );
            if (error?.error?.errors[0]?.message === 'emailAlreadyExist') {
              this.registerError = error?.error?.errors[0]?.field;
            } else {
              this.registerError = 'Something Went Wrong!';
            }
          } else {
            console.error('An error occurred:', error);
            this.registerError =
              'An unexpected error occurred. Please try again.';
          }
        }
      );
    }
  }

  ngOnInit(): void {
    console.log(this.enquiryData, 'enquiry data');
  }
}
