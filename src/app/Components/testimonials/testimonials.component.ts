import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'John Doe',
      feedback: 'The service was exceptional! The team was professional, and I couldn’t be happier with the results.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5 , // Path to client image
    },
    {
      name: 'Jane Smith',
      feedback: 'I was amazed at how quickly and efficiently they completed the job. Highly recommend!',
      image: 'assets/Home-images/profile-image.png',
      rating: 5 ,// Path to client image
    },
    {
      name: 'Alice Johnson',
      feedback: 'Fantastic service! They went above and beyond to ensure I was satisfied.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5 ,
      // Path to client image
    },
    {
      name: 'Alice Johnson',
      feedback: 'Fantastic service! They went above and beyond to ensure I was satisfied.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5 , // Path to client image
    },
    {
      name: 'Alice Johnson',
      feedback: 'Fantastic service! They went above and beyond to ensure I was satisfied.',
      image: 'assets/Home-images/profile-image.png',
      rating: 5 , // Path to client image
    }
  ];

 
// In your component TypeScript file
slideConfig = {
  slidesToShow: 3,        // Number of slides visible at a time
  slidesToScroll: 1,      // Number of slides to scroll per interaction
  dots: false,            // Hide dots for navigation
  infinite: true,         // Loop through the slides infinitely
  autoplay: true,         // Enable autoplay
  autoplaySpeed: 3000,    // Time between auto-scrolls (in milliseconds)
  arrows: false,          // Hide navigation arrows
  speed: 1000,            // Transition speed between slides
  pauseOnHover: true,     // Pause on hover for readability
  responsive: [
    {
      breakpoint: 1024, // For tablet or smaller
      settings: {
        slidesToShow: 2, // Show 2 slides at a time
        slidesToScroll: 1, // Scroll one at a time
        autoplaySpeed: 2500, // Faster speed for smaller screens
      }
    },
    {
      breakpoint: 768, // For mobile or smaller
      settings: {
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1,
        autoplaySpeed: 2000,
      }
    }
  ]
};

}
