import { Component } from '@angular/core';

@Component({
  selector: 'app-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent {

    questions = [
      {
        q: 'What home appliance repair services do you offer in Chennai?',
        a: 'We provide expert repair and cleaning services for chimneys, gas stoves, hobs, and kitchen appliances in Chennai. We specialize in professional, timely, and affordable solutions.'
      },
      {
        q: 'Why choose Red Sparkz for chimney cleaning services in Chennai?',
        a: 'Red Sparkz offers professional chimney cleaning and repair services with skilled technicians, affordable pricing, and a 30-day service warranty to ensure long-lasting performance.'
      },
      {
        q: 'How much does gas stove repair cost in Chennai?',
        a: 'Our gas stove repair services are affordable and transparent, starting at low prices to suit every household’s budget. Contact us for a free estimate.'
      },
      {
        q: 'Do you provide same-day chimney and hob repair services in Chennai?',
        a: 'Yes, we provide same-day services for chimney repair, hob cleaning, and gas stove issues in Chennai, ensuring your kitchen appliances work perfectly without delays.'
      },
      {
        q: 'Is there a warranty for appliance repair services?',
        a: 'We provide a 30-day warranty on all repairs, including chimneys, gas stoves, and hobs, giving you peace of mind about service quality.'
      },
      {
        q: 'What areas in Chennai do you serve for kitchen appliance repairs?',
        a: 'We serve all major areas in Chennai, including Anna Nagar, T Nagar, Velachery, Adyar, Tambaram, and surrounding localities.'
      },
      {
        q: 'Are your chimney cleaning services affordable?',
        a: 'Yes, our chimney cleaning services are affordable, starting at competitive rates, ensuring value for money without compromising quality.'
      },
      {
        q: 'How often should I clean my kitchen chimney?',
        a: 'It’s recommended to clean your kitchen chimney every 3-6 months, depending on usage, to maintain performance and prevent blockages.'
      },
      {
        q: 'Do you provide gas stove cleaning services for commercial kitchens?',
        a: 'Yes, we provide gas stove cleaning and repair services for both residential and commercial kitchens in Chennai.'
      },
      {
        q: 'How can I book your kitchen appliance repair services in Chennai?',
        a: 'You can easily book our services by calling us, visiting our website, or filling out our online service request form.'
      },
      {
        q: 'What makes Red Sparkz the best kitchen cleaning service provider in Chennai?',
        a: 'Our experienced team, affordable pricing, same-day service, and 30-day warranty make us the top choice for kitchen cleaning and repair services in Chennai.'
      },
      {
        q: 'How do I know if my gas stove needs servicing?',
        a: 'If your gas stove has low flames, gas leaks, or ignition issues, it’s time for professional servicing. Contact us for a quick diagnosis and repair.'
      },
      {
        q: 'Do you use eco-friendly cleaning products for kitchen cleaning?',
        a: 'Yes, we use safe and eco-friendly cleaning products to ensure a clean and hygienic kitchen without harmful chemicals.'
      },
      {
        q: 'How long does chimney cleaning take?',
        a: 'Chimney cleaning typically takes 1-2 hours, depending on the condition of the chimney and the level of cleaning required.'
      },
      {
        q: 'Can I schedule your services on weekends or holidays?',
        a: 'Yes, we offer flexible booking options, including weekends and holidays, to suit your convenience.'
      },
      {
        q: 'What is the cost of kitchen appliance cleaning in Chennai?',
        a: 'Our kitchen appliance cleaning services are cost-effective, with prices depending on the service required. Contact us for a free estimate.'
      },
      {
        q: 'What happens if my appliance breaks down again after servicing?',
        a: 'We offer a 30-day warranty on our services. If your appliance has any issues within this period, we will fix it at no extra cost.'
      },
      {
        q: 'Do you offer discounts for bulk or multiple appliance repairs?',
        a: 'Yes, we provide special discounts for multiple appliance repairs. Contact us to learn more about our offers.'
      },
      {
        q: 'How can I maintain my kitchen chimney after cleaning?',
        a: 'To maintain your chimney, clean the filters regularly, avoid oil buildup, and schedule professional cleaning every 3-6 months.'
      },
      {
        q: 'Why is regular kitchen cleaning important?',
        a: 'Regular kitchen cleaning prevents grease buildup, improves appliance performance, and ensures a clean and healthy environment for cooking.'
      }
    ];
  
    activeFAQ: number | null = null; // Tracks active accordion item
    visibleCount: number = 5; // Tracks number of visible questions
  
    toggleFAQ(index: number) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    }
  
    loadMoreFAQs() {
      if (this.visibleCount < this.questions.length) {
        this.visibleCount += 5; // Show 5 more questions
      }
    }
  
    showLessFAQs() {
      this.visibleCount = 5; // Reset visible count to 5
      this.activeFAQ = null; // Close all open FAQs
    }
}
