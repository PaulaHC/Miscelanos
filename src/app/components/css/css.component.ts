import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  template:`
   <br>
    <p>
      css Word!!
    </p>
  `,
  styles: [`
    p{
      color:red;
      font-size:20px;
    }
  
  `]
})
export class CssComponent {

}
