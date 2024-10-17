import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss']
})
export class LandingScreenComponent {
  points = [
    {text: 'No Huge Upfront Fees'},
    {text: 'Guaranteed On-Time Service'},
    {text: 'Dedicated Customer Support'},
    {text: '100% Satisfaction Guarantee'},
  ];
}
