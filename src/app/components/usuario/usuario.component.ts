import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent {
  id:any;
  constructor(private route:ActivatedRoute){
    this.route.params.subscribe((parametros:any)=>{
      console.log(parametros.id);
      this.id=parametros.id;
    })
  }
}
