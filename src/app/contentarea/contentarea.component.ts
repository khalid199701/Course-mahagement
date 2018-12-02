import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';


@Component({
  //selector: 'app-contentarea',
  templateUrl: './contentarea.component.html',
  styleUrls: ['./contentarea.component.css']
})
export class ContentareaComponent implements OnInit {
  
  data = false;
  count = 0;
  selectedpoint: string = '';
  isgood = 0;
  isverygood = 0;
  isunderstood = 0;
  isnotunderstood = 0;
  
  constructor(private newService: DataService) { }
  ngOnInit() {
    this.data = this.newService.mydata;
    //console.log(this.data);
  }
  
    selectchangehandler(event:any){
      this.selectedpoint = event.target.value;
    }
    myevent(){
      if(this.selectedpoint === 'good'){
        this.isgood++;
        if(this.data == true && this.count == 0){
          console.log("Good:"+this.isgood);
          this.count++;
        }else if(this.data != true){
          console.log("User not logged in.");
        }else{
          console.log("User submit twice or more.")
        }
      }
      else if(this.selectedpoint === 'verygood'){
        this.isverygood++;
        if(this.data == true && this.count == 0){
          console.log("Very Good:"+this.isverygood);
          this.count++;
          this.data = false;
        }else if(this.data == false){
          console.log("User not logged in.");
        }else{
          console.log("User submit twice or more.")
        }
      }
      else if(this.selectedpoint === 'understood'){
        this.isunderstood++;
        if(this.data == true && this.count == 0){
          console.log("Understood:"+this.isunderstood);
          this.count++;
        }else if(this.data == false){
          console.log("User not logged in.");
        }else{
          console.log("User submit twice or more.")
        }
      }
      else if(this.selectedpoint === 'notunderstood'){
      this.isnotunderstood++;
      if(this.data == true && this.count == 0){
        console.log("Not Understood:"+this.isnotunderstood);
        this.count++;
        }else if(this.data == false){
          console.log("User not logged in.");
        }else{
          console.log("User submit twice or more.")
        }
      }
    }
  
  

}
