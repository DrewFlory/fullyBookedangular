import { Component, OnInit } from '@angular/core';
import { BookedService } from '../services/booked.service'


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  arrayOfUsers:Array<any> = [];
  theError:any;

  constructor(private bookedService: BookedService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.bookedService.search()
    .subscribe(
      (res)=>{this.arrayOfUsers = res},
      (err)=>{this.theError = err}
    )
  }

}
