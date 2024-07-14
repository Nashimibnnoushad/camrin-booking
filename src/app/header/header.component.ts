import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  url!: string;
  url1!: string;
  url2!: string;
  activeRoute!: string;
  active2Route!: string;
  active3Route!: string;
  guestuser: boolean = false;
  registereduser: boolean = false;
  constructor(private router: Router) { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split("/");
        this.url = url[1];
        this.url1 = url[2];
        this.url2 =url[3];
        this.activeRoute = this.url;
        this.active2Route = this.url1;
        this.active3Route = this.url2;
        if ( this.activeRoute === "" || this.active2Route === "login" || this.active2Route === "register" || this.active2Route === "forgot-password" || this.active2Route === "speaker-register" || this.active2Route === 'term-condition' || this.active2Route === 'privacy-policy' || this.active2Route === 'search' || this.active2Route === 'speakers-profile' || this.active2Route === 'booking' || this.active2Route === 'checkout' || this.active2Route === 'booking-success' || this.active2Route === 'favourites' || this.active2Route === 'calendar' || this.active2Route === 'components' || this.active2Route === 'blank-page' || this.active2Route === 'event-details' || this.active2Route === 'blog-details' || this.active2Route === 'blog-grid' || this.active2Route === 'blog-list') {
          this.guestuser = false;
          this.registereduser = true;
        } else {
          this.guestuser = true;
          this.registereduser = false;
        }

      }
    });
  }

  ngOnInit(): void {
    $(window).on('scroll',function(){
      if ($(this).scrollTop()>150){
        $('.header').addClass('nav-fixed');
        $('.map-right').addClass('map-top');
      } else {
        $('.header').removeClass('nav-fixed');
        $('.map-right').removeClass('map-top');
      }
    });

    // Sidebar
	
	if($(window).width() <= 991){
    var Sidemenu = function() {
      this.$menuItem = $('.main-nav a');
    };
    
    function init() {
      var $this = Sidemenu;
      $('.main-nav a').on('click', function(e: { preventDefault: () => void; }) {
        if($(this).parent().hasClass('has-submenu')) {
          e.preventDefault();
        }
        if(!$(this).hasClass('submenu')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('submenu');
          $(this).next('ul').slideDown(350);
          $(this).addClass('submenu');
        } else if($(this).hasClass('submenu')) {
          $(this).removeClass('submenu');
          $(this).next('ul').slideUp(350);
        }
      });
    }
  
    // Sidebar Initiate
    init();
    }

    // Mobile menu sidebar overlay
	
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
      $('main-wrapper').toggleClass('slide-nav');
      $('.sidebar-overlay').toggleClass('opened');
      $('html').addClass('menu-opened');
      return false;
    });
    
    $(document).on('click', '.sidebar-overlay', function() {
      $('html').removeClass('menu-opened');
      $(this).removeClass('opened');
      $('main-wrapper').removeClass('slide-nav');
    });
    
    $(document).on('click', '#menu_close', function() {
      $('html').removeClass('menu-opened');
      $('.sidebar-overlay').removeClass('opened');
      $('main-wrapper').removeClass('slide-nav');
    });

  }


}
