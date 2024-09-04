import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginComponent } from '../all-modules/pages/login/login.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public daterange: any = {};
  hidebreadcrum : boolean= true;
  eventList: any = [];
  eventType: any = '';
  caste: any = '';
  loading: any = true;
  isDisabled: any = true;
  enquiryList: any = [{
    eventId: '',
    eventDate: ''
  }]
  

  sessionDuration = 60 * 60 * 1000; // 1 hour in milliseconds

  public options: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false,
  };

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

  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;

    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  constructor(private apiService: ApiService,private modalService: NgbModal,private router: Router) {
   }

  
  addMoreEnquiry(){
    console.log(this.enquiryList,'entered')
    let tempArray = [...this.enquiryList]
    let newEnquiryData = {
      eventId: '',
      eventDate: ''
    }
    tempArray.push(newEnquiryData)
    // this.enquiryList = [...this.enquiryList.push(newEnquiryData)]
    console.log(tempArray, 'enquiry list')
    this.enquiryList = tempArray
    this.checkButtonStatus()
  }

  deleteEnquiry(index:any){
    let tempArray = [...this.enquiryList]
    tempArray.splice(index,1)
    this.enquiryList = tempArray
    this.checkButtonStatus()
  }

  onSelectEventChange(event: Event, index:any): void {
    const select = event.target as HTMLSelectElement;
    let tempArray = [...this.enquiryList]
    let tempValue = tempArray[index]
    tempValue.eventId = select.value
    tempArray[index] = tempValue
    this.enquiryList = tempArray
    this.checkButtonStatus()
  }

  onSelectEventTypeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    console.log(select.value,'event')
    this.eventType = select.value
    this.checkButtonStatus()
  }

  onSelectCasteChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.caste = select.value
    this.checkButtonStatus()
  }

  SendDataonChange(event: any, index: any) {
    let dateValue = event.target.value
    let tempArray = [...this.enquiryList]
    let tempValue = tempArray[index]
    tempValue.eventDate = dateValue
    tempArray[index] = tempValue
    this.enquiryList = tempArray
    this.checkButtonStatus()
  }

  openLoginModal(): void {
    const token = this.getSessionData('camrinToken');
    if(token){
      let sendData = {
        'eventTypeId': this.eventType,
        // 'caste': this.caste,
        'eventDetails': this.enquiryList
      }
      localStorage.setItem(
        'camrinEnquiryData',
        JSON.stringify(sendData)
      );
      const url = this.router
      .createUrlTree(['/pages/pricing-page'])
      .toString();
    window.location.href = url;
    }
    else{
      const modalRef = this.modalService.open(LoginComponent, {
        size: 'lg', // Large modal
        centered: true // Center the modal
      });
      // Pass data to the modal instance
      let sendData = {
        'eventTypeId': this.eventType,
        // 'caste': this.caste,
        'eventDetails': this.enquiryList
      }
      modalRef.componentInstance.enquiryData = sendData;
    }
  }

  getPackageDetails(){
    // routerLink='/pages/pricing-page'
    let sendData = {
      'eventTypeId': this.eventType,
      // 'caste': this.caste,
      'eventDetails': this.enquiryList
    }
    console.log(this.eventType,sendData,'data')
    this.apiService.getPackages(sendData).subscribe((data:any[]) =>{
      console.log(data, 'package details list')
    })
          console.log(this.enquiryList,'enquirylist')                                                                                                                                                                                            
  }

  checkButtonStatus(){
    let validated = this.validate()
    console.log(validated,'validated')
    if(validated){
      this.isDisabled = false
    }
    else{
      this.isDisabled = true
    }
  }

  validate(){
    if(this.eventType !== '' && this.caste !== ''){
      return this.enquiryList.every((item:any )=> {
        // Check each property in the object
        return Object.values(item).every(value => value !== null && value !== undefined && value !== '');
      });
    }
    else{
      return false
    }
  }


  coupleslides = [
    {
      img: "assets/img/couples/couples-1.jpg",
      college: "Aswin & Revathy",
      course: "Pre-Wedding" 
    },
    {
      img: "assets/img/couples/couples-2.jpg",
      college: "Sooraj & Maya",
      course: "Wedding" 
    },
    {
      img: "assets/img/couples/couples-3.jfif",
      college: "Roy & Jancy",
      course: "Reception" 
    },
    {
      img: "assets/img/couples/couples-8.jpg",
      college: "Noufal & Fathima",
      course: "Nikkah" 
    },
  ];
  islides =[
    {
      img: "assets/img/instructors/instructor-thumb-01.jpg",
      name: "David Lee",
      subject: "Aerospace Engineering",
      university: "University of Hertfordshire",
      expertise: "Aerodynamics",
      years: "25 years"
    },
    {
      img: "assets/img/instructors/instructor-thumb-02.jpg",
      name: "Sofia Brient",
      subject: "Aerospace Engineering",
      university: "University of Hertfordshire",
      expertise: "Aerodynamics",
      years: "25 years"
    },
    {
      img: "assets/img/instructors/instructor-thumb-03.jpg",
      name: "Darren Pennet",
      subject: "Aerospace Engineering",
      university: "University of Hertfordshire",
      expertise: "Aerodynamics",
      years: "25 years"
    },
    {
      img: "assets/img/instructors/instructor-thumb-04.jpg",
      name: "Ruby Perrin",
      subject: "Aerospace Engineering",
      university: "University of Hertfordshire",
      expertise: "Aerodynamics",
      years: "25 years"
    },
  ];
  rslides =[
    {
      img: "assets/img/review/review-01.jpg",
      name: "Davis Payerf",
      subject: "Mechanical Engineering",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat"
    },
    {
      img: "assets/img/review/review-01.jpg",
      name: "Davis Payerf",
      subject: "Mechanical Engineering",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat"
    },
    {
      img: "assets/img/review/review-01.jpg",
      name: "Davis Payerf",
      subject: "Mechanical Engineering",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean. Eget volutpat"
    },
  ];
  reviewSliderConfig = {
    infinite: true,
			slidesToShow: 2,
			speed: 500,
			autoplay:false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1
					}
				}
			]
  };
  instructorSliderConfig ={
    infinite: true,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					centerMode: false
				}
			},
			{
				breakpoint: 670,
				settings: {
					slidesToShow: 1,
					centerMode: false,
				}
			}
			]
  };
  couplesSliderConfig = {
    infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
			  breakpoint: 800,
			  settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}		  
    ]
  };

  ngOnInit(): void {
    this.apiService.getEventList().subscribe((data:any[]) =>{
      console.log(data, 'event list')
      this.eventList = data
      this.loading = false
    })
  }

  

  
  
}
