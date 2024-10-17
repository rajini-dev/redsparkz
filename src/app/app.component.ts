import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redsparkz';
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
}
