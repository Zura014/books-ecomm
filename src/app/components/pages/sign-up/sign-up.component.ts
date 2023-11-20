import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  constructor(){
  }

  inputPass: string = "";
  inputConfirmPass: string = "";

  validatePass(){
    if(this.inputPass != this.inputConfirmPass){
      this.inputConfirmPass;
    }

  }
}
