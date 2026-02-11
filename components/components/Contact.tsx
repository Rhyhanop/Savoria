
import React from 'react';
import { CONTACT_INFO, PhoneIcon, MailIcon, LocationMarkerIcon } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-dark sm:text-5xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you. For reservations, please call us.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white">
              <PhoneIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-brand-dark">Phone</h3>
            <p className="mt-2 text-gray-600">{CONTACT_INFO.phone}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white">
              <MailIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-brand-dark">Email</h3>
            <p className="mt-2 text-gray-600">{CONTACT_INFO.email}</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-primary text-white">
              <LocationMarkerIcon className="h-8 w-8" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-brand-dark">Location</h3>
            <p className="mt-2 text-gray-600">{CONTACT_INFO.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
