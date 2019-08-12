import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
 @ViewChild( 'txtProgress', {static: false} ) txtProgress: ElementRef;
 @Input() porcentaje: number;
 @Input() leyenda: string;

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.leyenda = 'leyenda';

    this.porcentaje = 50;
  }

  ngOnInit() {
    console.log('porcentaje Desde OnInit: ', this.porcentaje);
     }

     Onchanges( newValue: number) {
        // const elemHTML: any = document.getElementsByName('porcentaje')[0];

        if ( newValue >= 100) {
         this.porcentaje = 100;
       } else if ( newValue <= 0) {
         this.porcentaje = 0;
       } else {
         this.porcentaje = newValue;
       }

        this.txtProgress.nativeElement.value = this.porcentaje;
        console.log(newValue);


        this.cambioValor.emit(this.porcentaje);

     }
  CambiarValor( valor ) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();

  }
}
