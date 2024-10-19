import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-kitchen',
  templateUrl: './faq-kitchen.component.html',
  styleUrls: ['./faq-kitchen.component.scss']
})
export class FaqKitchenComponent {
  questions = [
    { q: 'What kitchen cleaning services does Red Sparkz offer?', a: 'We offer comprehensive kitchen cleaning services, including deep cleaning of appliances, countertops, sinks, and floors.' },
    { q: 'How often should I deep clean my kitchen?', a: 'We recommend deep cleaning your kitchen every 3 to 6 months, depending on usage and cooking habits.' },
    { q: 'Are your kitchen cleaning products safe for my family?', a: 'Yes, Red Sparkz uses eco-friendly and non-toxic cleaning products that are safe for your family and pets.' },
    { q: 'What is the process for scheduling kitchen cleaning services?', a: 'You can schedule kitchen cleaning services by calling us or booking directly through our website for flexible timing.' },
    { q: 'How long does a kitchen cleaning session take?', a: 'A typical kitchen cleaning session takes about 2 to 4 hours, depending on the kitchen size and level of cleaning required.' },
    { q: 'Can you customize kitchen cleaning services to meet my needs?', a: 'Yes, we offer customizable kitchen cleaning packages tailored to your specific needs and preferences.' },
    { q: 'What should I do to prepare for a kitchen cleaning service?', a: 'To prepare, please clear countertops and remove any personal items to allow our team to clean effectively.' },
    { q: 'Do you offer recurring kitchen cleaning services?', a: 'Yes, Red Sparkz provides recurring kitchen cleaning services on a weekly, bi-weekly, or monthly basis for your convenience.' }
  ];
  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
}
