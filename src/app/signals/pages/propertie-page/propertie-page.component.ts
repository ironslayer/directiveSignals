import { Component } from '@angular/core';

@Component({
  templateUrl: './propertie-page.component.html',
  styleUrl: './propertie-page.component.css'
})
export class PropertiePageComponent {

  onFieldUpdated( field:string, value:string ){
    console.log({ field, value })
  }


}
