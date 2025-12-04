import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { POPULAR_TIMES_DATA } from '../constants';
import { MapPin, Mail, Clock } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div>
          <h1 className="font-serif text-5xl font-bold text-espresso mb-8">Visit Us</h1>
          <p className="text-xl text-stone-600 mb-12 font-light">
            We are located in the historic Union Mill building in the Hampden-Woodberry neighborhood.
          </p>

          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <div className="bg-amber/20 p-3 rounded-full mr-4 text-espresso">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-espresso mb-1">Address</h3>
                <p className="text-stone-600">1500 Union Ave,<br/>Baltimore, MD 21211</p>
                <p className="text-sm text-stone-500 mt-2 italic">Parking available in the lot across the street.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-amber/20 p-3 rounded-full mr-4 text-espresso">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-espresso mb-1">Hours</h3>
                <p className="text-stone-600">Weekdays: 8:00am – 3:00pm</p>
                <p className="text-stone-600">Weekends: 8:00am – 4:00pm</p>
              </div>
            </div>

             <div className="flex items-start">
              <div className="bg-amber/20 p-3 rounded-full mr-4 text-espresso">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-espresso mb-1">Contact</h3>
                <p className="text-stone-600 mb-1">General: <a href="mailto:askus@artifactcoffee.com" className="text-warmbrown hover:underline">askus@artifactcoffee.com</a></p>
                <p className="text-stone-600">Events: <a href="mailto:events@artifactcoffee.com" className="text-warmbrown hover:underline">events@artifactcoffee.com</a></p>
                <p className="text-xs text-stone-400 mt-2 max-w-xs">Note: We don't continuously monitor inbox for urgent order changes.</p>
              </div>
            </div>
          </div>

          {/* Popular Times Chart */}
          <div className="bg-white p-6 rounded shadow-sm border border-stone-200">
             <h3 className="font-serif text-xl font-bold text-espresso mb-6">Popular Times</h3>
             <div className="h-48 w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={POPULAR_TIMES_DATA}>
                   <XAxis dataKey="name" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                   <Tooltip 
                     cursor={{fill: 'transparent'}}
                     contentStyle={{ backgroundColor: '#2B1E17', color: '#F7F3EE', borderRadius: '4px', border: 'none' }}
                   />
                   <Bar dataKey="visitors" radius={[4, 4, 0, 0]}>
                     {POPULAR_TIMES_DATA.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.visitors > 70 ? '#6E4A32' : '#F2C57C'} />
                     ))}
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs text-center text-stone-400 mt-2">Based on typical visitor traffic</p>
          </div>
        </div>

        {/* Map & Form Column */}
        <div className="space-y-12">
          {/* Map Embed */}
          <div className="w-full h-64 bg-stone-300 rounded overflow-hidden shadow-inner relative group">
             {/* Simulating Map */}
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="map"
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=1500+Union+Ave,+Baltimore,+MD+21211&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="filter grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-cream-dark p-8 rounded shadow-sm">
             <h3 className="font-serif text-2xl font-bold text-espresso mb-4">Send us a Note</h3>
             <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="Name" className="bg-white border-0 rounded px-4 py-3 placeholder-stone-400 focus:ring-2 focus:ring-amber outline-none" required />
                 <input type="email" placeholder="Email" className="bg-white border-0 rounded px-4 py-3 placeholder-stone-400 focus:ring-2 focus:ring-amber outline-none" required />
               </div>
               <textarea placeholder="Message" rows={4} className="w-full bg-white border-0 rounded px-4 py-3 placeholder-stone-400 focus:ring-2 focus:ring-amber outline-none" required></textarea>
               <div className="flex justify-end">
                 <Button type="submit">Send Message</Button>
               </div>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;