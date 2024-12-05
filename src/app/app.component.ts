import { Component } from '@angular/core';
import { EmailService } from './services/mail-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name!: string;
  email!: string;
  message!: string;
  messages: string = '';

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService.sendEmail(this.name, this.email, this.message).subscribe(
      response => {
        console.log('Email sent successfully!');
        this.messages = 'Please fill out all required fields.';
      },
      error => {
        console.log('Error sending email:', error);
        this.messages = 'Message envoyé !';
      }
    );
  }
}
