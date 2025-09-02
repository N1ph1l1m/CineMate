import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poster-item',
  imports: [DatePipe, DecimalPipe],
  templateUrl: './poster-item.html',
  styleUrl: './poster-item.scss',
})
export class PosterItem {
  Number(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  @Input() listPoster: any;
}
