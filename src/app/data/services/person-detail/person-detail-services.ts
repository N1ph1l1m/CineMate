import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IPersonDetail } from '../../../interfaces/person-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailServices {
    http= inject(HttpClient)
  headers = new HttpHeaders({ Authorization: `Bearer ${environment.apiKey}` });
  apiUrl = environment.apiUrl;


  getPersonDetail(id:string | null): Observable<IPersonDetail>{
    if(!id){
      throw new Error('Person id is required')
    }

    return this.http.get<IPersonDetail>(`${this.apiUrl}/person/${id}`,{
      headers:this.headers
    })
  }
}
