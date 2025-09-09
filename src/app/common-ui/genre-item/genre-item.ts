import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ImagePipePipe } from '../../pipes/image-pipe/image-pipe-pipe';

interface IImagePoster {
  id: number;
  image: string;
}
@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.html',
  imports: [TitleCasePipe,ImagePipePipe],
  styleUrls: ['./genre-item.scss'],
})
export class GenreItem implements OnChanges {
  @Input() genres: any = null; // один объект жанра

  imagePoster: IImagePoster[] = [
    { id: 28, image: '/rwwkWkmecrH9glp5XJGZx3nPLhW.jpg' },
    { id: 12, image: '/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg' },
    { id: 16, image: '/1pmXyN3sKeYoUhu5VBZiDU4BX21.jpg' },
    { id: 35, image: '/1wi1hcbl6KYqARjdQ4qrBWZdiau.jpg' },
    { id: 80, image: '/sItIskd5xpiE64bBWYwZintkGf3.jpg' },
    { id: 99, image: '/1AWjIUgbZYaKbwUH5qoJaKCcRkf.jpg' },
    { id: 18, image: '/gZWl93sf8AxavYpVT1Un6EF3oCj.jpg' },
    { id: 10751, image: '/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg' },
    { id: 14, image: '/bfh9Z3Ghz4FOJAfLOAhmc3ccnHU.jpg' },
    { id: 36, image: '/neeNHeXjMF5fXoCJRsOmkNGC7q.jpg' },
    { id: 27, image: '/96Q04AnaKv6Gn0WJYwUGkFZwIEb.jpg' },
    { id: 10402, image: '/7mmXWuBeNJiBO0NIOUWOuFve4Tb.jpg' },
    { id: 9648, image: '/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg' },
    { id: 10749, image: '/tupgjqhWx5oieQrdyesO3aclUX9.jpg' },
    { id: 878, image: '/vL5LR6WdxWPjLPFRLe133jXWsh5.jpg' },
    { id: 10770, image: '/1UAqfCJAxp4LO1an8KbaueCG7CR.jpg' },
    { id: 53, image: '/mEW9XMgYDO6U0MJcIRqRuSwjzN5.jpg' },
    { id: 10752, image: '/vDKRMZGFTKP9nQolzeSB1rB1w6p.jpg' },
    { id: 37, image: '/n2eUT4zQA2yYcKOgAFidgOyiFoH.jpg' },
  ];

  updateGenresData: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['genres'] && this.genres) {
      const found = this.imagePoster.find(
        (image) => image.id === this.genres.id
      );
      this.updateGenresData = {
        ...this.genres,
        image: found ? found.image : null,
      };
    }
  }
}
