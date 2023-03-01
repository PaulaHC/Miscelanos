import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template:``
})
export class UsuarioEditarComponent {
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((parametros:any)=>{
      console.log("Hijo editar: "+parametros.id);
    })
  }
}
