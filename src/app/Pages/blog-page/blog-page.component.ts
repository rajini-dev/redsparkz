import { Component } from '@angular/core';
import { Blog } from 'src/app/model/blogs/blogs.module';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
    blogs: Blog[] = [
      {
        id: 1,
        title:'Top Home Appliance Repair & Cleaning Services in Chennai | Red Sparkz',
        content: 'This is the full content of Blog 1.',
        description: `Is your kitchen chimney clogged with grease and grime? Our chimney cleaning experts in Chennai ensure your appliance runs efficiently with:`,
        author: 'Author 1',
        createdAt: new Date(),
        image: '/assets/Banners/blog.png',
      },
      {
        id: 2,
        title: 'Blog 2',
        content: 'This is the full content of Blog 2.',
        description: 'This is a short description of Blog 2.',
        author: 'Author 2',
        createdAt: new Date(),
      image: '/assets/Banners/blog.png',
      },
      {
        id: 3,
        title: 'Blog 3',
        content: 'This is the full content of Blog 3.',
        description: 'This is a short description of Blog 3.',
        author: 'Author 3',
        createdAt: new Date(),
      image: '/assets/Banners/blog.png',
      },
      {
        id: 4,
        title: 'Blog 4',
        content: 'This is the full content of Blog 4.',
        description: 'This is a short description of Blog 4.',
        author: 'Author 4',
        createdAt: new Date(),
      image: '/assets/Banners/blog.png',
      },
      {
        id: 5,
        title: 'Blog 5',
        content: 'This is the full content of Blog 4.',
        description: 'This is a short description of Blog 4.',
        author: 'Author 4',
        createdAt: new Date(),
      image: '/assets/Banners/blog.png',
      },
      {
        id: 6,
        title: 'Blog 6',
        content: 'This is the full content of Blog 4.',
        description: 'This is a short description of Blog 4.',
        author: 'Author 4',
        createdAt: new Date(),
      image: '/assets/Banners/blog.png',
      },
    ];
  
}
