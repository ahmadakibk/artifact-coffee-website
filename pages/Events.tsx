import React, { useState } from 'react';
import Button from '../components/Button';
import { Calendar, Users, Clock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px]">
        <img 
          src="https://picsum.photos/1920/1080?random=5" 
          alt="Long table dinner event at Artifact" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/50 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <span className="text-amber font-bold uppercase tracking-widest text-sm mb-4 block">Gather with us</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6">Private Events & Catering</h1>
            <p className="text-xl text-cream/90 font-light">
              From intimate weddings to office lunches, let us fuel your gathering.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Catering Info & Content */}
        <div className="space-y-16">
          
          {/* Catering Section */}
          <section>
            <h2 className="font-serif text-3xl font-bold text-espresso mb-6">Catering for your team</h2>
            <div className="bg-white p-8 rounded shadow-sm border-l-4 border-amber">
              <p className="text-stone-600 mb-6 leading-relaxed">
                Fresh pastries, coffee travelers, and boxed lunches available for pick-up. Perfect for office meetings or morning treats.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-stone-600">
                <li className="flex items-center"><Clock size={16} className="mr-3 text-warmbrown"/> Available pick-up: Daily 8:00am — 3:00pm</li>
                <li className="flex items-center"><CheckCircle size={16} className="mr-3 text-warmbrown"/> Compostable packaging included</li>
                <li className="flex items-center"><Calendar size={16} className="mr-3 text-warmbrown"/> Please order at least 48 hours ahead</li>
              </ul>
              <a href="https://toasttab.com" target="_blank" rel="noreferrer">
                <Button variant="primary">Place Catering Order</Button>
              </a>
            </div>
          </section>

          {/* Private Events Section */}
          <section>
             <h2 className="font-serif text-3xl font-bold text-espresso mb-6">Private Events</h2>
             <p className="text-stone-600 mb-6 leading-relaxed">
               We host small weddings, business dinners, and other intimate events in the evenings. Our historic boiler house provides a unique, warm backdrop that needs very little decoration.
             </p>
             <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-cream-dark p-4 text-center rounded">
                 <Users className="mx-auto mb-2 text-warmbrown" />
                 <span className="block font-bold text-espresso">Capacity</span>
                 <span className="text-sm text-stone-600">Up to 80 guests</span>
               </div>
                <div className="bg-cream-dark p-4 text-center rounded">
                 <UtensilsIcon className="mx-auto mb-2 text-warmbrown" />
                 <span className="block font-bold text-espresso">Style</span>
                 <span className="text-sm text-stone-600">Family-style Dinner</span>
               </div>
             </div>
             
             {/* FAQs Accordion */}
             <div className="space-y-4">
               <AccordionItem title="What is the price range?">
                 Pricing varies by season and guest count. Generally, full buyouts start around $3,000 minimum spend for weeknights. Contact us for a custom quote.
               </AccordionItem>
               <AccordionItem title="Can I bring my own decor?">
                 Yes! Though many guests find the warm stone and string lights are enough. We allow tabletop decor and freestanding floral arrangements.
               </AccordionItem>
               <AccordionItem title="Is A/V equipment available?">
                 We have a basic sound system for background music and a microphone for speeches. Projectors can be rented for an additional fee.
               </AccordionItem>
             </div>
          </section>

          {/* Public Events Calendar */}
          <section>
            <h2 className="font-serif text-3xl font-bold text-espresso mb-6">Upcoming Public Events</h2>
            <div className="space-y-6">
              {EVENTS.map(event => (
                <div key={event.id} className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
                  <img src={event.imageUrl} alt={event.title} className="w-full sm:w-32 h-32 object-cover rounded-sm" />
                  <div className="flex-1">
                    <div className="text-xs font-bold text-amber uppercase tracking-wider mb-1">{event.category}</div>
                    <h3 className="font-serif text-xl font-bold text-espresso mb-1">{event.title}</h3>
                    <div className="text-sm text-stone-500 mb-2">{new Date(event.date).toLocaleDateString()} • {event.time}</div>
                    <p className="text-sm text-stone-600 line-clamp-2">{event.description}</p>
                    {event.ticketLink && (
                       <a href={event.ticketLink} className="inline-block mt-2 text-warmbrown text-xs font-bold uppercase underline">Get Tickets</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:sticky lg:top-24 h-fit">
          <div className="bg-espresso text-cream p-8 md:p-10 rounded shadow-2xl">
            <h3 className="font-serif text-2xl font-bold mb-2">Inquire for Private Events</h3>
            <p className="text-stone-400 mb-8 text-sm">Fill out the form below and our events manager will get back to you within 48 hours.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent! We will contact you shortly.'); }}>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Name</label>
                <input type="text" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber" required />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Phone</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Date</label>
                  <input type="date" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber" />
                </div>
                <div>
                   <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Est. Guests</label>
                   <input type="number" className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Event Type</label>
                <select className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber [&>option]:text-espresso">
                  <option>Wedding Reception</option>
                  <option>Rehearsal Dinner</option>
                  <option>Corporate Dinner</option>
                  <option>Birthday / Celebration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider mb-1 text-amber">Message</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 text-cream focus:outline-none focus:border-amber"></textarea>
              </div>
              
              <Button type="submit" fullWidth variant="secondary" className="mt-4">Send Inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper for Icon
const UtensilsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
);

const AccordionItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-300">
      <button 
        className="w-full py-4 flex justify-between items-center text-left font-bold text-espresso focus:outline-none hover:text-warmbrown"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="pb-4 text-stone-600 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default Events;