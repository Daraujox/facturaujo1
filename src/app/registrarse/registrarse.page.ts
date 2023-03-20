import { Component, OnInit } from '@angular/core';
import { FormGroup, 
  FormControl, 
  Validators, 
  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) { 

    this.formularioRegistro = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacionpassword': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

}
