import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TerapeutaService } from 'src/app/core/services/terapeuta.service';

@Component({
  selector: 'app-form-terapeuta',
  templateUrl: './form-terapeuta.component.html',
  styleUrls: ['./form-terapeuta.component.css']
})
export class FormTerapeutaComponent implements OnInit {
  therapistForm: FormGroup;
  imageMin = "";

  constructor(private terapeutaService: TerapeutaService,
    private formBuilder: FormBuilder) {

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


imagenBlob(event: Event){
  const inputElement = event.target as HTMLInputElement;
  if (inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0];
    this.convertirArchivoABlob(file);
  }
}

enviarTerapeuta(){
  if (this.therapistForm.valid) {
    console.log("formValido", this.therapistForm.value);
    this.terapeutaService.guardarTerapeuta(this.therapistForm.value).subscribe((data) => {
      alert(data);
    })
  } else {
    console.log("Form invalido");

  }

}


}
