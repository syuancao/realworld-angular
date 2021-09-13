import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from './models/article.model';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  source$ = this.service.loadData().pipe(shareReplay())
  data$ = this.service.loadData().pipe(map(result => result.articles))
  totalCount$ = this.service.loadData().pipe(map(result => result.articlesCount))
  constructor(private service: ApiService) {
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
    // const observer = {
    //   next: v => {},
    //   error: err => {},
    //   complete: () => {}
    // }
    // this.service.loadData().subscribe(observer)
  }

  like(article: Article) {
    article.favoritesCount += 1
  }
}

