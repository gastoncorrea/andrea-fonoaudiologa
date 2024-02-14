import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  authForm:FormGroup;
  idAuthUpdate:any;
  updateAuth:boolean = false;
  titleBottom?:string;

  constructor(private formBuild:FormBuilder,private authService:AuthorizationService,
     private router:Router,private route: ActivatedRoute) { 
    this.authForm = this.formBuild.group(
      {
        email:["",[]],
        codigo:["",[]],
        rol:this.formBuild.group(
          {
            id:["",[]]
          }
        )
      }
    )
  }

  ngOnInit(): void {
    this.authModified();
  }

  enviarAuth(){
    this.authService.nuevaAuth(this.authForm.value).subscribe((resp)=>{
      console.log(resp);
      alert(resp);
      this.router.navigate(['admin/dashboard/auth/list'])
    })
  }

  authModified(){
    this.route.params.subscribe((idRoute)=>{
      this.idAuthUpdate = idRoute["id"];
      if(this.idAuthUpdate){
        this.titleBottom = 'Modificar AUTORIZACIÓN';
        this.updateAuth = true;
        this.authService.traerUnaAuth(this.idAuthUpdate).subscribe((resp)=>{
          this.authForm.patchValue(resp);
        })
      }else{
        this.updateAuth = false;
        this.titleBottom = 'Crear nueva AUTORIZACIÓN';
      }
    })
  }

}
