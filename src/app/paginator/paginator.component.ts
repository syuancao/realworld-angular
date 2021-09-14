import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() totalCount: number | null = 0;
  @Input() pageSize = 20
  @Output() pageChange = new EventEmitter<number>()

  pages: any = []
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes)
    this.totalCount = changes['totalCount'].currentValue

    if(this.totalCount) {
      this.pages = new Array(Math.ceil(this.totalCount / this.pageSize))
    }
  }

  setPage(idx: number) {
    this.pageChange.emit(idx)
  }
}
