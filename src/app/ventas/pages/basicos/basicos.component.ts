import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'cayetano';
  nombreUpper: string = 'CAYETANO';
  nombreCompleto: string = 'cAyetANo gOMez';

  fecha: Date = new Date();
}
