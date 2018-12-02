import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

@Component({
  selector: 'app-techer',
  templateUrl: './techer.component.html',
  styleUrls: ['./techer.component.css']
})
export class TecherComponent implements OnInit {

  ngOnInit() {
  }
  constructor(public newService: DataService){
  }
  
  newItem = {
    chapter: "",
    week: "",
    content: ""
  }
  
  item: Helper[] = [];

  test(){
    if(this.newItem.content !=""){
      this.newService.Item.push(new Helper(this.newItem.chapter,this.newItem.week,this.newItem.content));
      this.newItem.chapter = "";
      this.newItem.week = "";
      this.newItem.content = "";
    }
  }

  removeTest(index){
    this.newService.Item.splice(index,1);
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
