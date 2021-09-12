import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../home/home.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  @Output() like = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  likeAction(article: Article) {
    this.like.emit(article)
  }
}
