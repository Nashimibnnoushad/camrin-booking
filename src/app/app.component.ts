import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events';
  url!: string;
  url1!: string;
  url2!: string;
  activeRoute!: string;
  active2Route!: string;
  active3Route!: string;
  loadFooter = false;
  hideFooter: boolean = false;

  constructor(private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        const url = event.url.split("/");
        this.url = url[1];
        this.url1 = url[2];
        this.url2 = url[3];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
        this.active3Route = this.url2;
        const body = document.getElementsByTagName('body')[0];
        if ( this.active2Route === "chat-speaker" || this.active3Route === "map-grid" || this.active3Route === "map-list" || this.active2Route === "chat" || this.active2Route === "voice-call" || this.active2Route === "video-call") {
          this.loadFooter = false;
        } else {
          this.loadFooter = true;
        }
        if ( this.active2Route === "speakers-register" || this.active2Route === "login" || this.active2Route === "register" || this.active2Route === "forgot-password") {
          body.classList.add('account-page');
        } else {
          body.classList.remove('account-page');
        }
        if ( this.active2Route === "chat" || this.active2Route === "chat-speaker") {
          body.classList.add('chat-page');
        } else {
          body.classList.remove('chat-page');
        }
      }
    });
  }
  ngOnInit() {
    
  }
}
