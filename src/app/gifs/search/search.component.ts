import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtSearch.nativeElement.value;
    this.txtSearch.nativeElement.value = '';
    console.log(valor);
  }
}
