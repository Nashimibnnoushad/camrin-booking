import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() enquiryData: any; // Property to receive the data

  page: any = 'login'
  username: any = ''
  password: any = ''
  fname: any = ''
  lname: any = ''
  email: any = ''
  phone: any = ''
  regPassword: any = ''

  constructor(private apiService: ApiService,public activeModal: NgbActiveModal, private router: Router) { }

  close(): void {
    this.activeModal.close();
  }

  goToRegisterPage(){
    this.page = 'register'
  }

  goToLogin(){
    this.page = 'login'
  }

  login(){
    console.log('login')
    let sendData = {
      'username': this.username,
      'password': this.password
    }
    this.apiService.clientLogin(sendData).subscribe((data:any) =>{
      console.log(data, 'package details list')
      if(data.token){
        localStorage.setItem('camrinToken', data.token)
        localStorage.setItem('camrinEnquiryData', JSON.stringify(this.enquiryData))
        this.close()
        const url = this.router.createUrlTree(['/pages/pricing-page']).toString();
        window.location.href = url;
      }
    })
  }

  register(){
    let sendData = {
      'fname': this.fname,
      'lname': this.lname,
      'email': this.email,
      'phone': this.phone,
      'password': this.regPassword
    }
    this.apiService.clientRegister(sendData).subscribe((data:any) =>{
      console.log(data, 'registered')
      if(data.status === 'success'){
        this.page = 'login'
      }
    })
  }

  ngOnInit(): void {
    console.log(this.enquiryData, 'enquiry data')
  }

}
