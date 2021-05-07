import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'findByIndex';

  CreateUser: string = "Enter Index Number"

  userlist: number[] = [2, 4, 5, 7, 8, 3, 5, 98];

  indexNumber: number = 0;



  value: any = 0;

  message: string = " Entered index Value dosen't exist"


  clicked() {
    if (this.indexNumber <= 7) {
      this.value = this.userlist[this.indexNumber];
    } else {
      this.value = this.message;
    }
  }
}
