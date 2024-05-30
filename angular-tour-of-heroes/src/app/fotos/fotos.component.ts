import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto'
import { FotoService } from '../foto.service';


@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})

export class FotosComponent {

  currentFoto: Foto | undefined;
  searchTerm: string | undefined;

  constructor(private fotoService: FotoService) {
  }

  ngOnInit(): void {
    this.currentFoto = this.fotoService.getDefault();
  }

  searchForPhoto(): void {
    if (this.searchTerm) {
      const foundFotos = this.fotoService.searchPhotosByName(this.searchTerm);
      if (foundFotos.length > 0) {
        this.currentFoto = foundFotos[0];
      } else {
        this.currentFoto = undefined;
      }
    }
  }

  nextFoto(): void {
    this.currentFoto = this.fotoService.getNext();
  }

  previousFoto(): void {
    this.currentFoto = this.fotoService.getPrevious();
  }

}
