import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Suresh Kumar',
      feedback:
        'Red Sparkz provided exceptional chimney cleaning services. My kitchen chimney now works like new, and the technicians were very professional.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
    {
      name: 'Priya Ramesh',
      feedback:
        'I called Red Sparkz for gas stove repair. They arrived on time and fixed the issue quickly. The team was polite, and the cost was affordable.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
    {
      name: 'Anil Verma',
      feedback:
        'I’m impressed with the hob repair service provided by Red Sparkz. They were knowledgeable and ensured everything was working perfectly before leaving.',
      image: 'assets/Home-images/profile-image.png',
      rating: 4.5,
    },
    {
      name: 'Meena Srinivasan',
      feedback:
        'Fantastic service! My kitchen cleaning was handled professionally, and now the space is spotless. I’ll definitely book again.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
    {
      name: 'Ravi Krishnan',
      feedback:
        'I had issues with my chimney’s airflow. The Red Sparkz team not only repaired it but also cleaned it thoroughly. Highly recommended!',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
    {
      name: 'Deepa Nair',
      feedback:
        'The technicians were punctual and efficient in repairing my gas stove. I also loved their 30-day service warranty. Great value for money!',
      image: 'assets/Home-images/profile-image.png',
      rating: 4.8,
    },
    {
      name: 'Karthik Rajan',
      feedback:
        'Red Sparkz is my go-to service for kitchen cleaning and appliance repairs. Their team is professional, reliable, and budget-friendly.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
    {
      name: 'Sandhya Iyer',
      feedback:
        'I booked Red Sparkz for hob cleaning, and they exceeded my expectations. They were thorough, professional, and friendly.',
      image: 'assets/Home-images/profile-image.png',
      rating: 4.9,
    },
    {
      name: 'Naveen Arul',
      feedback:
        'Affordable and efficient service! They repaired my gas stove on the same day I called. I’m extremely satisfied with their work.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
    {
      name: 'Lakshmi Reddy',
      feedback:
        'I had a wonderful experience with Red Sparkz. Their team cleaned my chimney and gas stove perfectly. My kitchen feels brand new!',
      image: 'assets/Home-images/profile-image.png',
      rating: 5,
    },
  ];

  // In your component TypeScript file
  slideConfig = {
    slidesToShow: 3, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll per interaction
    dots: false, // Hide dots for navigation
    infinite: true, // Loop through the slides infinitely
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between auto-scrolls (in milliseconds)
    arrows: false, // Hide navigation arrows
    speed: 1000, // Transition speed between slides
    pauseOnHover: true, // Pause on hover for readability
    responsive: [
      {
        breakpoint: 1024, // For tablet or smaller
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1, // Scroll one at a time
          autoplaySpeed: 2500, // Faster speed for smaller screens
        },
      },
      {
        breakpoint: 768, // For mobile or smaller
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
}
