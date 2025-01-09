import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/model/blogs/blogs.module';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blog: Blog | null = null;

  blogs: Blog[] = [
    {
      id: 1,
      title:
        'Top Home Appliance Repair & Cleaning Services in Chennai | Red Sparkz',
      content: `Is your kitchen chimney clogged with grease and grime? Our chimney cleaning experts in Chennai ensure your appliance runs efficiently with:
                Deep cleaning of filters, ducts, and motors.Repair of suction issues, motor damage, and fan malfunctions.Professional installation and uninstallation services.
                Preventive maintenance to extend your chimney's lifespan.
                If you’re searching for “chimney cleaning and repair near me”, we’re your trusted partner in Chennai!`,
      author: 'Author 1',
      createdAt: new Date(),
      description: 'bhjfbejfnef',
      image: '/assets/Banners/blog.png',
    },
    {
      id: 2,
      title: 'Blog 2',
      content: 'Content of Blog 2',
      author: 'Author 1',
      createdAt: new Date(),
      description: 'bhjfbejfnef',
      image: '/assets/Banners/blog.png',
    },
    {
      id: 3,
      title: 'Blog 3',
      content: 'Content of Blog 3',
      author: 'Author 3',
      createdAt: new Date(),
      description: 'bhjfbejfnef',
      image: '/assets/Banners/blog.png',
    },
    {
      id: 4,
      title: 'Blog 4',
      content: 'Content of Blog 4',
      author: 'Author 4',
      createdAt: new Date(),
      description: 'bhjfbejfnef',
      image: '/assets/Banners/blog.png',
    },
    {
      id: 5,
      title: 'Blog 5',
      content: 'Content of Blog 5',
      author: 'Author 5',
      createdAt: new Date(),
      description: 'bhjfbejfnef',
      image: '/assets/Banners/blog.png',
    },
    {
      id: 6,
      title: 'Blog 6',
      content: 'Content of Blog 6',
      author: 'Author 6',
      createdAt: new Date(),
      description: 'bhjfbejfnef',
      image: '/assets/Banners/blog.png',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const blogId = +this.route.snapshot.paramMap.get('id')!;
    this.blog = this.blogs.find((b) => b.id === blogId) || null;
  }
}
