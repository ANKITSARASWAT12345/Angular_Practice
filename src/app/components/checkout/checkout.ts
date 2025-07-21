import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Checkout</h2>
    <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
      <label>Name:</label>
      <input formControlName="name" /><br /><br />
      <label>Address:</label>
      <input formControlName="address" /><br /><br />
      <button type="submit">Place Order</button>
    </form>
  `
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      alert('Order placed successfully!');
      this.checkoutForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
