import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-gas-stove',
  templateUrl: './faq-gas-stove.component.html',
  styleUrls: ['./faq-gas-stove.component.scss']
})
export class FaqGasStoveComponent {
  questions = [
    { q: 'Where can I find gas stove repair services near me?', a: 'Red Sparkz provides local gas stove service and repair to ensure your cooking appliance operates safely and efficiently.' },
    { q: 'How do I know if my gas stove needs servicing?', a: 'Signs that your gas stove needs servicing include irregular flames, gas odor, or burners not heating properly. Contact us for an inspection.' },
    { q: 'What should I do if I smell gas near my stove?', a: 'If you smell gas, turn off the gas supply immediately and contact Red Sparkz for urgent repair services.' },
    { q: 'Is it safe to repair a gas stove myself?', a: 'We recommend against DIY repairs on gas stoves due to safety risks. Always seek professional assistance from Red Sparkz.' },
    { q: 'Do you offer gas stove maintenance plans?', a: 'Yes, Red Sparkz offers maintenance plans to keep your gas stove in top condition and prevent unexpected repairs.' },
    { q: 'What are the most common gas stove problems?', a: 'Common problems include faulty ignitions, gas leaks, and uneven cooking. Our team can diagnose and repair these issues effectively.' },
    { q: 'Can I schedule gas stove repair services on weekends?', a: 'Yes, Red Sparkz offers flexible scheduling, including weekend appointments for gas stove repairs.' },
    { q: 'How long does a gas stove repair typically take?', a: 'Most gas stove repairs can be completed within a few hours, depending on the issue at hand.' }
  ]
  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
}
