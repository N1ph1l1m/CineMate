import { JsonPipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.html',
  imports:[TitleCasePipe],
  styleUrls: ['./genre-item.scss']

})
export class GenreItem implements OnChanges {
  @Input() genres: any = null;   // один объект жанра

  imagePoster = [
    {
      id: 28,
      images:'/rwwkWkmecrH9glp5XJGZx3nPLhW.jpg',
    }
  ];

  updateGenresData: any = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['genres'] && this.genres) {
      const found = this.imagePoster.find(images => images.id === this.genres.id);
      this.updateGenresData = {
        ...this.genres,
        images: found ? found.images : null
      };
    }
  }
}
