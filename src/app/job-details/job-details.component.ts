import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  theActualEntry:any;
  theActualUser:any = {};
  loginUser:any={};
  theError:any;


  constructor(private bookedService: BookedService,
    private theRouter: ActivatedRoute,
    private router : Router,) { }

  ngOnInit() {
    
    this.theRouter.params
    .subscribe((params) => {
      console.log(this.theActualEntry);
      this.bookedService.getOneService(params['id'])
      .subscribe((theEntryFromService)=>{
        this.theActualEntry = theEntryFromService
      })
    })
  }

  successCallback(userObject){
    this.theActualUser = userObject;
    this.theError = '';
  }

  errorCallback(errorObject){
    this.theError = errorObject;
    this.theActualUser = {username:'', password:''};
  }

  checkIfLoggedIn(){
    this.bookedService.isLoggedIn()
    .subscribe(
      res => {this.successCallback(res)},
      err => {this.errorCallback(null)}
    )
  }




  deleteJob(){
    this.theRouter.params
    .subscribe((params) => {
      this.bookedService.deleteJob(params['id'])
      .subscribe((theEntryToDelete)=>{
        this.router.navigate([`/private/profile`]);
      })
    })


  }



}
