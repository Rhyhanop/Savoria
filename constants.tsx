import React from 'react';
import type { MenuItemType, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const MENU_ITEMS: MenuItemType[] = [
  {
    image: 'https://picsum.photos/400/300?random=1',
    name: 'Saffron Risotto',
    description: 'Creamy risotto infused with saffron, topped with parmesan cheese and fresh parsley.',
    price: '$22.50',
  },
  {
    image: 'https://picsum.photos/400/300?random=2',
    name: 'Grilled Salmon',
    description: 'Atlantic salmon grilled to perfection, served with asparagus and lemon-butter sauce.',
    price: '$28.00',
  },
  {
    image: 'https://picsum.photos/400/300?random=3',
    name: 'Filet Mignon',
    description: '8oz center-cut filet, cooked to your liking, with a side of garlic mashed potatoes.',
    price: '$45.00',
  },
  {
    image: 'https://picsum.photos/400/300?random=4',
    name: 'Lobster Pasta',
    description: 'Fresh lobster meat tossed in a creamy tomato sauce with homemade linguine.',
    price: '$35.00',
  },
  {
    image: 'https://picsum.photos/400/300?random=5',
    name: 'Truffle Pizza',
    description: 'Artisanal pizza with black truffle, mozzarella, and a delicate white sauce.',
    price: '$25.00',
  },
  {
    image: 'https://picsum.photos/400/300?random=6',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
    price: '$12.00',
  },
];

export const CONTACT_INFO = {
  phone: '+1 (234) 567-890',
  email: 'contact@thegoldenspoon.com',
  location: '123 Luxury Lane, Gourmet City, 54321',
};

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
export const PhoneIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
export const MailIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// FIX: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
export const LocationMarkerIcon = (props: React.SVGProps<SVGSVGElement>): React.ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);