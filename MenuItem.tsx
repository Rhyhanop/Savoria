
import React from 'react';
import type { MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-brand-light rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img className="w-full h-56 object-cover" src={item.image} alt={item.name} />
      <div className="p-6">
        <h3 className="text-2xl font-bold font-serif text-brand-dark">{item.name}</h3>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <p className="mt-4 text-xl font-semibold text-brand-primary">{item.price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
