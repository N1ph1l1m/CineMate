import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MainpageService {
  http = inject(HttpClient);
  headers = new HttpHeaders({ Authorization: `Bearer ${environment.apiKey}` });
  apiUrl = environment.apiUrl;
  templateUrlImg = `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)`;

  getNowPlaying() {
    return this.http.get(`${this.apiUrl}/movie/now_playing`, {
      headers: this.headers,
    });
  }

  getPopularList() {
    return this.http.get(`${this.apiUrl}/movie/popular`, {
      headers: this.headers,
    });
  }

  getImage(img: string) {
    return this.http.get(`${this.templateUrlImg}${img}`, {
      responseType: 'blob',
    });
  }
}
