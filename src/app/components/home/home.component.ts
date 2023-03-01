import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <br>
    <app-ng-style></app-ng-style>
    <br>
    <app-css></app-css>
    <br>
    <app-clases></app-clases>
    <br>
    <p [appResaltado]="'blue'">
            Hola mundo desde app.components
    </p>
    <app-ng-swit></app-ng-swit>
  ` ,
  styles: []
})
export class HomeComponent {

}
