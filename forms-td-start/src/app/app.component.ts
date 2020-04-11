import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true}) signupForm: NgForm; 
  defaultQuestion = 'teacher';
  answer= '';
  genders = ['male', 'female'];

  suggestUsername() {
    const suggestedUsername = 'Superuser';
      this.signupForm.setValue({
        userData: {
          username: suggestedUsername,
          email: '',
        },secret: 'pet',
          questionAnswer: '',
          gender: 'male'
        
      });
      this.signupForm.form.patchValue({
        userData: {
          username: suggestedUsername
        }
      });
  }

/*   onSubmit(form: NgForm){
    console.log(form);
  } */

    onSubmit(){
      console.log(this.signupForm);
    }
}