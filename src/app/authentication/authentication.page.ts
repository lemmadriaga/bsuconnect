import { AfterViewInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements AfterViewInit {
  regForm: FormGroup;
  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    // Initialize forms here
    this.initializeForms();
  }

  private initializeForms() {
    this.regForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('^09\\d{9}$')]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@g\\.batstate-u\\.edu\\.ph$'),
        ],
      ],
      password: ['', [Validators.required, Validators.pattern('.{8,}')]],
      department: ['', [Validators.required]],
    });

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@g\\.batstate-u\\.edu\\.ph$'),
        ],
      ],
      password: ['', [Validators.required, Validators.pattern('.{8,}')]],
    });
  }
  get errorControl() {
    return this.regForm?.controls, this.loginForm?.controls;
  }
  async signUp() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid) {
      const email = this.regForm.value.email;
      const password = this.regForm.value.password;
      const fullName = this.regForm.value.fullname;
      const contact = this.regForm.value.contact;
      const department = this.regForm.value.department;

      const user = await this.authService
        .registerUser(email, password, fullName, contact, department)
        .catch((error) => {
          console.log(error);
          loading.dismiss(); // Dismiss loading on error
        });

      if (user) {
        loading.dismiss(); 
        this.router.navigate(['student-dashboard/forum']);
      } else {
        console.log('Provide correct values ');
        loading.dismiss(); // Ensure loading is dismissed if user is not returned
      }
    } else {
      loading.dismiss(); // Dismiss loading if form is invalid
    }
  }

  async signIn() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.loginForm?.valid) {
      try {
        // Attempt to log in the user
        const user = await this.authService.loginUser(
          this.loginForm.value.email,
          this.loginForm.value.password
        );

        if (user) {
          console.log('User successfully logged in:', user);

          // After login, check the user's role
          const role = await this.authService
            .getUserRole$()
            .pipe(take(1))
            .toPromise();
          console.log('User role:', role);

          if (role) {
            // Navigate based on the role
            switch (role) {
              case 'admin':
                await this.router.navigate(['/admin-dashboard']);
                break;
              case 'student':
                await this.router.navigate(['/student-dashboard/forum']);
                break;
              case 'alumni':
                await this.router.navigate(['/alumni-dashboard']);
                break;
              case 'faculty':
                await this.router.navigate(['/faculty-dashboard']);
                break;
              default:
                console.error('Invalid role');
                await this.router.navigate(['/authentication']); // Fallback if role is invalid
                break;
            }
          } else {
            // If no role is found, navigate back to login
            console.error('No role found');
            await this.router.navigate(['/login']);
          }
        } else {
          console.log('Provide correct login credentials');
          await this.router.navigate(['/login']);
        }
      } catch (error) {
        // Catch any error during login or role check and dismiss loading
        console.error('Error during sign-in:', error);
        await this.router.navigate(['/login']);
      } finally {
        // Ensure loading spinner is dismissed
        loading.dismiss();
      }
    }
  }

  async googleSignIn() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    try {
      const user = await this.authService.googleSignIn();
      if (user) {
        console.log('User successfully logged in with Google:', user);

        // Check the user's role after successful Google login
        const role = await this.authService
          .getUserRole$()
          .pipe(take(1))
          .toPromise();
        console.log('User role:', role);

        // Navigate based on the role
        switch (role) {
          case 'admin':
            await this.router.navigate(['/admin-dashboard']);
            break;
          case 'student':
            await this.router.navigate(['/student-dashboard']);
            break;
          case 'alumni':
            await this.router.navigate(['/alumni-dashboard']);
            break;
          case 'faculty':
            await this.router.navigate(['/faculty-dashboard']);
            break;
          default:
            console.error('Invalid role');
            await this.router.navigate(['/authentication']); // Fallback if role is invalid
            break;
        }
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      await this.router.navigate(['/login']);
    } finally {
      loading.dismiss();
    }
  }

  async resetPassword() {
    return this.router.navigate(['/reset-password']);
  }

  ngAfterViewInit() {
    const sign_in_btn = document.querySelector('#sign-in-btn');
    const sign_up_btn = document.querySelector('#sign-up-btn');
    const container = document.querySelector('.container');

    if (sign_up_btn && container) {
      sign_up_btn.addEventListener('click', () => {
        container.classList.add('sign-up-mode');
      });
    }

    if (sign_in_btn && container) {
      sign_in_btn.addEventListener('click', () => {
        container.classList.remove('sign-up-mode');
      });
    }
  }

  tabs() {
    this.router.navigate(['tabs']);
  }
}
