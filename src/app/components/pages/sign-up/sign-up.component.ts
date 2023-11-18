import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor(){
    this.generateYears()
  }

  inputPass: string = "";
  inputConfirmPass: string = "";
  yearsArr: number[] = [];

  generateYears(){
    for (let year = 2023; year >= 1900; year--) {
        this.yearsArr.push(year);
    }
  }
}
