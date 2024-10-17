import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  headerfixed: boolean = false;
  menuOpen: boolean = false;
  getScreenWidth!: number;
  constructor(private router: Router, private route: ActivatedRoute) {
    window.addEventListener('scroll', this.onScroll);
  }

  @Output()
  openDrawer: EventEmitter<any> = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  onScroll = () => {
    if (window.scrollY > 0) {
      this.headerfixed = true; // Scrolled down
      
    } else {
      this.headerfixed = false; // Scrolled up
      
    }
  };

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }

  navigateToExternal(url: string) {
    window.open(url, '_blank');
  }
}
