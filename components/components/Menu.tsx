
import React from 'react';
import { MENU_ITEMS } from '../constants';
import MenuItem from './MenuItem';
import type { MenuItemType } from '../types';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-serif text-brand-dark sm:text-5xl">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600">
            A selection of our finest dishes, prepared with love and care.
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {MENU_ITEMS.map((item: MenuItemType) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
