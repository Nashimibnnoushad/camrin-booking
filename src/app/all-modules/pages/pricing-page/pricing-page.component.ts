import { Component, OnInit } from '@angular/core';
// import data from './data.json';
import { ApiService } from '../../../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {
  
  customPackageAmount: number = 0;
  packageList: any
  loading: any = true
  enquiryData: any = localStorage.getItem('camrinEnquiryData')

  constructor(private apiService: ApiService, private router: Router) { 
    this.getPackageDetails()
  }

  getPackageDetails(){
    this.loading = true
    this.apiService.getPackages(JSON.parse(this.enquiryData)).subscribe((data:any) =>{
      console.log(data, 'package details list')
      this.packageList = data.summarizePackages
      this.loading = false
    })
  }

  ngOnInit(): void {
  }

  onCheckboxClicked(event: any) {
    if (event.target.checked) {
      this.customPackageAmount = this.customPackageAmount + 10000
    } else {
      this.customPackageAmount = this.customPackageAmount - 10000
    }
  }

  goToPackageCustomPage(selectedPackage:any){
    localStorage.setItem('camrinSelectedPackage', JSON.stringify(selectedPackage))
    const url = this.router.createUrlTree(['/pages/package-page']).toString();
    window.location.href = url;
  }
}
