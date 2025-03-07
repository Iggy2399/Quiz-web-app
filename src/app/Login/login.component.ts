import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../servisi/auth.service';
import { ApiService } from '../../servisi/api.services';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user: FormGroup;
  isSubmitted: boolean = false;
  returnUrl: any;
  state: any;
  email: string = '';
  password: string = '';
  errorMessage: any;
  tokenExists: boolean = false;

  constructor(
    public router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
  ) {
    this.user = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      lozinka: new FormControl('', [
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.required,
      ]),
    });
  }
  ngOnInit(): void {
    this.tokenExists = this.authService.hasToken();
    if (this.tokenExists) {
      this.router.navigate(['/pitanja']);
    }
  }

  posaljiPodatke() {
    this.authService.login(this.email, this.password).subscribe((res) => {
      if (res.user.uloga === 'admin') {
        this.toastr.success(`Dobro došli ${res.user.ime_prezime}`);
        this.router.navigate(['/admin-panel']);
      } else if (res.user.uloga === 'igrac') {
        this.toastr.success(`Dobro došli ${res.user.ime_prezime}`);
        this.router.navigate(['/pitanja']);
      } else {
        console.log('neispravni podaci');
      }
    });
  }
}
