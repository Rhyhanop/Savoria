
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-serif text-2xl font-bold">The Golden Spoon</p>
          <p className="mt-4 text-base text-gray-400">
            &copy; {new Date().getFullYear()} The Golden Spoon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
