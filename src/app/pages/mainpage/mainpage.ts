import { Component, inject } from '@angular/core';
import { MainpageService } from '../../data/services/mainpage/mainpage-service';
import { PosterItem } from '../../common-ui/poster-item/poster-item';
import { map, of } from 'rxjs';
import { ContentSwitcher } from '../../content-switcher/content-switcher';
import { IApiResponse, IApiResponseResults } from '../../interfaces/api-response.interface';
import { GenreItem } from '../../common-ui/genre-item/genre-item';
import { IContentSwitcher } from './mainpage.interface';

@Component({
  selector: 'app-mainpage',
  imports: [PosterItem,ContentSwitcher,GenreItem],
  templateUrl: './mainpage.html',
  styleUrl: './mainpage.scss',
})


export class Mainpage {

  mainPageService = inject(MainpageService);

  bannerImg: any = '';
  popularList: any = [];
  trendsList: any = [];
  genresList : any= [];
  contentSwitcher:IContentSwitcher[] = [
    {title:'В тренде',
      items:[{name:'Сегодня',value:"day"},{name:'На этой неделе',value:"week"}]
  },
      {title:'Что популярно',
      items:[{name:'Онлайн',value:"online"},{name:'По ТВ',value:"onTv"},{name:'Аниме',value:"anime"},{name:'Люди',value:"people"},]
  },
     {title:'Бесплатное',
      items:[{name:'Фильмы',value:"movies"},{name:'Сериалы',value:"serials"}]
  },
]

ngOnInit() {
    this.mainPageService.getNowPlaying().subscribe((val:IApiResponse) => {
      const response:IApiResponseResults[] = val.results;

      if (response) {
        const photos = response.map((item: any) => item.backdrop_path);
        const image = photos[Math.floor(Math.random() * photos.length)];
        this.mainPageService.getImage(image).subscribe((blob) => {
          this.bannerImg = URL.createObjectURL(blob);
        });
      }
    });


    this.mainPageService
      .getPopularList()
      .pipe(map((val) => (val?.results ? val.results : null)))
      .subscribe((firstItem) => {
        this.popularList = firstItem;
        // console.log(firstItem);
      });

    this.mainPageService.getListGenres()
    .pipe(map((val:any)=>val?.genres ? val.genres : null))
    .subscribe((genres)=>{
      this.genresList = genres
      // console.log(genres)
    })

  }


onTrendsSelected(value:string){
  let obs$;
  if(value == 'day'){
     obs$ = this.mainPageService.getTrendingMovie(value);
  }else if(value == 'week'){
   obs$ = this.mainPageService.getTrendingMovie(value);
  }else{
    obs$ = of([])
  }

  obs$.pipe(map((val:any)=>(val?.results ? val.results : [])))
  .subscribe((data)=>{
    this.popularList = data;

  })
}
onPopularSelected(value:string){
  let obs$;
  if(value == 'online'){
     obs$ = this.mainPageService.getOnTheAir();
  }else if(value == 'onTv'){
   obs$ = this.mainPageService.getTrendingTV('week');
  }else if(value == 'people'){
   obs$ = this.mainPageService.getTrendingPeople('week');
  }else if(value == 'anime'){
   obs$ = this.mainPageService.getTVGenres();
  }else{
    obs$ = of([])
  }
  obs$.pipe(map((val:any)=>(val?.results ? val.results : [])))
  .subscribe((data)=>{
    this.trendsList = data;

    console.log(data)
  })
}



}
