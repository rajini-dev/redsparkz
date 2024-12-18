import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-kitchen',
  templateUrl: './faq-kitchen.component.html',
  styleUrls: ['./faq-kitchen.component.scss']
})
export class FaqKitchenComponent {
  questions = [
    { q: 'What kitchen cleaning services does Red Sparkz offer?', a: 'We offer comprehensive kitchen cleaning services, including deep cleaning of appliances, countertops, sinks, and floors.' },
    { q: 'How often should I get my kitchen professionally cleaned?', a: 'It’s recommended to deep clean your kitchen every 3-6 months for hygiene and maintenance.' },
    { q: 'Are the cleaning products used safe for my kitchen?', a: 'Yes, we use eco-friendly and non-toxic cleaning products that are safe for food-prep areas.' },
    { q: 'How long does a kitchen deep cleaning take?', a: 'The time varies depending on the kitchen size, but it typically takes 3-4 hours for a complete deep clean.' },
    { q: 'Do you clean appliances like chimneys and gas stoves?', a: 'Yes, we clean all appliances, including chimneys, hobs, gas stoves, ovens, and refrigerators.' },
    { q: 'What is the cost of kitchen cleaning services in Chennai?', a: 'Our kitchen cleaning services start at ₹999, with customized packages based on your requirements.' },
    { q: 'Can I schedule kitchen cleaning services for weekends?', a: 'Yes, we offer flexible booking options, including weekends and holidays.' },
    { q: 'Do you provide a satisfaction guarantee?', a: 'Absolutely! We ensure 100% customer satisfaction with all our cleaning services.' },
    { q: 'How do I book a kitchen cleaning service?', a: 'You can book by calling us at +91 98765 43210 or through our website.' },
    { q: 'Do you offer discounts for regular kitchen cleaning services?', a: 'Yes, we have attractive offers for regular and recurring cleaning appointments.' }
  ];

  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
}
