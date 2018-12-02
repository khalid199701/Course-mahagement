import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mydata = false;
  Item: Helper[] = [];

  constructor() { 
    this.Item.push(new Helper(this.obj1.chapter,this.obj1.week,this.obj1.content));
    this.Item.push(new Helper(this.obj2.chapter,this.obj2.week,this.obj2.content));
    this.Item.push(new Helper(this.obj3.chapter,this.obj3.week,this.obj3.content));
  }


  obj1 = {
    chapter: "Chapter 1",
    week: "Week 1",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry.`
  }
  obj2 = {
    chapter: "Chapter 2",
    week: "Week 2",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
  obj3 = {
    chapter: "Chapter 3",
    week: "Week 3",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting 
    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
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
