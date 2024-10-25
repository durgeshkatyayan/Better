import React, { useState } from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Arian",
      type: "Better Mortgage customer",
      text: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Amanda",
      type: "Better Mortgage customer",
      text: "Working with Better made the home buying process so much easier. Their online platform and responsive team helped us close faster than expected.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Paul",
      type: "Better Mortgage customer",
      text: "I was impressed by how transparent Better was throughout the entire process. No hidden fees and great communication every step of the way.",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <div className="bg-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Testimonial */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${
                  activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full rounded-2xl mb-8 aspect-video object-cover"
                />
                <blockquote>
                  <div className="relative">
                    <div className="text-2xl font-medium mb-6">
                      "{testimonial.text}"
                    </div>
                    <footer>
                      <div className="font-medium">{testimonial.name} — {testimonial.type}</div>
                    </footer>
                  </div>
                </blockquote>
              </div>
            ))}
            
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTestimonial === index
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {testimonials[index].name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-8">
              Find out why<br />we're better.
            </h2>
            
            <button className="bg-emerald-800 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-900 transition-colors mb-8">
              See all our stories
            </button>

           
            <div className="flex items-center space-x-2">
   
              <img 
                src="/api/placeholder/24/24"
                alt="Trustpilot"
                className="h-6"
              />
              <span className="font-medium">Excellent</span>
              

              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4 ? 'text-emerald-500 fill-emerald-500' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <span className="text-gray-600">
                4.4 out of 5
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;