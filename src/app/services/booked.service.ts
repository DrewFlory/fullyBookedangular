import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { RouterModule, Routes } from "@angular/router";
import { environment } from '../../environments/environment'



@Injectable({
  providedIn: 'root'
})
export class BookedService {

  baseURL:any = environment.baseURL;
  allTheUsers:any = [];

  constructor(private http:Http) { }

  handleError(e) {
    console.log(e);
     return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.baseURL}/api/signup`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`${this.baseURL}/api/login`, user, {withCredentials: true})
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`${this.baseURL}/api/logout`, {}, {withCredentials: true} )
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${this.baseURL}/api/loggedin`, {withCredentials: true})
    .map(res => {
      return  JSON.parse((<any>res)._body)
    })
      .catch(this.handleError);
  }

  deleteJob(deletedTask) {
    return this.http.post(`${this.baseURL}/api/private/profile/services/${deletedTask}/delete`, {} )
    .map((res)=> res.json);
  }

  editJob(editid, theNewObject) {
    return this.http.post(`${this.baseURL}/api/private/profile/services/${editid}/edit`, theNewObject)
    .map((res)=> res.json);
  }

  newService(newServiceEntry) {
    return this.http.post(`${this.baseURL}/api/private/profile/services/create`, newServiceEntry, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  updateUser(editID, theNewObject) {
    return this.http.post(`${this.baseURL}/api/private/profile/edituser/${editID}`, theNewObject)
    .map((res)=> res.json);
  }

  getProfileJobs(userID){
    return this.http.get(`${this.baseURL}/api/private/userjobs/${userID}`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  getJobs(){
    return this.http.get(`${this.baseURL}/api/private/userjobs`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }
  getOneService(entryId) {
    return this.http.get(`${this.baseURL}/api/private/profile/services/${entryId}`, {withCredentials: true})
      .map((res) => res.json());
  }

  addSlot(index, day) {
    return this.http.post(`${this.baseURL}/api/private/addtimes`, {index: index, day: day},{withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  bookAppt(userID, index, day){
    return this.http.post(`${this.baseURL}/api/private/profile/${userID}/bookappt`, {index: index, day: day},{withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  removeSlot(index, day) {
    return this.http.post(`${this.baseURL}/api/private/removetimes`, {index: index, day: day},{withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError);
  }

  search() {
    return this.http.get(`${this.baseURL}/api/private/profile/search`, {withCredentials: true})
    .map(res => res.json())
    .catch(this.handleError)
  }

  findUser(userID) {
    return this.http.get(`${this.baseURL}/api/private/profile/${userID}`, {withCredentials: true})
    .map(res => {
      return res.json()})
    .catch(this.handleError)
  }

  // getProfile(id){
  //   return this.http.post(`http://localhost:3000/api/private/profile`, {withCredentials: true})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }




}
