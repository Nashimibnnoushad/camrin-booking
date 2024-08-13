import { Component, OnInit } from '@angular/core';
import data from './data.json';
@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {

  selectedPackage: any = data.selectedPackage

  constructor() { }

  ngOnInit(): void {
  }

  onCheckboxClicked(event: any) {
    if (event.target.checked) {
      console.log('checked')
    } else {
      console.log('unchecked')
    }
  }

}
