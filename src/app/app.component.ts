import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'findByIndex';
  CreateUser: string = "Enter Index Number"
  indexNumber: number = 0;
  value: any = 0;

  clicked() {
    this.value = ''
  if(this.indexNumber > 0) {
    if(this.indexNumber == 1) {
      this.value = 2;
    }else if(this.indexNumber % 2 == 0) {
      this.value = (this.indexNumber * this.indexNumber) - 1;
    }else {
      this.value = (this.indexNumber * this.indexNumber) + 1;
    }
  }else {
     this.value = 1
  }
}
}
