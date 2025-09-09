import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailServices {
  http= inject(HttpClient)
  headers = new HttpHeaders({ Authorization: `Bearer ${environment.apiKey}` });
  apiUrl = environment.apiUrl;


  getMovieDetail(id:string|null){
    return this.http.get(`${this.apiUrl}/movie/${id}`,{
      headers:this.headers
    })
  }
}
