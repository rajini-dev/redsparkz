import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redsparkz';
  afterFooterContent: string | null = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        let currentRoute = this.activatedRoute.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        const data = currentRoute.snapshot.data;
        this.afterFooterContent = data['afterFooterContent'] ?? null;
      });
  }

  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
}
