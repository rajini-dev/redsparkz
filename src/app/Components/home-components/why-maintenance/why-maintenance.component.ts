import { Component } from '@angular/core';

@Component({
  selector: 'app-why-maintenance',
  templateUrl: './why-maintenance.component.html',
  styleUrls: ['./why-maintenance.component.scss']
})
export class WhyMaintenanceComponent {
  maintenanceItems = [
    {
      image: 'assets/why-maintanence/Better Efficiency.webp',
      title: 'Better Efficiency',
      description: 'Regular maintenance prevents appliance breakdowns.'
    },
    {
      image: 'assets/why-maintanence/Cost Savings.webp',
      title: 'Cost Savings',
      description: 'Avoid costly repairs with timely check-ups.'
    },
    {
      image: 'assets/why-maintanence/Hygienic Cooking.webp',
      title: 'Hygienic Cooking',
      description: 'Eliminate grease, grime, and bacteria buildup.'
    },
    {
      image: 'assets/why-maintanence/Longer Appliance Life.webp',
      title: 'Longer Appliance Life',
      description: 'Keep your appliances running like new.'
    }
  ];
}
