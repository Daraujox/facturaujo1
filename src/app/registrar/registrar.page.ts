import { Component, OnInit } from '@angular/core';
import { FormGroup, 
  FormControl, 
  Validators, 
  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  formularioregistrar: FormGroup;

constructor(public fb2: FormBuilder) { 

  this.formularioregistrar = this.fb2.group({
      'nombre1': new FormControl("",Validators.required),
      'id1': new FormControl("",Validators.required),
      'nombre2': new FormControl("",Validators.required),
      'id2': new FormControl("",Validators.required),
      'detalle': new FormControl("",Validators.required),
      'precio': new FormControl("",Validators.required),
      'id3': new FormControl("",Validators.required),
      'detalle2': new FormControl("",Validators.required),
    }
  )
}

  ngOnInit() {
  }

}
