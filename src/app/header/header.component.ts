import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { ApiService } from '../services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../all-modules/pages/login/login.component';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  url!: string;
  url1!: string;
  activeRoute!: string;
  active2Route!: string;
  guestuser: boolean = false;
  registereduser: boolean = false;
  sessionDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  public getSessionData(key: string): any | null {
    const data = sessionStorage.getItem(`${key}_data`);
    const timestampString = sessionStorage.getItem(`${key}_timestamp`);
    const timestamp = timestampString ? parseInt(timestampString, 10) : NaN;
    const now = new Date().getTime();

    if (data) {
      // Check if the timestamp is a valid number and the session has not expired
      if (!isNaN(timestamp) && now - timestamp < this.sessionDuration) {
        return JSON.parse(data);
      } else {
        // Session expired or invalid timestamp
        sessionStorage.removeItem(`${key}_data`);
        sessionStorage.removeItem(`${key}_timestamp`);
        return null; // or handle session expiration as needed
      }
    }
    return null; // No data found
  }
  token: any = this.getSessionData('camrinToken');
  constructor(
    private apiService: ApiService,
    private modalService: NgbModal,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/');
        this.url = url[1];
        this.url1 = url[2];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
      }
    });
  }

  openLoginModal(): void {
    const modalRef = this.modalService.open(LoginComponent, {
      size: 'lg', // Large modal
      centered: true, // Center the modal
    });
    // Pass data to the modal instance
    let sendData = {};
    let redirectPage = 'Dashboard';
    modalRef.componentInstance.enquiryData = sendData;
    modalRef.componentInstance.redirectPage = redirectPage;
  }

  logout() {
    sessionStorage.removeItem('camrinToken_data');
    sessionStorage.removeItem('camrinToken_timestamp');
    localStorage.removeItem('camrinEnquiryData');
    localStorage.removeItem('camrinSelectedPackage');
    const url = this.router.createUrlTree(['/']).toString();
    window.location.href = url;
  }

  ngOnInit(): void {
    // Sidebar

    if ($(window).width() <= 991) {
      var Sidemenu = function () {
        this.$menuItem = $('.main-nav a');
      };

      function init() {
        var $this = Sidemenu;
        $('.main-nav a').on(
          'click',
          function (e: { preventDefault: () => void }) {
            if ($(this).parent().hasClass('has-submenu')) {
              e.preventDefault();
            }
            if (!$(this).hasClass('submenu')) {
              $('ul', $(this).parents('ul:first')).slideUp(350);
              $('a', $(this).parents('ul:first')).removeClass('submenu');
              $(this).next('ul').slideDown(350);
              $(this).addClass('submenu');
            } else if ($(this).hasClass('submenu')) {
              $(this).removeClass('submenu');
              $(this).next('ul').slideUp(350);
            }
          }
        );
      }

      // Sidebar Initiate
      init();
    }

    // Mobile menu sidebar overlay

    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function () {
      $('main-wrapper').toggleClass('slide-nav');
      $('.sidebar-overlay').toggleClass('opened');
      $('html').addClass('menu-opened');
      return false;
    });

    $(document).on('click', '.sidebar-overlay', function () {
      $('html').removeClass('menu-opened');
      $(this).removeClass('opened');
      $('main-wrapper').removeClass('slide-nav');
    });

    $(document).on('click', '#menu_close', function () {
      $('html').removeClass('menu-opened');
      $('.sidebar-overlay').removeClass('opened');
      $('main-wrapper').removeClass('slide-nav');
    });

    // Sticky Menu

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 70) {
        $('.min-header').addClass('sticky');
      } else {
        $('.min-header').removeClass('sticky');
      }
    });

    // Search Bar

    $(document).ready(function () {
      $('.fa-search').click(function () {
        $('.togglesearch').toggle();
        $('.top-search').focus();
      });
    });
  }
}
