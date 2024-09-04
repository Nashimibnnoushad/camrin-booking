import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import data from './data.json';
@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {

  selectedPackage: any = localStorage.getItem('camrinSelectedPackage')
  loading: any = false

  constructor(private apiService: ApiService,private modalService: NgbModal,private router: Router) {
    // this.formatData()
    this.selectedPackage = JSON.parse(this.selectedPackage)
   }

   formatData(){
    console.log(this.selectedPackage,'entered')
    let deliverablePricingSummaryList = [...this.selectedPackage.deliverablePricingSummaryList]
    deliverablePricingSummaryList = deliverablePricingSummaryList.map(item => ({
      ...item,       
      isAdded: true  
  }));
  let eventList = [...this.selectedPackage.events]
  for(let i=0;i<eventList.length;i++){
    console.log(eventList[i].services,'services')
    let serviceList = [...eventList[i].services]
    eventList[i].services = serviceList.map(item => ({
      ...item,      
      isAdded: true  
  }));
  }
    this.selectedPackage = {...this.selectedPackage, 'deliverablePricingSummaryList': deliverablePricingSummaryList, 'events': eventList}
    console.log(deliverablePricingSummaryList,this.selectedPackage,'selected packages')
   }

  ngOnInit(): void {
  }

  onDeliverableClicked(event: any, index:any) {
    let deliverablePricingSummaryList = [...this.selectedPackage.deliverablePricingSummaryList]
    // deliverablePricingSummaryList[index].isAdded = event.target.checked
    if(!event.target.checked){
      deliverablePricingSummaryList[index].count = 0
    }else{
      deliverablePricingSummaryList[index].count = 1
    }
    this.selectedPackage = {...this.selectedPackage, 'deliverablePricingSummaryList': deliverablePricingSummaryList}
  }

  onServicesClicked(event: any, eventIndex: any, serviceIndex: any) {
    let eventList = [...this.selectedPackage.events]
    let serviceList = [...eventList[eventIndex].services]
    // serviceList[serviceIndex].isAdded = event.target.checked
    if(!event.target.checked){
      serviceList[serviceIndex].count = 0
    }else{
      serviceList[serviceIndex].count = 1
    }
    this.selectedPackage = {...this.selectedPackage, 'events': eventList}
  }

  onDeliverableCountChanged(event: any, index:any) {
    let deliverablePricingSummaryList = [...this.selectedPackage.deliverablePricingSummaryList]
    deliverablePricingSummaryList[index].count = event.target.value
    this.selectedPackage = {...this.selectedPackage, 'deliverablePricingSummaryList': deliverablePricingSummaryList}
    console.log(this.selectedPackage,'deliverables')
  }

  onServiceCountChanged(event: any, eventIndex: any, serviceIndex: any){
    let eventList = [...this.selectedPackage.events]
    let serviceList = [...eventList[eventIndex].services]
    serviceList[serviceIndex].count = event.target.value
    this.selectedPackage = {...this.selectedPackage, 'events': eventList}
    console.log(this.selectedPackage,'services')
  }

  onSubmit(){
    let finalArray = this.removeObjectsWithIsAddedFalse(this.selectedPackage)
    console.log(JSON.stringify(finalArray),'finalArray')
  }

   removeObjectsWithIsAddedFalse(packageData:any) {
    function filterObject(obj: any): any {
      if (Array.isArray(obj)) {
        return obj
          .map(filterObject)  // Recursively filter each element
          .filter(item => item !== null);  // Remove nulls (filtered out objects)
      } else if (typeof obj === 'object' && obj !== null) {
        // if (obj.isAdded === false) {
        //   return null;  
        // }
  
        // Remove the isAdded property if it exists
        const { isAdded, ...rest } = obj;
  
        // Recursively filter the properties of this object
        const filteredObj: any = {};
        for (const [key, val] of Object.entries(rest)) {
          const filteredVal = filterObject(val);
          if (filteredVal !== null) {
            filteredObj[key] = filteredVal;
          }
        }
        return Object.keys(filteredObj).length ? filteredObj : null;  // Return null if the object is empty
      }
      return obj;  // Return values that are not objects or arrays
    }
  
    return filterObject(packageData)
  }


  openConfirmationModal(): void {
    // const token = this.getSessionData('camrinToken');
    // if(token){
    //   let sendData = {
    //     'eventTypeId': this.eventType,
    //     // 'caste': this.caste,
    //     'eventDetails': this.enquiryList
    //   }
    //   localStorage.setItem(
    //     'camrinEnquiryData',
    //     JSON.stringify(sendData)
    //   );
    //   const url = this.router
    //   .createUrlTree(['/pages/pricing-page'])
    //   .toString();
    // window.location.href = url;
    // }
    // else{
      const modalRef = this.modalService.open(ConfirmationComponent, {
        size: 'lg', // Large modal
        centered: true // Center the modal
      });
      // Pass data to the modal instance
      let sendData = {
        // 'eventTypeId': this.eventType,
        // 'caste': this.caste,
        // 'eventDetails': this.enquiryList
      }
      modalRef.componentInstance.enquiryData = sendData;
    // }
  }
  

}
