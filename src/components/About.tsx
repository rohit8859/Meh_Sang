import { motion } from 'motion/react';
import { ABOUT_TEXT } from '../data/mehndiData';
import { Award, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';

export default function About() {
  const iconsMap = [Award, ShieldCheck, HeartHandshake, Smile];

  return (
    <section id="about" className="py-24 bg-ivory text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block - Artist Image with gold ornamental frame */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-gold" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-gold" />
            
            <div className="overflow-hidden rounded-[32px] shadow-2xl bg-beige">
              <img
                src="https://images.unsplash.com/photo-1614914110303-34e85747ea01?w=800&auto=format&fit=crop&q=80"
                alt="Artist applying Mehndi meticulously"
                className="w-full h-[500px] object-cover object-center hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Overlay brand badge */}
            <div className="absolute -bottom-8 left-8 bg-deep-brown text-gold px-6 py-4 shadow-xl border-l-4 border-gold rounded-full md:rounded-2xl">
              <p className="font-serif text-2xl font-bold">8+ Years</p>
              <p className="text-[10px] font-mono tracking-widest uppercase text-ivory">Bridal Heritage</p>
            </div>
          </div>

          {/* Right Block - About MehSang Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
                MEET THE ARTIST
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
                {ABOUT_TEXT.title}
              </h2>
              <div className="h-[2px] w-24 bg-gold mt-2" />
            </div>

            <p className="text-sm sm:text-base text-deep-brown/80 font-light leading-relaxed">
              {ABOUT_TEXT.description}
            </p>

            {/* Core Features Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {ABOUT_TEXT.features.map((feature, i) => {
                const IconComponent = iconsMap[i] || Award;
                return (
                  <div
                     key={feature.title}
                     className="p-6 rounded-[24px] bg-white border border-beige hover:border-gold/40 hover:bg-beige/20 transition-all duration-300 space-y-2 group shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-ivory transition-colors">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <h4 className="font-serif font-bold text-deep-brown text-base tracking-wide">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#7D6B5D] leading-relaxed font-light">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Extra trust citation */}
            <div className="pt-4 border-t border-beige/40">
              <p className="text-xs font-mono text-mehndi-green/90 leading-relaxed italic">
                * We pride ourselves in handcrafting our mehndi fresh before every grand bridal assignment with pure organic Eucalyptus & Lavender oils, ensuring an extremely safe application and stunningly dark stain results.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
