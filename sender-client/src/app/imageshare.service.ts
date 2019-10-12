import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImageshareService {

  images: string;

  constructor() { }

Setimage(message: string) {

  this.images = message;

}

  getImage(){

    return this.images;
  }

}
