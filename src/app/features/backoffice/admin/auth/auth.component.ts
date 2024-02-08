import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  authForm:FormGroup;

  constructor(private formBuild:FormBuilder,private authService:AuthorizationService) { 
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
  }

  enviarAuth(){
    this.authService.nuevaAuth(this.authForm.value).subscribe((resp)=>{
      alert(resp);
    })
  }

}
