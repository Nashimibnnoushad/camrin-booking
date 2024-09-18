import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css'],
})
export class WhatsappComponent implements OnInit {
  @Input() enquiryData: any;
  message: any = '';
  constructor(
    private apiService: ApiService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  close(): void {
    this.activeModal.close();
  }

  sendMessage() {
    let sendmsg = this.message
    const encodedMessage = encodeURIComponent(sendmsg);
    window.open(`https://wa.me/917510615035?text=${encodedMessage}`, '_blank');
  }

  ngOnInit(): void {
    this.message = `Hello Camrin Films,

I'm interested in learning more about your ${this.enquiryData.package} package for a ${this.enquiryData.eventName} event on ${this.enquiryData.eventDate}. Could you please reply me with more details?
Thank you for your time. I look forward to hearing from you soon.
Best regards,
Nashim K N`;
  }
}
