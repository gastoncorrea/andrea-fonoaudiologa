import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/models/usuario.model';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.css']
})
export class AuthListComponent implements OnInit {
  listAuth?: Auth[];
  error?: any;
  constructor(private authServ: AuthorizationService, private router: Router) { }

  ngOnInit(): void {
    this.listaAutorizaciones();
  }

  listaAutorizaciones(
  ) {
    this.authServ.listaDeAuth().subscribe({
      next: (resp: Auth[]) => {
        this.listAuth = resp;
      },
      error: (err: any) => {
        this.error = err;
      }
    }
    );
  }

  editar(auth: Auth) {
    this.router.navigate(['auth/update/' + auth.id]);
  }

  deleteAuth(id: number) {
    this.authServ.eliminarAuth(id).subscribe((resp) => {
      alert(resp);
      this.ngOnInit();
    }

    )
  }
}