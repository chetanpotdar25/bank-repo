import { Component, OnInit, ViewChild } from '@angular/core';
import{LoginService} from './login.service';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators'
import { Time } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private LoginService:LoginService) { 
    this.otpnumber="";
  }
  otp:string
  otpnumber:string
  email:string
  timeLeft: number = 60;
  interval
  ngOnInit() {
    
  }
  
  opt()
  {
   
   if(this.email != null)
   {
    this.LoginService.getotp(this.email).subscribe(data=>{this.otpnumber=data.toString();this.timeLeft=60; this.setotp(this.otpnumber);this.startTimer()});
   }
  }
  
  setotp(otp:string)
  {
     this.otpnumber=otp
     alert(otp)
  }
  
  validate()
  {

    if (this.otpnumber==this.otp && this.timeLeft>0)
    {
          alert("hello")
    }
  }
  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;
      }
    },1000)
  }  
 
}
