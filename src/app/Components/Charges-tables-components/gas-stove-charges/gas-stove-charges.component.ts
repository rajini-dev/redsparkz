import { Component } from '@angular/core';

@Component({
  selector: 'app-gas-stove-charges',
  templateUrl: './gas-stove-charges.component.html',
  styleUrls: ['./gas-stove-charges.component.scss']
})
export class GasStoveChargesComponent {


  hoveredService: any = null;

  // Gas stove services and repair data
  gasStoveServices = [
    {
      type: '2 Burner',
      price: 399,
      description: 'Basic servicing for a 2-burner gas stove, ensuring optimal performance.'
    },
    {
      type: '3 Burner',
      price: 499,
      description: 'Complete servicing for a 3-burner gas stove, including cleaning and maintenance.'
    },
    {
      type: '4 Burner',
      price: 599,
      description: 'Thorough cleaning and maintenance for a 4-burner gas stove, ensuring smooth functionality.'
    },
    {
      type: '5 Burner',
      price: 699,
      description: 'Detailed servicing for a 5-burner gas stove, addressing performance and cleanliness.'
    }
  ];

  gasStoveRepairs = [
    {
      issue: 'Gas Leakage',
      price: 150,
      description: 'Fixing any gas leakage issues to ensure safe and efficient operation.'
    },
    {
      issue: 'Low Flame',
      price: 150,
      description: 'Resolving problems with low flame output, ensuring proper heat levels.'
    },
    {
      issue: 'Physical Damage',
      price: 150,
      description: 'Repairing any physical damage to the gas stove for safe use.'
    },
    {
      issue: 'Knob Issue',
      price: 150,
      description: 'Fixing or replacing faulty knobs to regain full control over burner flames.'
    },
    {
      issue: 'No Flame',
      price: 150,
      description: 'Troubleshooting and fixing the issue of burners not igniting properly.'
    },
    {
      issue: 'Not Sure Issue',
      price: 150,
      description: 'General diagnostics and repair for unidentified gas stove problems.'
    }
  ];

  onHover(item: any) {
    console.log(`Hovered on ${item.type || item.issue}`);
    this.hoveredService = item;
  }

  onLeave() {
    console.log('Hover left');
    this.hoveredService = null;
  }
}
