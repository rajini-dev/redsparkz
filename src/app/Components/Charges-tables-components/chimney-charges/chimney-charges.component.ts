import { Component } from '@angular/core';

@Component({
  selector: 'app-chimney-charges',
  templateUrl: './chimney-charges.component.html',
  styleUrls: ['./chimney-charges.component.scss']
})
export class ChimneyChargesComponent {
  cleaningTypes = [
    {
      type: 'Chimney Basic Cleaning',
      price: 999,
      description: 'Basic chimney cleaning service, focusing on removing dust and light grease buildup. Ideal for regular maintenance.'
    },
    {
      type: 'Chimney Deep Cleaning',
      price: 1499,
      description: 'In-depth chimney cleaning to remove tough grease, grime, and soot buildup, ensuring optimal performance.'
    },
    {
      type: 'Chimney Installation',
      price: 1499,
      description: 'Professional installation of a new chimney, ensuring proper setup and functionality for your kitchen.'
    },
    {
      type: 'Chimney Uninstallation',
      price: 1999,
      description: 'Safe and efficient removal of your chimney, restoring your kitchen to its original condition.'
    }
  ];
  
  
  // Placeholder for interactive hover events, if needed
  onHover(cleaning: any) {
    console.log(`Hovered on ${cleaning.type}`);
  }
  
  onLeave() {
    console.log('Hover left');
  }
}
