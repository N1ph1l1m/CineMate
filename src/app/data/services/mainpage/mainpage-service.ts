import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IApiResponse } from '../../../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class MainpageService {
  http = inject(HttpClient);
  headers = new HttpHeaders({ Authorization: `Bearer ${environment.apiKey}` });
  apiUrl = environment.apiUrl;
  templateUrlImg = `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)`;

languages = '?language=ru-RU'
  getNowPlaying():Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiUrl}/movie/now_playing${this.languages}`, {
      headers: this.headers,
    });
  }

  getImage(img: string) {
    return this.http.get(`${this.templateUrlImg}${img}`, {
      responseType: 'blob',
    });
  }

  getTrendingMovie(time:string){
    return this.http.get(`${this.apiUrl}/trending/movie/${time}${this.languages}`, {headers: this.headers,
    })
  }
  getTrendingTV(time:string){
    return this.http.get(`${this.apiUrl}/trending/tv/${time}${this.languages}`, {headers: this.headers,
    })
  }
  getTrendingPeople(time:string){
    return this.http.get(`${this.apiUrl}/trending/person/${time}${this.languages}`, {headers: this.headers,
    })
  }
  getPopularList():Observable<IApiResponse> {
    return this.http.get<IApiResponse>(`${this.apiUrl}/movie/popular${this.languages}`, {
      headers: this.headers,
    });
  }

   getOnTheAir() {
    return this.http.get(`${this.apiUrl}/tv/on_the_air${this.languages}`, {
      headers: this.headers,
    });
  }
    getAiringToday() {
    return this.http.get(`${this.apiUrl}/tv/airing_today${this.languages}`, {
      headers: this.headers,
    });}

    // getTVGenres(){
    //   return this.http.get(`${this.apiUrl}/discover/tv?with_genres=16&without_genres=10762&without_genres=10751&with_original_language=ja`,{
    //   headers: this.headers,
    // })
    // }
       getTVGenres(){
      return this.http.get(`${this.apiUrl}/discover/movie?with_genres=12`,{
      headers: this.headers,
    })
    }

    getListGenres(){
      return this.http.get(`${this.apiUrl}/genre/movie/list${this.languages}`,{headers:this.headers})
    }
  }
