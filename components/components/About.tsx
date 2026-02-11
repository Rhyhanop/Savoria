
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
            <img 
              className="absolute inset-0 w-full h-full object-cover" 
              src="https://picsum.photos/800/600?random=7" 
              alt="Our restaurant's ambiance" 
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-4xl font-bold font-serif text-brand-dark sm:text-5xl">Our Story</h2>
            <p className="mt-6 text-lg text-gray-600">
              Founded in 2010, The Golden Spoon was born from a passion for authentic flavors and a vision to create an unforgettable dining experience. Our philosophy is simple: use the freshest, locally-sourced ingredients to craft dishes that are both classic and innovative.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              We believe that a great meal is more than just food; it's about the atmosphere, the service, and the memories created around the table. We invite you to join our family and taste the tradition and innovation that define us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
