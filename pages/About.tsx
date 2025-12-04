import React from 'react';
import { TEAM } from '../constants';
import { Leaf, Coffee, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-20">
        <h1 className="font-serif text-5xl font-bold text-espresso mb-8">Our Story</h1>
        <p className="text-xl text-stone-600 leading-relaxed font-light">
          Artifact Coffee began with a simple question: What if a coffee shop could be as connected to the land as a fine dining restaurant?
        </p>
      </div>

      {/* Two Col Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
           <img src="https://picsum.photos/800/1000?random=15" alt="Artifact coffee exterior historic building" className="rounded shadow-xl" />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-bold text-espresso mb-6">The Historic Union Mill</h2>
          <p className="text-stone-600 mb-6 leading-relaxed">
            Housed in a reclaimed boiler house within the historic Union Mill complex, our space wears its history on its sleeve. The exposed stone walls, soaring timber trusses, and industrial fixtures aren't just decor—they are artifacts of Baltimore's industrial past.
          </p>
          <p className="text-stone-600 leading-relaxed">
            We've softened the industrial edge with warm lighting, reclaimed wood tables, and the smell of fresh baking, creating a living room for the neighborhood.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-cream-dark py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="bg-espresso text-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Sourced with Care</h3>
              <p className="text-stone-600">We work directly with growers and local farmers. Every egg, every grain, and every bean has a name and a place behind it.</p>
            </div>
            <div>
              <div className="bg-espresso text-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Handcrafted Daily</h3>
              <p className="text-stone-600">No syrups from a pump. No frozen pastries. We cook and bake from scratch, every single morning.</p>
            </div>
             <div>
              <div className="bg-espresso text-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso mb-3">Community First</h3>
              <p className="text-stone-600">We are more than a coffee shop; we are a gathering place. We host readings, tastings, and conversations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-4xl font-bold text-espresso mb-12 text-center">Meet the Makers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map(member => (
            <div key={member.id} className="bg-white p-6 rounded shadow-sm text-center group hover:shadow-md transition-shadow">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-cream-dark">
                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-serif text-xl font-bold text-espresso">{member.name}</h3>
              <p className="text-amber text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-stone-600 text-sm italic">"{member.bio}"</p>
            </div>
          ))}
          {/* Join Us Card */}
           <div className="bg-espresso text-cream p-6 rounded shadow-sm text-center flex flex-col justify-center items-center">
              <h3 className="font-serif text-xl font-bold mb-2">Join Our Team</h3>
              <p className="text-stone-300 text-sm mb-6">We are always looking for passionate people.</p>
              <a href="mailto:askus@artifactcoffee.com" className="text-amber font-bold uppercase text-xs tracking-wider border-b border-amber pb-1 hover:text-white hover:border-white transition-colors">Email Resumé</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;