import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from './models/article.model';
import {map, shareReplay, switchMap} from 'rxjs/operators';
import {BehaviorSubject} from "rxjs";
import {PaginatorComponent} from "../paginator/paginator.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(PaginatorComponent) paginator!: PaginatorComponent;

  page$ = new BehaviorSubject(0)
  source$ = this.page$.pipe(
    switchMap(offset => this.service.loadData({offset})),
    shareReplay()
  )

  data$ = this.source$.pipe(map(result => result.articles))
  totalCount$ = this.service
    .loadData({offset: 20})
    .pipe(map(result => result.articlesCount))

  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.paginator.page$.subscribe(this.page$)
  }

  like(article: Article) {
    article.favoritesCount += 1
  }

  pageChange(idx: number) {
    this.page$.next(idx * 20)
  }
}

