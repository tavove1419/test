import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/autentication/authentication.service';
import { LoginService } from './../../services/login.service';
import {MessageService} from 'primeng/api';

export interface Logueo {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  dataLogin: Logueo;
  loginError = false;
  isLoading = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private route: Router,
    private authenticationService: AuthenticationService,
    private messageService: MessageService
  ) { 
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.formLogin = this.fb.group ({
      user: [null, [Validators.required, Validators.email]],
      pass: [null, [Validators.required]]
    });
  }

  login() {
    console.log();
    this.isLoading = true;
    this.loginError = false;
    if (this.formLogin.valid) {
      const dataForm = this.formLogin.value
      this.dataLogin = {
        email: dataForm.user,
        password: dataForm.pass
      }
      
      this.loginService.isLogin(this.dataLogin).subscribe(res => {
        if (res.token) {
          sessionStorage.setItem('Token', res.token);
        } else {
          this.loginError = true;
          this.isLoading = false;
        }
        this.isLogged();
      }, (error: any) => {
        this.messageService.add({severity:'error', summary: 'Usuario no Encontrado', detail: 'Validar correo y contraseña'});
        this.isLoading = false;
        return error
      });
      
    } else {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Validar información ingresada'});
    }
    
  }

  async isLogged() {
    if(this.authenticationService.isLogged()) {
      this.route.navigateByUrl('home/inicio');
    }
  }

}
