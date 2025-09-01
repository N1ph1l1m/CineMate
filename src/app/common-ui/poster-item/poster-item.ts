import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster-item',
  imports: [],
  templateUrl: './poster-item.html',
  styleUrl: './poster-item.scss'
})
export class PosterItem {
 @Input() listPoster: any
}
