import { Injectable } from '@angular/core';
import { Image } from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private images  = [
    {
      id        : 0,
      name      : "Luzon Narrow-Mouthed Frog",
      filename  : "image2.png"
    },
    {
      id        : 1,
      name      : "Pond Frog",
      filename  : "image3.png"
    },
    {
      id        : 2,
      name      : "Central Bright-eyed Frog",
      filename  : "image1.png"
    },
    {
      id        : 3,
      name      : "Collett's Tree Frog",
      filename  : "image5.png"
    },
    {
      id        : 4,
      name      : "American Bullfrog ",
      filename  : "image4.png"
    },
    {
      id        : 5,
      name      : "Fornasini's Spiny Reed Frog",
      filename  : "image16.png"
    },
    {
      id        : 6,
      name      : "Water Frogs ",
      filename  : "image6.png"
    },
    {
      id        : 7,
      name      : "Polka-dot Tree Frog",
      filename  : "image8.png"
    },
    {
      id        : 8,
      name      : "Embalse San Lorenzo Rain Frog",
      filename  : "image7.png"
    },
    {
      id        : 9,
      name      : "Red-legged Wot-Wot",
      filename  : "image11.png"
    },
    {
      id        : 10,
      name      : "Cassidy's Poison Dart Frog",
      filename  : "image9.png"
    },
    {
      id        : 11,
      name      : "Table Mountain Ghost Frog",
      filename  : "image10.png"
    },
    {
      id        : 12,
      name      : "Natterjack Toad",
      filename  : "image12.png"
    }
    ,
    {
      id        : 13,
      name      : "Rio Chingual Valley Tree Frog",
      filename  : "image13.png"
    },
    {
      id        : 14,
      name      : "Barking Treefrog",
      filename  : "image14.png"
    },
    {
      id        : 15,
      name      : "Black Rain Frog",
      filename  : "image15.png"
    },
    {
      id        : 16,
      name      : "Spotted Painted Reedfrog",
      filename  : "image17.png"
    },
    {
      id        : 17,
      name      : "Oregon Spotted Frog",
      filename  : "image18.png"
    },
    {
      id        : 18,
      name      : "Kelaart's Starry Shrub Frog",
      filename  : "image19.png"
    },
    {
      id        : 19,
      name      : "Uakari Poison Frog",
      filename  : "image20.png"
    }
  ];

  public getGallery(): Array<Image> {
    return this.images;
  }

  public getImage(id: number): Image {
    return this.images.find(image => image.id === id );
  }
}
