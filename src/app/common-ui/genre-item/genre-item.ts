import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface IImagePoster {
  id: number;
  images: string;
}
@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.html',
  imports: [TitleCasePipe],
  styleUrls: ['./genre-item.scss'],
})
export class GenreItem implements OnChanges {
  @Input() genres: any = null; // один объект жанра

  imagePoster: IImagePoster[] = [
    { id: 28, images: '/rwwkWkmecrH9glp5XJGZx3nPLhW.jpg' },
    { id: 12, images: '/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg' },
    { id: 16, images: '/1pmXyN3sKeYoUhu5VBZiDU4BX21.jpg' },
    { id: 35, images: '/1wi1hcbl6KYqARjdQ4qrBWZdiau.jpg' },
    { id: 80, images: '/sItIskd5xpiE64bBWYwZintkGf3.jpg' },
    { id: 99, images: '/1AWjIUgbZYaKbwUH5qoJaKCcRkf.jpg' },
    { id: 18, images: '/gZWl93sf8AxavYpVT1Un6EF3oCj.jpg' },
    { id: 10751, images: '/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg' },
    { id: 14, images: '/bfh9Z3Ghz4FOJAfLOAhmc3ccnHU.jpg' },
    { id: 36, images: '/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg' },
    { id: 27, images: '/96Q04AnaKv6Gn0WJYwUGkFZwIEb.jpg' },
    { id: 10402, images: '/7mmXWuBeNJiBO0NIOUWOuFve4Tb.jpg' },
    { id: 9648, images: '/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg' },
    { id: 10749, images: '/tupgjqhWx5oieQrdyesO3aclUX9.jpg' },
    { id: 878, images: '/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg' },
    { id: 10770, images: '/1UAqfCJAxp4LO1an8KbaueCG7CR.jpg' },
    { id: 53, images: '/mEW9XMgYDO6U0MJcIRqRuSwjzN5.jpg' },
    { id: 10752, images: '/vDKRMZGFTKP9nQolzeSB1rB1w6p.jpg' },
    { id: 37, images: '/n2eUT4zQA2yYcKOgAFidgOyiFoH.jpg' },
  ];

  updateGenresData: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['genres'] && this.genres) {
      const found = this.imagePoster.find(
        (images) => images.id === this.genres.id
      );
      this.updateGenresData = {
        ...this.genres,
        images: found ? found.images : null,
      };
    }
  }
}
