import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from './models/article.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // data: Article[] = []
  data$ = this.service.loadData().pipe(map(result => result.articles))

  // basicUrl = 'https://conduit.productionready.io/'

  constructor(private service: ApiService) {
    // this.loadData()
  }

  // loadData() {
  //   this.service
  //     .loadData()
  //     .pipe(map(result => result.articles))
  //     .subscribe({
  //       next: articles => {
  //         this.data = articles
  //       }
  //     })
  // }

  ngOnInit(): void {
  }

  like(article: Article) {
    article.favoritesCount += 1
  }
}

