import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services.service';
import { Router } from '@angular/router';
import data from './data.json';
@Component({
  selector: 'app-package-view',
  templateUrl: './package-view.component.html',
  styleUrls: ['./package-view.component.css']
})
export class PackageViewComponent implements OnInit {
  @Input() enquiryData: any; 
  package: any = data.selectedPackage
  constructor(
    private apiService: ApiService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  close(): void {
    this.activeModal.close();
  }

  ngOnInit(): void {
  }

}
