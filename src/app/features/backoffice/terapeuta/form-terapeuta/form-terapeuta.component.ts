import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Terapeuta } from 'src/app/core/models/usuario.model';
import { TerapeutaService } from 'src/app/core/services/terapeuta.service';

@Component({
  selector: 'app-form-terapeuta',
  templateUrl: './form-terapeuta.component.html',
  styleUrls: ['./form-terapeuta.component.css']
})
export class FormTerapeutaComponent implements OnInit {
  therapistForm: FormGroup;
  imageMin = "";
  modify:boolean= false;
  idEdit:any;

  constructor(private terapeutaService: TerapeutaService,
    private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {

    this.therapistForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      apellido: ["", [Validators.minLength(2), Validators.required, Validators.maxLength(50)]],
      descripcion_terapia: ["", [Validators.minLength(5), Validators.maxLength(300), Validators.required]],
      imagen_perfil: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      terapia: ["", [Validators.required]]

    })
  }

  ngOnInit(): void {
      this.modifyTherapist();
  }

  convertirArchivoABlob(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const imageData = reader.result as string;
      if (imageData) {
        this.imageMin = imageData;
        const base64Data = imageData.split(',')[1];
        this.therapistForm.get("imagen_perfil")?.setValue(base64Data);
        console.log("Onload: valor de imagen de perfil", this.imageMin);
      }
    };

  }


  imagenBlob(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.convertirArchivoABlob(file);
    }
  }

  enviarTerapeuta() {
    if(this.modify){
      if(this.therapistForm.valid){
        console.log(this.therapistForm.value);
        this.terapeutaService.updateTherapist(this.idEdit,this.therapistForm.value).subscribe((data)=>{
          alert(JSON.stringify(data));
          console.log(data);
          this.modify = false
          this.terapeutaService.getAllTherapist();
        });
        this.router.navigate(['therapist-list']);
      }
    }else{
      if (this.therapistForm.valid) {
        this.terapeutaService.saveTherapist(this.therapistForm.value).subscribe((data) => {
          alert(data);
          this.terapeutaService.getAllTherapist();
        });
        this.router.navigate(['therapist-list']);
      } else {
        console.log("Form invalido");

    }

    }

  }

  modifyTherapist(){
    this.route.params.subscribe((idRoute) => {
      this.idEdit = idRoute["id"];
      if(this.idEdit){
        this.modify = true;
        console.log(this.modify);
        this.terapeutaService.getOneTherapist(this.idEdit).subscribe((data)=>{
          this.therapistForm.setValue({
            nombre: data.nombre,
            apellido: data.apellido,
            descripcion_terapia: data.descripcion_terapia,
            imagen_perfil: data.imagen_perfil,
            email: data.email,
            terapia:data.terapia
          })
          this.imageMin = "data:image/jpeg;base64," + data.imagen_perfil;
        })

      }else{
        this.modify = false;
      }
    })
  }

}
