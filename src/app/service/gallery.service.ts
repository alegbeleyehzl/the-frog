import { Injectable } from '@angular/core';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private images  = [
    {
      id        : 0,
      name      : "Blue Dart Poison Frog",
      filename  : "blue-dart-poison-frog.jpg"
    },
    {
      id        : 1,
      name      : "Dend Leucomelas",
      filename  : "dend_leucomelas.jpg"
    },
    {
      id        : 2,
      name      : "Phyl Bicolor",
      filename  : "phyl_bicolor.jpg"
    },
    {
      id        : 3,
      name      : "Tomato Frog Reptiland",
      filename  : "tomato-frog_reptiland.jpg"
    },
    {
      id        : 4,
      name      : "V",
      filename  : "V.jpg"
    },
    {
      id        : 5,
      name      : "X",
      filename  : "X.jpg"
    }
  ];

  public getGallery(): Array<Image> {
    return this.images;
  }

  public getImage(id: number): Image {
    return this.images.find(image => image.id === id );
  }
}
