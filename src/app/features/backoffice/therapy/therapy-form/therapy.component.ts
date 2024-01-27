import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TherapyService } from 'src/app/core/services/therapy.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Therapy } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.component.html',
  styleUrls: ['./therapy.component.css']
})
export class TherapyFormComponent implements OnInit {
  therapyForm: FormGroup;
  updateMode: Boolean = false;
  editTherapy: any;
  titleBottom: string = "Guardar";
  idUpdate:any;

  constructor(private formBuilder: FormBuilder,
    private therapyService: TherapyService, private router: Router,private route: ActivatedRoute) {
    this.therapyForm = this.formBuilder.group({
      linkImagen: ["", [Validators.minLength(5), Validators.maxLength(300), Validators.required]],
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      descripcion: ["", [Validators.minLength(2), Validators.required, Validators.maxLength(800)]],
    })
  }

  ngOnInit(): void {
    this.editarTherapy();
  }

  therapySend() {
    if(!this.updateMode){
      this.therapyService.saveTherapy(this.therapyForm.value).subscribe((resp) => {
        alert(resp);
        
      })
    }else{
      this.therapyService.updateOneTherapy(this.idUpdate,this.therapyForm.value).subscribe((resp)=>{
        alert(resp.therapy);
      })
    }
    this.router.navigate(['therapy/list']);
    }

  cargarForm(therapy:Therapy){
    this.therapyForm.patchValue(therapy);
  }

  editarTherapy(){
    this.idUpdate = this.route.snapshot.paramMap.get('id');
    if(this.idUpdate){
      this.updateMode = true;
      this.therapyService.editTherapy$.subscribe((resp)=>{
        this.cargarForm(resp);
        this.titleBottom = 'Modificar';
      })
    }else{
      this.updateMode = false;
      this.titleBottom = 'Guardar';
      this.therapyForm.reset();
    }
  }

}


