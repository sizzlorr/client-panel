import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private flashMassages: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.email, this.password)
      .then(res => {
        this.flashMassages.show('Register was successful', {
          cssClass: 'aleert-success',
          timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMassages.show(err.message, {
          cssClass: 'aleert-danger',
          timeout: 4000
        });
      });
  }

}
