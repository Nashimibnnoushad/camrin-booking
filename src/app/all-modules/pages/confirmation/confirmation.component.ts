import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  @Input() enquiryData: any; // Property to receive the data
  secondsLeft: number = 5;
  private timerSubscription: Subscription | undefined;

  constructor(
    private apiService: ApiService,
    public activeModal: NgbActiveModal,
    private router: Router
  ) {}

  close(): void {
    this.activeModal.close();
  }

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startCountdown() {
    this.timerSubscription = interval(1000)
      .pipe(take(5))
      .subscribe({
        next: () => {
          this.secondsLeft--;
          if (this.secondsLeft === 0) {
            this.redirectToDashboard();
          }
        },
        complete: () => this.redirectToDashboard(),
      });
  }

  redirectToDashboard() {
    this.close();
    const url = this.router
      .createUrlTree(['/clients/client-dashboard'])
      .toString();
    window.location.href = url;
  }
}
