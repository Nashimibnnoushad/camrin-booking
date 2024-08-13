import { Component, OnInit } from '@angular/core';
import data from './data.json';
@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {
  
  customPackageAmount: number = 0;
  packageList: any = data.summarizePackages

  constructor() { 
    console.log(data, 'data')
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
}
