import { Directive,ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el :ElementRef) { 

    console.log("Directiva llamada");
  }
  @Input("appResaltado") nuevoColor:string | undefined;
  @HostListener('mouseenter')mouseEntro(){
    this.resaltar(this.nuevoColor|| 'yellow')
  }
  @HostListener('mouseleave')mouseSalio(){
    this.resaltar("");
  }
  private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor=color;
  }
}
