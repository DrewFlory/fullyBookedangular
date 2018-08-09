import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookedService } from './services/booked.service';
import { SignupComponent } from './signup/signup.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { ProfileComponent } from './profile/profile.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FindUserComponent } from './find-user/find-user.component';





const routes:Routes = [
  { path: '',  component: UserComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'private/profile/services/create', component: CreateServiceComponent },
  { path: 'private/profile', component: ProfileComponent },
  { path: 'private/profile/services/:id', component: JobDetailsComponent },
  { path: 'private/profile/services/:id/edit', component: EditJobComponent },
  { path: 'private/profile/edituser/:id', component:  UpdateUserInfoComponent },
  { path: 'private/profile/search', component: SearchBarComponent },
  { path: 'private/profile/:id', component: FindUserComponent },
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignupComponent,
    CreateServiceComponent,
    ProfileComponent,
    JobDetailsComponent,
    EditJobComponent,
    UpdateUserInfoComponent,
    SearchBarComponent,
    FindUserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BookedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
