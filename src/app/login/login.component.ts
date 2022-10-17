import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public hide = false;
  public fg: FormGroup = new FormGroup({});

  private password = 'test';
  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.fg.invalid) {
      return;
    }

    if (this.fg.get('password')?.value !== this.password) {
      return;
    }
    this.router.navigate(['/general/video']);
  }
}
