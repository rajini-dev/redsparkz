import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen-table',
  templateUrl: './kitchen-charges.component.html',
  styleUrls: ['./kitchen-charges.component.scss']
})
export class KitchenComponent {
 // Array of services and their descriptions
 cleaningTypes = [
  {
    type: 'Empty Kitchen',
    price: 999,
    description: 'Includes deep cleaning of kitchen surfaces, walls, and floors without appliances or chimney.'
  },
  {
    type: 'With Chimney',
    price: 1499,
    description: 'Kitchen cleaning with thorough chimney cleaning to remove grease and grime.'
  },
  {
    type: 'With Appliance',
    price: 1499,
    description: 'Includes appliance cleaning like fridge, microwave, and oven along with kitchen cleaning.'
  },
  {
    type: 'With Appliance & Chimney',
    price: 1999,
    description: 'Complete kitchen cleaning with all appliances and chimney cleaning included.'
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
