import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
  description:string;
  image:string;
}
