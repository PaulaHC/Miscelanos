import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template:``
})
export class UsuarioDetalleComponent {
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((parametros:any)=>{
      console.log("Hijo detalle: "+parametros.id);
    })
  }
}
