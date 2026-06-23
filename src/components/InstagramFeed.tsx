import { INSTAGRAM_ITEMS } from '../data/mehndiData';
import { Instagram, Heart, MessageSquare } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-beige/20 text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header segment */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            SOCIAL FOOTPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Follow Our Work
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
            Get daily doses of organic henna inspiration, behind-the-scenes bridal sessions, and customer stains directly from our active feed.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square block rounded-[24px] overflow-hidden group shadow-sm border border-beige hover:shadow-md hover:border-gold/30 transition-all duration-300"
            >
              {/* Photo Image element */}
              <img
                src={item.imageUrl}
                alt="Instagram Mehndi design artwork"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-[24px]"
                referrerPolicy="no-referrer"
              />

              {/* Black metric cover overlay */}
              <div className="absolute inset-0 bg-[#4B2E2E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 text-white rounded-[24px]">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-gold fill-current" />
                  <span className="text-xs font-semibold">{item.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4 text-gold fill-current" />
                  <span className="text-xs font-semibold">{item.comments}</span>
                </div>
              </div>

              {/* Instagram mini floating icon stamp */}
              <div className="absolute top-2 right-2 p-1.5 bg-ivory/85 group-hover:bg-[#556B2F] group-hover:text-white backdrop-blur-sm rounded-lg text-deep-brown shadow z-10 transition-colors">
                <Instagram className="h-3.5 w-3.5" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button bottom */}
        <div className="text-center pt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-deep-brown text-white text-xs font-sans font-bold uppercase tracking-widest shadow-md hover:bg-mehndi-green hover:text-white border border-deep-brown transition-all duration-300 active:scale-95"
          >
            <Instagram className="h-4 w-4 text-white fill-transparent" />
            <span>@MehSang_HennaArtist</span>
          </a>
        </div>

      </div>
    </section>
  );
}
