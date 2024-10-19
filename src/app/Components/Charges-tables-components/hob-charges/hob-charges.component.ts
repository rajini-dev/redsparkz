import { Component } from '@angular/core';

@Component({
  selector: 'app-hob-charges',
  templateUrl: './hob-charges.component.html',
  styleUrls: ['./hob-charges.component.scss']
})
export class HobChargesComponent {
  hoveredCleaning: any = null;

  // Separate hob services and hob repair issues for better clarity
  servicesList = [
    {
      type: '2 Burner',
      price: 499,
      description: 'Basic servicing for a 2-burner hob, ensuring optimal performance and cleaning.'
    },
    {
      type: '3 Burner',
      price: 599,
      description: 'Complete servicing for a 3-burner hob, including cleaning and maintenance.'
    },
    {
      type: '4 Burner',
      price: 699,
      description: 'Thorough cleaning and maintenance for a 4-burner hob, ensuring smooth functionality.'
    },
    {
      type: '5 Burner',
      price: 699,
      description: 'Detailed servicing for a 5-burner hob, addressing performance and cleanliness.'
    }
  ];

  repairsList = [
    {
      type: 'Parking Pin Not Working',
      price: 150,
      description: 'Fixing issues related to the parking pin to ensure proper hob functionality.'
    },
    {
      type: 'Low Flame',
      price: 150,
      description: 'Resolving problems with low flame output, ensuring even and efficient heating.'
    },
    {
      type: 'Physical Damage',
      price: 150,
      description: 'Repairing any physical damage to the hob, restoring it to safe, working condition.'
    },
    {
     type:'Knob Issue',
      price: 150,
      description: 'Fixing or replacing malfunctioning knobs to restore full control over burners.'
    }
  ];

  onHover(item: any) {
    console.log(`Hovered on ${item.type || item.issue}`);
    this.hoveredCleaning = item;
  }

  onLeave() {
    console.log('Hover left');
    this.hoveredCleaning = null;
  }

  toggleTooltip(item: any) {
    if (this.hoveredCleaning === item) {
      this.hoveredCleaning = null;
    } else {
      this.hoveredCleaning = item;
    }
  }
}
