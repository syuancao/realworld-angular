import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Articles, Article } from './models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data: Article[] = []
  basicUrl = 'https://conduit.productionready.io/'

  constructor(private http: HttpClient) {
    this.loadData()  
  }

  loadData() {
    this.http.get<Articles>(`${this.basicUrl}/api/articles`).subscribe({
      next: result => {
        console.log(result)
        this.data = result.articles
      }
    })
  }

  ngOnInit(): void {
  }

  like(article: Article) {
    article.favoritesCount += 1
  }
}

 