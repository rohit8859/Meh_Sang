import { PricingPackage } from '../types';
import { Check, Flame, HelpCircle, Sparkles } from 'lucide-react';

interface PricingProps {
  packages: PricingPackage[];
  isLoading: boolean;
}

export default function Pricing({ packages, isLoading }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-ivory text-deep-brown border-b border-beige/40 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            FLEXIBLE RATE CARD
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Our Pricing Packages
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-deep-brown/70 font-light leading-relaxed">
            Premium values designed symmetrically across scales. No hidden charges—only pure Rajasthani organic henna and stellar artistic accuracy.
          </p>
        </div>

        {/* Loading fallback state */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-3">
            <div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-mono text-gold tracking-widest uppercase">Fetching current tariff guides...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-6">
            {packages.map((pkg) => {
              const priceINR = pkg.price;
              return (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-[32px] shadow-sm hover:shadow-md border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                    pkg.isPopular 
                      ? 'border-gold p-8 shadow-md -translate-y-2 bg-[#FFFDF8]' 
                      : 'border-beige/70 p-6'
                  }`}
                >
                  {/* Badge banner decoration */}
                  {pkg.badge && (
                    <div className="absolute top-3.5 right-[-32px] bg-gold text-deep-brown text-[8px] font-mono font-bold py-1 px-10 uppercase tracking-widest rotate-45 select-none shadow">
                      {pkg.badge}
                    </div>
                  )}

                  {/* Pricing core details */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest text-mehndi-green font-semibold uppercase block">
                        PACKAGE PLAN
                      </span>
                      <h3 className="font-serif font-bold text-xl text-deep-brown tracking-wide pr-8">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-warm-gray leading-relaxed font-light min-h-[36px] line-clamp-2">
                        {pkg.description}
                      </p>
                    </div>

                    {/* Cost section */}
                    <div className="bg-[#F5EBDD]/40 p-4 rounded-2xl border border-beige/70 flex items-baseline space-x-1">
                      <span className="text-sm font-sans font-light text-deep-brown/85">Starting</span>
                      <span className="text-3xl font-serif font-bold text-deep-brown tracking-tighter">
                        ₹{priceINR.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] font-mono text-warm-gray">/ session</span>
                    </div>

                    {/* Features list */}
                    <div className="pt-2">
                      <p className="text-[10px] font-mono font-bold text-[#7D6B5D] tracking-wider uppercase mb-3">
                        Inclusions & Benefits:
                      </p>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-xs text-deep-brown/85 font-light leading-snug space-x-2">
                            <Check className="h-4.5 w-4.5 text-gold flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Request link */}
                  <div className="pt-8">
                    <a
                      href="#booking-form-section"
                      className={`w-full py-3 rounded-full text-xs font-sans font-bold uppercase tracking-widest shadow-sm flex items-center justify-center transition-colors duration-300 ${
                        pkg.isPopular 
                          ? 'bg-mehndi-green text-white hover:bg-deep-brown hover:text-gold' 
                          : 'bg-white text-deep-brown hover:bg-beige border border-beige'
                      }`}
                    >
                      Book Now
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Pricing afterword disclaimer */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 bg-[#F5EBDD]/20 rounded-[24px] border border-beige">
          <p className="text-xs text-[#7D6B5D] leading-relaxed font-light flex items-center justify-center space-x-1.5 italic">
            <HelpCircle className="h-4.5 w-4.5 text-gold flex-shrink-0" />
            <span>Need a custom bridal leg, pet portrait, or sangeet group quotation? Chat with us directly on WhatsApp or click are customized bookings.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
