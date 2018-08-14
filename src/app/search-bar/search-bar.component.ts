import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  theSearchedCategory: String;
  arrayOfUsers:Array<any> = [];
  theError:any;
  filteredArray:Array<any> = [];
  filteredUser:Array<any> = [];
  freelancers:Array<any> = [];

  constructor(private bookedService: BookedService,
    private router : Router,
    private myRoutes : ActivatedRoute ) { }

  ngOnInit() {
    this.getUsers();
  }

  searchUsers(event){

this.filteredArray = this.arrayOfUsers.filter((oneUser)=>{

if (
  oneUser.categories.includes(this.theSearchedCategory)
  ){
    return oneUser;

}
    })
  }

  // getUsers(){
  //   this.freelancers = this.arrayOfUsers.filter((oneUser)=>{
  //     console.log(oneUser.service);
  //     if (oneUser.service) {
  //       return oneUser;
  //     }
  //   })
  // }

  getUsers(){
    this.bookedService.search()
    .subscribe(
      (res)=>{this.arrayOfUsers = res},
      (err)=>{this.theError = err}
    )
  }



}
