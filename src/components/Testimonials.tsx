import { TESTIMONIALS } from '../data/mehndiData';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-beige/25 text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            KIND WORDS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Client Testimonials
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-deep-brown/70 font-light leading-relaxed">
            Read positive feedback from our beautiful brides and clients. Real stories of rich dark stains, punctuality, and artistic celebration.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-ivory p-8 rounded-[32px] shadow-sm border border-beige hover:border-gold/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Decorative quotation mark decoration */}
              <div className="absolute top-6 right-8 text-gold/15 select-none pointer-events-none group-hover:text-gold/25 transition-colors duration-300">
                <Quote className="h-10 w-10 fill-current" />
              </div>

              <div className="space-y-4">
                {/* Visual Stars */}
                <div className="flex items-center space-x-0.5 text-gold">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-gold" />
                  ))}
                </div>

                {/* Review message block */}
                <p className="text-xs text-[#7D6B5D] font-light leading-relaxed italic relative z-10">
                  "{item.review}"
                </p>
              </div>

              {/* Client Bio stamp */}
              <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-beige/50">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-gold/40">
                  <img
                    src={item.imageUrl}
                    alt={`${item.name} testimonial review portrait`}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-deep-brown">
                    {item.name}
                  </h4>
                  <div className="flex items-center space-x-1.5">
                    <Heart className="h-3 w-3 text-gold fill-current" />
                    <span className="text-[10px] font-mono tracking-wider uppercase text-mehndi-green font-semibold">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
