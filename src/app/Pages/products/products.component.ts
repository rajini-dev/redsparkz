import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  ngOnInit() {
    window.scrollTo(0, 0); // Scrolls the page to the top on load
  }
}
