import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import Button from '../components/Button';
import { AlertCircle } from 'lucide-react';

const Menu: React.FC = () => {
  const categories = Array.from(new Set(MENU_ITEMS.map(item => item.category)));
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-cream">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-espresso mb-6">Our Menu</h1>
        <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
          Our menu changes often based on what our farmers are harvesting. <br/>Here's what we're making today.
        </p>
        <div className="flex justify-center">
            <a href="https://toasttab.com" target="_blank" rel="noreferrer">
              <Button variant="primary">Order Online via Toast</Button>
            </a>
        </div>
        <p className="text-xs text-stone-500 mt-4 flex items-center justify-center">
          <AlertCircle size={14} className="mr-1"/> Menu subject to change. See Toast for real-time availability.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-12 overflow-x-auto">
        <div className="flex md:justify-center space-x-4 min-w-max pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider transition-all ${
                activeCategory === cat 
                  ? 'bg-espresso text-cream shadow-md' 
                  : 'bg-white text-stone-500 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-stone-500">
            No items currently available in this category.
          </div>
        )}
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-40">
        <a href="https://toasttab.com" target="_blank" rel="noreferrer">
          <Button fullWidth className="shadow-2xl border-2 border-white">Order Online</Button>
        </a>
      </div>
    </div>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className={`flex flex-col border-b border-stone-300 pb-8 ${!item.available ? 'opacity-50 grayscale' : ''}`}>
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-serif text-xl font-bold text-espresso">{item.name}</h3>
      <span className="font-sans font-medium text-warmbrown ml-4">{item.price}</span>
    </div>
    <p className="text-stone-600 mb-3 flex-grow">{item.description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {item.tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-stone-200 text-stone-600 rounded-sm">
          {tag}
        </span>
      ))}
      {!item.available && (
         <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-red-100 text-red-600 rounded-sm">
          Sold Out
        </span>
      )}
    </div>
  </div>
);

export default Menu;