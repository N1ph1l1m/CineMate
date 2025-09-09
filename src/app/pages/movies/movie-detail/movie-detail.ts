import { Component, inject } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { MovieDetailServices } from '../../../data/services/movie-detail/movie-detail-services';
@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.scss'
})
export class MovieDetail {
route = inject(ActivatedRoute)
movieId:string|null = null
movieDetailServices = inject(MovieDetailServices)
movieDetailData:any=[];

ngOnInit(){
  this.movieId = this.route.snapshot.paramMap.get('id')
  this.movieDetailServices.getMovieDetail(this.movieId).subscribe((val:any)=>{
    console.log(val)
    if(val.length !==0){
    this.movieDetailData = val
    }else{
      console.error('error data')
    }

  })
}
}
