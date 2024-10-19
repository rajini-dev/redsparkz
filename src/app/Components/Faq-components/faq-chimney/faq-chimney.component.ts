import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-chimney',
  templateUrl: './faq-chimney.component.html',
  styleUrls: ['./faq-chimney.component.scss']
})
export class FaqChimneyComponent {
  questions = [
    { q: 'What is the best chimney cleaning service near me?', a: 'Red Sparkz offers expert chimney cleaning services in your area, ensuring your kitchen chimney functions efficiently and safely.' },
    { q: 'How often should I schedule chimney cleaning services?', a: 'For optimal performance, it\'s recommended to clean your chimney every 3 to 4 months, especially in high-usage kitchens.' },
    { q: 'What are the benefits of professional chimney cleaning?', a: 'Professional chimney cleaning removes grease buildup, enhances airflow, reduces fire risks, and prolongs the lifespan of your chimney.' },
    { q: 'How do I know if my chimney needs repairs?', a: 'Look for signs like smoke backflow, unusual noises, or reduced suction power. If you notice any of these, it\'s time to contact Red Sparkz for chimney repair services.' },
    { q: 'Do you provide emergency chimney repair services?', a: 'Yes, Red Sparkz offers emergency chimney repair services to address urgent issues quickly and effectively.' },
    { q: 'What is the average cost of chimney cleaning services?', a: 'The cost of chimney cleaning varies based on factors like size and condition, but Red Sparkz offers competitive pricing and free estimates.' },
    { q: 'Can chimney cleaning improve indoor air quality?', a: 'Yes, regular chimney cleaning can significantly improve indoor air quality by removing soot and harmful pollutants from your kitchen.' },
    { q: 'How can I maintain my chimney between cleanings?', a: 'Regularly inspect for grease buildup, ensure proper ventilation, and schedule professional cleanings as recommended by Red Sparkz.' }
  ];
  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }

}
