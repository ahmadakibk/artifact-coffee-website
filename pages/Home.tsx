import React from 'react';
import { NavLink } from 'react-router-dom';
import { Clock, Calendar, Utensils, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { EVENTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=1" 
            alt="Warm interior of Artifact Coffee with string lights" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-espresso/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 border border-cream/30 rounded-full text-cream/90 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            Est. Baltimore • Historic Union Mill
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-cream mb-6 leading-tight drop-shadow-lg">
            Food & drink to fuel <br/><span className="italic text-amber">body & soul.</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Seasonal, handcrafted, and locally-minded coffee & fare in a rustic, inviting space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://toasttab.com" target="_blank" rel="noreferrer">
              <Button variant="primary" className="h-14 px-8 text-base">Order Online</Button>
            </a>
            <NavLink to="/menu">
              <Button variant="outline" className="h-14 px-8 text-base border-cream text-cream hover:bg-cream hover:text-espresso">
                Browse Menu
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <div className="bg-espresso text-cream-dark py-3 px-4 text-center text-sm font-medium tracking-wide flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-2 md:space-y-0 relative z-20 shadow-lg">
        <span className="flex items-center"><Clock size={16} className="mr-2 text-amber"/> Weekdays 8–3</span>
        <span className="hidden md:inline text-stone/50">•</span>
        <span className="flex items-center"><Clock size={16} className="mr-2 text-amber"/> Weekends 8–4</span>
        <span className="hidden md:inline text-stone/50">•</span>
        <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-center hover:text-amber transition-colors underline decoration-stone/50 underline-offset-4">
          1500 Union Ave, Baltimore
        </a>
      </div>

      {/* Feature Cards */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
          
          {/* Card 1: Daily Menu */}
          <div className="bg-cream p-8 shadow-xl rounded-sm border-t-4 border-amber hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="bg-amber/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-espresso">
              <Utensils size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Daily Menu</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Our kitchen prepares fresh, seasonal dishes daily. From farm-egg sandwiches to heirloom grain bowls.
            </p>
            <NavLink to="/menu" className="inline-flex items-center text-warmbrown font-bold uppercase text-sm tracking-wider hover:text-espresso transition-colors">
              View Today's Menu <ArrowRight size={16} className="ml-2" />
            </NavLink>
          </div>

          {/* Card 2: Events */}
          <div className="bg-cream p-8 shadow-xl rounded-sm border-t-4 border-warmbrown hover:transform hover:-translate-y-2 transition-all duration-300">
             <div className="bg-warmbrown/20 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-espresso">
              <Calendar size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-espresso mb-3">Private Events</h3>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Host your intimate wedding, business dinner, or celebration in our unique, stone-walled space.
            </p>
            <NavLink to="/events" className="inline-flex items-center text-warmbrown font-bold uppercase text-sm tracking-wider hover:text-espresso transition-colors">
              Book an Event <ArrowRight size={16} className="ml-2" />
            </NavLink>
          </div>

          {/* Card 3: Visit */}
          <div className="bg-espresso text-cream p-8 shadow-xl rounded-sm border-t-4 border-stone hover:transform hover:-translate-y-2 transition-all duration-300">
             <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-cream">
              <Clock size={24} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-amber mb-3">Visit & Hours</h3>
            <p className="text-stone-300 mb-6 leading-relaxed">
              We are open every day. Stop by for a quick espresso or stay for a slow lunch in the courtyard.
            </p>
            <NavLink to="/contact" className="inline-flex items-center text-white font-bold uppercase text-sm tracking-wider hover:text-amber transition-colors">
              Get Directions <ArrowRight size={16} className="ml-2" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Philosophy / About Preview */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-espresso/20 z-0"></div>
            <img 
              src="https://picsum.photos/800/800?random=3" 
              alt="Barista pouring coffee" 
              className="relative z-10 w-full h-auto shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-espresso mb-6">Honest food, <br/>rooted in place.</h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              We believe that coffee and food should tell a story. That’s why we source our beans from growers we know and our ingredients from farms within driving distance. 
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Located in the historic Union Mill, our space is designed to be a sanctuary for the community—a place to pause, connect, and nourish yourself.
            </p>
            <NavLink to="/about">
              <Button variant="primary">Read Our Story</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber font-bold uppercase tracking-widest text-sm">Community</span>
              <h2 className="font-serif text-4xl font-bold text-espresso mt-2">Upcoming Happenings</h2>
            </div>
            <NavLink to="/events" className="hidden md:inline-flex items-center font-bold uppercase text-sm tracking-wider hover:text-warmbrown">
              View All Events <ArrowRight size={16} className="ml-2"/>
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.slice(0, 3).map(event => (
              <div key={event.id} className="group cursor-pointer">
                <div className="overflow-hidden mb-4 relative h-64">
                   <div className="absolute top-4 left-4 bg-cream text-espresso px-3 py-1 font-bold text-xs uppercase z-10 shadow-md">
                    {event.category}
                  </div>
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="text-sm font-bold text-stone-500 mb-1">{event.date} • {event.time}</div>
                <h3 className="font-serif text-xl font-bold text-espresso mb-2 group-hover:text-warmbrown transition-colors">{event.title}</h3>
                <p className="text-stone-600 line-clamp-2">{event.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <NavLink to="/events" className="inline-flex items-center font-bold uppercase text-sm tracking-wider hover:text-warmbrown">
              View All Events <ArrowRight size={16} className="ml-2"/>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Instagram/Social Proof */}
      <section className="py-20 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="font-serif text-3xl font-bold mb-8">Follow us <span className="text-amber">@artifactcoffee</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1, 2, 3, 4].map(i => (
               <a href="https://instagram.com" target="_blank" key={i} className="block overflow-hidden relative group aspect-square">
                 <img 
                   src={`https://picsum.photos/400/400?random=${20+i}`} 
                   alt="Instagram post" 
                   className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="font-bold uppercase tracking-wider text-sm">View on Insta</span>
                 </div>
               </a>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;