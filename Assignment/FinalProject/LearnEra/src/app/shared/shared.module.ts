import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [HomeComponent, NavComponent, CourseComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
