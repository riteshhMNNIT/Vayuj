import { Component, OnInit } from '@angular/core';
import { MainserviceService } from './mainservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  changeTitle(){
    this.title = 'new frontend';
  }
  constructor(private mainService : MainserviceService){  }

  ngOnInit(){
    console.log("Inside");
    this.mainService.getData().subscribe(data => {
      console.log(data);
      this.mainService.data = data;
    });
  }

}
