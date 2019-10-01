import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    constructor(private http: HttpClient) { }
    error_message='';
    courses = [];
    get_course_list = function() {
      this.http.get("http://localhost:3000/course/").subscribe(
        (result : any[]) => {
          this.courses = result;
          this.error_message = ""
        },
        (error) => {
          this.error_message = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
    }
  
    delete_employee = function(id) {
      this.http.delete("http://localhost:3000/course/"+id).subscribe(
        (result) => {
          //this.courses = result;
          this.error_message = "Deleted"
          this.courses = [];
          this.get_course_list()
        },
        (error) => {
          this.error_message = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
    }
  
    ngOnInit() {
      this.get_course_list();
    }
  
  }
