import { Component, OnInit } from '@angular/core';

const mockData: Article[] = [
  {
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'Eric Simons',
    publishDate: new Date('2010-01-20'),
    likes: 29,
    title: 'How to build webapps that scale',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae doloremque reprehenderit praesentium impedit velit eius magnam molestiae earum ratione deleniti corrupti fugit numquam unde saepe voluptas nisi ex, nulla natus!'
  },
  {
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    author: 'Albert Pai',
    publishDate: new Date('2020-02-20'),
    likes: 32,
    title: `The song you won't ever stop singing. No matter how hard you try.`,
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae doloremque reprehenderit praesentium impedit velit eius magnam molestiae earum ratione deleniti corrupti fugit numquam unde saepe voluptas nisi ex, nulla natus!'
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = mockData
  constructor() { }

  ngOnInit(): void {
  }

}

export interface Article {
  avator: string;
  author: string;
  publishDate: Date;
  likes: number;
  title: string;
  content: string
}