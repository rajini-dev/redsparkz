import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-gas-stove',
  templateUrl: './faq-gas-stove.component.html',
  styleUrls: ['./faq-gas-stove.component.scss'],
})
export class FaqGasStoveComponent {
  questions = [
    {
      q: 'What types of gas stove issues do you fix?',
      a: 'We fix gas leaks, ignition failures, clogged burners, uneven flames, and faulty knobs.',
    },
    {
      q: 'How often should I clean my gas stove?',
      a: 'It’s ideal to deep clean your gas stove every 3-6 months to ensure safety and efficiency.',
    },
    {
      q: 'Do you offer services for all gas stove brands?',
      a: 'Yes, we service all major brands like Prestige, Glen, Sunflame, Hindware, Elica, and more.',
    },
    {
      q: 'How much does gas stove cleaning cost?',
      a: 'Our services are affordable, starting at just ₹150. The final cost depends on the type of service.'
    },
    {
      q: 'Do you offer gas stove maintenance plans?',
      a: 'Yes, Red Sparkz offers maintenance plans to keep your gas stove in top condition and prevent unexpected repairs.',
    },
    {
      q: 'Is there a same-day gas stove repair service available?',
      a: 'Yes, we provide same-day services for urgent repair needs.',
    },
    {
      q: 'Can I schedule gas stove repair services on weekends?',
      a: 'Yes, Red Sparkz offers flexible scheduling, including weekend appointments for gas stove repairs.',
    },
    {
      q: 'How long does a gas stove repair typically take?',
      a: 'Most gas stove repairs can be completed within a few hours, depending on the issue at hand.',
    },
  ];
  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
}
