import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template:`
    <p>Usuario nuevo</p>
  `
})
export class UsuarioNuevoComponent {
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((parametros:any)=>{
      console.log("Hijo Nuevo: "+parametros.id);
    })
  }
}
