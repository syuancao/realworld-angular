import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../home/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input('data') article!: Article;
  @Output('onClick') like = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  likeAction(article: Article) {
    this.like.emit(article)
  }
}
