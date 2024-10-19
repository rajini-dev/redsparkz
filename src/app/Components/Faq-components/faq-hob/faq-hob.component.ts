import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-hob',
  templateUrl: './faq-hob.component.html',
  styleUrls: ['./faq-hob.component.scss']
})
export class FaqHobComponent {
  questions = [
    { q: 'Where can I find reliable hob repair services?', a: 'Red Sparkz provides professional hob service and repair, ensuring your cooking appliances are safe and efficient.' },
    { q: 'How can I prevent my hob from needing frequent repairs?', a: 'Regular maintenance and prompt cleaning can help prevent issues. Schedule annual hob servicing with Red Sparkz for best results.' },
    { q: 'What should I do if my hob won\'t ignite?', a: 'If your hob fails to ignite, it could be due to a clogged burner or ignition problem. Contact Red Sparkz for fast and reliable hob repair services.' },
    { q: 'Are your hob repair technicians certified?', a: 'Yes, our technicians are certified and experienced in servicing all types of hobs, ensuring high-quality repairs.' },
    { q: 'Can I schedule a hob service appointment online?', a: 'Yes, you can easily book your hob service appointment through our website for your convenience.' },
    { q: 'What are the common issues that require hob repairs?', a: 'Common issues include ignition failure, uneven heating, and gas leaks. If you experience any of these, contact Red Sparkz for a professional inspection.' },
    { q: 'How long does a typical hob repair take?', a: 'The duration of hob repairs varies depending on the issue, but most repairs can be completed within a few hours.' },
    { q: 'Do you offer warranty on hob repair services?', a: 'Yes, Red Sparkz provides a warranty on our hob repair services to ensure your satisfaction and peace of mind.' }
  ];
  activeFAQ: number | null = null;

  toggleFAQ(index: number) {
    this.activeFAQ = this.activeFAQ === index ? null : index;
  }
}
