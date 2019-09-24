import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,) { 
  }


  cityname=['sdsd','dsdsds']

  ngOnInit() {
  }

  band_name;
  city;
  genre
  email
ach
no
m1name
m2name
m1no
m2no
links

  submit(){

    console.log(this.band_name);
    console.log(this.city);

    this.http.post('https://api2.moodi.org/livewire/create', {
      // mobile_number :"323232323",
      // multicity:"2323232",
      // event_id: eventid,
      city:this.city,
      band_name:this.band_name,
      facebook_link:this.links,
      // manager
      emailid:this.email,
      mobile_number:this.no,
      bandmembers:"Name1: "+this.m1name+ "No1: "+this.m1no+" ; "+"Name2: "+this.m2name+ "No2: "+this.m2no,
      // hometown
      original_composition:this.ach
     })
      .subscribe(result =>
      {
        var x = document.getElementById("snackbar");
           x.className = "show";
           setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      },
      error => {
      alert(error["error"]["detail"])
      },
      () => {
      }

    );
  }
}
