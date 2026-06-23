import { PROCESS_STEPS } from '../data/mehndiData';
import { Phone, MessagesSquare, CheckCircle, Gift, Sparkles, Smile } from 'lucide-react';

export default function Process() {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '1': return <Phone className="h-5 w-5" />;
      case '2': return <MessagesSquare className="h-5 w-5" />;
      case '3': return <Gift className="h-5 w-5" />;
      case '4': return <CheckCircle className="h-5 w-5" />;
      case '5': return <Smile className="h-5 w-5 animate-spin-slow" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-24 bg-ivory text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            THE JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            How Booking Works
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-deep-brown/70 font-light leading-relaxed">
            Five smooth transitions to prepare your royal henna design journey. Fast, fully coordinated, and professional.
          </p>
        </div>

        {/* Timeline graphics container */}
        <div className="relative">
          {/* Centered connector line (hidden on small screens) */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-beige/80 -translate-y-1/2 hidden lg:block z-0" />

          {/* Stepper items */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={item.step}
                className="flex flex-col items-center text-center p-6 bg-white lg:bg-transparent rounded-[32px] lg:rounded-none border border-beige lg:border-none shadow-sm lg:shadow-none space-y-4 group"
              >
                
                {/* Visual Step bubble with connection line connector hooks */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-mehndi-green text-white border-2 border-mehndi-green flex items-center justify-center font-serif font-bold text-lg group-hover:bg-deep-brown group-hover:border-deep-brown transition-all duration-300 shadow-md">
                    {getStepIcon(item.step)}
                  </div>
                  {/* Step status number index bubble */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-deep-brown text-ivory text-[10px] font-mono flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                </div>

                {/* Text and annotations */}
                <div className="space-y-1.5 max-w-[200px]">
                  <h3 className="font-serif font-bold text-base text-deep-brown tracking-wide group-hover:text-mehndi-green transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7D6B5D] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
