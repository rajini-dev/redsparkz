import { Component } from '@angular/core';

@Component({
  selector: 'app-service-locations',
  templateUrl: './service-locations.component.html',
  styleUrls: ['./service-locations.component.scss']
})
export class ServiceLocationsComponent {
  locations = [
    { location: 'Redhills' },
    { location: 'Adyar' },
    { location: 'T. Nagar' },
    { location: 'Velachery' },
    { location: 'Anna Nagar' }
  ];
}
