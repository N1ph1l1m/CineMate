import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

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



getVoteAverage(poster: any): string  {
  if (!poster) return '';
  let vote_average = Math.floor(parseFloat(poster));
    if(vote_average <=4){
      return 'red'
    }else if(vote_average >4 &&  vote_average <= 7){
      return 'orange'
    }else if (vote_average >= 8 &&  vote_average <= 10){
      return 'green'
    }else{
      return 'black'
    }
}
}
