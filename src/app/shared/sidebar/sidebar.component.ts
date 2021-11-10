import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  get historial() {
    return this.gifsService.historial
    //Si se implementa aqui solo la información mostrada es manipulada y no se pierde información.
    // return this.gifsService.historial.slice(0, 10);
  }

  constructor(private gifsService: GifsService) { }


}
