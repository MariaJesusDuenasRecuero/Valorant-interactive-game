import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  public hide = false;
  public fg: FormGroup = new FormGroup({});

  private password = 'test';
  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
    this.fg = this.fb.group({
      password: ['', Validators.required],
    });
  }

}
