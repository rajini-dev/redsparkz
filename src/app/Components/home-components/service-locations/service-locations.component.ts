import { Component } from '@angular/core';

@Component({
  selector: 'app-service-locations',
  templateUrl: './service-locations.component.html',
  styleUrls: ['./service-locations.component.scss']
})
export class ServiceLocationsComponent {
  locations = [
    { location: 'Redhills' },
    { location: 'Ambattur' },
    { location: 'Koyambedu' },
    { location: 'Anna nagar' },
    { location: 'Madhavaram' },
    { location: 'Perambur' },
    { location: 'Kilpauk' },
    { location: 'Maduravoyal' },
  ];
}
