import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit(): void {
  }

}
