import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { PackageViewComponent } from '../../pages/package-view/package-view.component';
import { WhatsappComponent } from '../../pages/whatsapp/whatsapp.component';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  constructor(private apiService: ApiService,private modalService: NgbModal,private router: Router) { 

  }

  openPackageModal(): void{
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
        const modalRef = this.modalService.open(PackageViewComponent, {
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

  openWhatsappModal(): void{
      const modalRef = this.modalService.open(WhatsappComponent, {
        size: 'lg', // Large modal
        centered: true // Center the modal
      });
      // Pass data to the modal instance
      let sendData = {
        "package": "Diamond",
        "eventDate": "10/10/2024",
        "eventName" : "Wedding"
      }
      modalRef.componentInstance.enquiryData = sendData;
    // }
}

  ngOnInit(): void {
  }

}
