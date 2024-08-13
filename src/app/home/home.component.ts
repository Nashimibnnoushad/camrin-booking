import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public daterange: any = {};
  hidebreadcrum : boolean= true;
  enquiryList: any = [{
    eventType: '',
    event: '',
    caste: '',
    eventDate: ''
  }]

  public options: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false,
  };

  public selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;

    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  constructor() { }

  
  addMoreEnquiry(){
    console.log(this.enquiryList,'entered')
    let tempArray = [...this.enquiryList]
    let newEnquiryData = {
      eventType: '',
      event: '',
      caste: '',
      eventDate: ''
    }
    tempArray.push(newEnquiryData)
    // this.enquiryList = [...this.enquiryList.push(newEnquiryData)]
    console.log(tempArray, 'enquiry list')
    this.enquiryList = tempArray

  }

  deleteEnquiry(index:any){
    let tempArray = [...this.enquiryList]
    tempArray.splice(index,1)
    this.enquiryList = tempArray
  }

  onSelectEventChange(event: Event, index:any): void {
    const select = event.target as HTMLSelectElement;
    let tempArray = [...this.enquiryList]
    let tempValue = tempArray[index]
    tempValue.event = select.value
    tempArray[index] = tempValue
    this.enquiryList = tempArray
    console.log('updated array:', this.enquiryList);
  }

  onSelectEventTypeChange(event: Event, index:any): void {
    const select = event.target as HTMLSelectElement;
    let tempArray = [...this.enquiryList]
    let tempValue = tempArray[index]
    tempValue.eventType = select.value
    tempArray[index] = tempValue
    this.enquiryList = tempArray
    console.log('updated array:', this.enquiryList);
  }

  onSelectCasteChange(event: Event, index:any): void {
    const select = event.target as HTMLSelectElement;
    let tempArray = [...this.enquiryList]
    let tempValue = tempArray[index]
    tempValue.caste = select.value
    tempArray[index] = tempValue
    this.enquiryList = tempArray
    console.log('updated array:', this.enquiryList);
  }

  SendDataonChange(event: any, index: any) {
    let dateValue = event.target.value
    let tempArray = [...this.enquiryList]
    let tempValue = tempArray[index]
    tempValue.eventDate = dateValue
    tempArray[index] = tempValue
    this.enquiryList = tempArray
    console.log('updated array:', this.enquiryList);
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
    // $(".education-info").on('click','.trash', function () {
    //   $(this).closest('.education-cont').remove();
    //   return false;
    //   });
  
    //   $(".add-education").on('click', function () {
      
    //   var educationcontent = '<div class="row form-row education-cont">' +
    //     '<div class="col-12 col-md-11 col-lg-11">' +
    //       '<div class="row form-row">' +
    //       '<div class="col-12 col-md-3 col-lg-3">' +
    //       '<div class="form-group">' +
    //           '<label>Event</label>' +
    //           '<select class="form-control select">' +
    //               '<option>Select</option>' +
    //               '<option>Wedding</option>' +
    //               '<option>Engagement</option>' +
    //               '<option>Reception</option>' +
    //           '</select>' +
    //       '</div>' +
    //   '</div>' +
    //   '<div class="col-12 col-md-3 col-lg-3">' +
    //       '<div class="form-group">' +
    //           '<label>Event Type</label>' +
    //           '<select class="form-control select">' +
    //               '<option>Select</option>' +
    //               '<option>Groom Side</option>' +
    //               '<option>Bride Side</option>' +
    //               '<option>Groom & Bride</option>' +
    //           '</select>' +
    //       '</div> ' +
    //   '</div>' +
    //   '<div class="col-12 col-md-3 col-lg-3">' +
    //       '<div class="form-group">' +
    //           '<label>Caste/Religion</label>' +
    //           '<select class="form-control select">' +
    //               '<option>Select</option>' +
    //               '<option>Islam/Muslim</option>' +
    //               '<option>Hindu/Ezhava</option>' +
    //               '<option>Hindu/Nair</option>' +
    //               '<option>Hindu/General</option>' +
    //               '<option>Christian/General</option>' +
    //               '<option>Christian/Penthacost</option>' +
    //           '</select>' +
    //       '</div> ' +
    //   '</div>' +
    //   '<div class="col-12 col-md-3 col-lg-3">' +
    //       '<div class="form-group">' +
    //           '<label>Event Date</label>' +
    //           '<div class="bookingrange btn btn-white btn-sm mb-3">' +
    //               '<i class="far fa-calendar-alt mr-2"></i>' +
    //               '<input style="cursor: pointer;" name="daterangeInput" id="daterange" daterangepicker [options]="options" (selected)="selectedDate($event, daterange)" />' +
    //               '<i class="fas fa-chevron-down ml-2"></i>' +
    //           '</div>' +
    //       '</div> '+
    //   '</div>' +
    //       '</div>' +
    //     '</div>' +
    //     '<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
    //   '</div>';
      
    //       $(".education-info").append(educationcontent);
    //       return false;
    //   });
  }

  
  
}
