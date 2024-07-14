import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  event: OwlOptions = {
    items: 5,
	  margin: 30,
    dots : false,
    nav: true,
    navText: [
      '<i class="fas fa-caret-left"></i>',
      '<i class="fas fa-caret-right"></i>'
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 3
      },
      1170: {
        items: 4
      }
    }
  };
  eventSlides = [
    {
      img: "assets/img/events/event-01.jpg",
      month: "MAR",
      title: "workshop",
      heading: "Marketing Analysis!",
      address: "308 Stoney Road, Florida",
      proimg: "assets/img/profile/profile-01.jpg",
      name: "ms. Annie",
      suntxt: "ceo  -  turbofloid",
      amount: "$250.00"
    },
    {
      img: "assets/img/events/event-02.jpg",
      month: "FEB",
      title: "CULTURAL EVENTS",
      heading: "Training Gadgets",
      address: "1265 Twin Drive, Michigan",
      proimg: "assets/img/profile/profile-02.jpg",
      name: "ms. Caia Earle",
      suntxt: "Chairmam",
      amount: "$300.00"
    },
    {
      img: "assets/img/events/event-03.jpg",
      month: "FEB",
      title: "TECH, Digital",
      heading: "Digital World",
      address: "4960 Pot Road, New Jersey",
      proimg: "assets/img/profile/profile-03.jpg",
      name: "ms. Tilli Devlin",
      suntxt: "Chief Executive",
      amount: "$450.00"
    },
    {
      img: "assets/img/events/event-04.jpg",
      month: "JAN",
      title: "DIGITAL  EVENTS",
      heading: "Marketing Matters!",
      address: "2101 Raver Drive, Tennessee",
      proimg: "assets/img/profile/profile-04.jpg",
      name: "mr. Adar Li",
      suntxt: "Managing Director",
      amount: "$270.00"
    },
    {
      img: "assets/img/events/event-05.jpg",
      month: "DEC",
      title: "workshop",
      heading: "Heaven Events",
      address: "4482 Alpaca Way, Alaska",
      proimg: "assets/img/profile/profile-05.jpg",
      name: "mr. Fuad Lyles",
      suntxt: "Former ceo  -  BP",
      amount: "$100.00"
    },
    {
      img: "assets/img/events/event-05.jpg",
      month: "FEB",
      title: "Seminar",
      heading: "Marketing Matters",
      address: "3849 Smith Road, Georgia",
      proimg: "assets/img/profile/profile-06.jpg",
      name: "ms. Ansleigh",
      suntxt: "Marketing",
      amount: "$450.00"
    },
  ]
  news: OwlOptions = {
    items: 5,
	  margin: 30,
    dots : false,
    nav: true,
    navText: [
      '<i class="fas fa-caret-left"></i>',
      '<i class="fas fa-caret-right"></i>'
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 3
      },
      1170: {
        items: 4
      }
    }
  };
  newsSlides = [
    {
      img: "assets/img/speakers/speak01.jpg",
      name: "Ava Charlotte",
      heading: "Cultural Head",
      amount: "$50 / Hr"
    },
    {
      img: "assets/img/speakers/speak02.jpg",
      name: "Siri Sanders",
      heading: "Event Head",
      amount: "$70 / Hr"
    },
    {
      img: "assets/img/speakers/speak03.jpg",
      name: "Deni Yates",
      heading: "Managing Director",
      amount: "$50 / Hr"
    },
    {
      img: "assets/img/speakers/speak04.jpg",
      name: "Brynn Fish",
      heading: "Former CEO",
      amount: "$50 / Hr"
    },
    {
      img: "assets/img/speakers/speak05.jpg",
      name: "Salvio Pino",
      heading: "Chairman Unilever",
      amount: "$50 / Hr"
    },
    {
      img: "assets/img/speakers/speak06.jpg",
      name: "Deni Yates",
      heading: "Co-Founder",
      amount: "$50 / Hr"
    }
  ]
  reviews: OwlOptions = {
    items: 5,
	  margin: 30,
    dots : false,
    nav: true,
    navText: [
      '<i class="fas fa-caret-left"></i>',
      '<i class="fas fa-caret-right"></i>'
    ],
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  };
  reviewSlides = [
    {
      img: "assets/img/testimonial/avatar-01.jpg",
      name: "Shonda Williams",
      title: "Engineering",
      rating: "3.2"
    },
    {
      img: "assets/img/testimonial/avatar-02.jpg",
      name: "Grant Mason",
      title: "Cultural",
      rating: "4.1"
    },
    {
      img: "assets/img/testimonial/avatar-03.jpg",
      name: "Marion Scott",
      title: "Computer",
      rating: "5"
    },
    {
      img: "assets/img/testimonial/avatar-04.jpg",
      name: "Leonard Bender",
      title: "Business",
      rating: "2"
    },
    {
      img: "assets/img/testimonial/avatar-05.jpg",
      name: "Cheryl Bostick",
      title: "Cultural",
      rating: "4"
    },
    {
      img: "assets/img/testimonial/avatar-06.jpg",
      name: "Martin Belvin",
      title: "Conference",
      rating: "4"
    }
  ]

}
