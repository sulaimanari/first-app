import { Injectable } from '@angular/core';
import { Foto } from './foto';
import { FOTOS } from './fotos';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  private currentIndex = 0; 
  constructor() { }

  getDefault(): Foto {
    return FOTOS[0];
  }

  getNext(): Foto {
    if (this.currentIndex < FOTOS.length - 1) {
      this.currentIndex++;
    }
    return FOTOS[this.currentIndex];   
  }

  getPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    return FOTOS[this.currentIndex];
  }

  searchPhotosByName(name: string): Foto[] {
    return FOTOS.filter(foto => foto.name.toLowerCase().includes(name.toLowerCase()));
  }
}
