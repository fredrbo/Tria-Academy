import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  route = this.router.url;
  language: string = 'en-us';
  pwdHidden: boolean = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      pwd: [null, Validators.required],
    })
  }

  changeHidden() {
    if (this.pwdHidden) {
      this.pwdHidden = false
    } else {
      this.pwdHidden = true
    }
  }

  onSubmit(): boolean {
    if (this.form.value.pwd == 123456)
      return true
    else
      return false
  }

  selectLanguage(language: string) {
    if (language === 'en-us') {
      this.language = 'pt-br'
    }
    else {
      this.language = 'en-us'
    }

  }
}
