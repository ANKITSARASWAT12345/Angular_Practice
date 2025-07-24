// contact.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,FormBuilder,FormGroup,Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css'],
  imports: [CommonModule, FormsModule,ReactiveFormsModule]
})
export class ContactComponent {
  
   contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
    ;
             
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert("Message sent successfully!");

      // ✅ Clear the form after submission
      this.contactForm.reset();
    } else {
      alert("Please fill in all the fields correctly.");
    }
  }
}
