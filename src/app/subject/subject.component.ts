import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './../data.service';


@Component({
  //selector: '',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  validform = false;
  run = true;
  item: Helper[] = []; 
  constructor(public newService: DataService) {}

  
  ngOnInit() {
  }
  saveuser(useform: NgForm){
    if(useform.value.userid === "admin" && useform.value.password === "admin"){
      this.validform = true;
      this.newService.mydata = this.validform;
      console.log("User logged in:"+ this.validform);
    }
    else{
      this.newService.mydata = this.validform;
      console.log("User not logged in:");
    }
  }
}
export class Helper {
  chapter:string="";
  week:string="";
  content:string="";
  constructor(ch,w,c){
    this.chapter = ch;
    this.week = w;
    this.content = c;
  }
  

}
