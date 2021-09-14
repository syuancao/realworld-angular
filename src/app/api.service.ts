import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Articles } from './home/models/article.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  basicUrl = 'https://conduit.productionready.io/'
  constructor(private http: HttpClient) {}

  loadData({ offset }: {offset: number}) {
    let params = new HttpParams();
    params = params.set("limit", "20")
    if(!!offset) {
      params = params.set('offset', offset)
    }

    return this.http.get<Articles>(`${this.basicUrl}/api/articles`, {
      params
    }).pipe(
      map(result=>{
        result.articles.forEach(article => {
          article.createdAt = new Date(article.createdAt)
          article.updatedAt = new Date(article.updatedAt)
        })
        return result
      })
    )
  }
}
