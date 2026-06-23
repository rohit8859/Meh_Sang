import { useState } from 'react';
import { SERVICES } from '../data/mehndiData';
import { Sparkles, Heart, Users, Flame, Brush, Layers, X, Check, CalendarDays, Clock, ArrowRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  // Map icon strings to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="h-6 w-6" />;
      case 'Heart': return <Heart className="h-6 w-6" />;
      case 'Users': return <Users className="h-6 w-6" />;
      case 'Flame': return <Flame className="h-6 w-6" />;
      case 'Brush': return <Brush className="h-6 w-6" />;
      case 'Layers': return <Layers className="h-6 w-6" />;
      default: return <Sparkles className="h-6 w-6" />;
    }
  };

  const serviceTimeline: Record<string, { time: string; coverage: string; stain: string; tips: string[] }> = {
    "bridal": {
      time: "4 - 6 Hours",
      coverage: "Elbow to hands and full feet cover",
      stain: "Mahogany Dark Brown (Peaks in 48 hrs)",
      tips: ["Keep paste on for 6-8 hours", "Seal with lemon-sugar mixture", "No contact with water for first 24 hours"]
    },
    "engagement": {
      time: "1.5 - 2 Hours",
      coverage: "Wrist to hands (both sides)",
      stain: "Rich Chocolate Brown",
      tips: ["Keep paste on for 4 hours", "Apply post-removal clove steam", "Moisturize with coconut or mustard oil"]
    },
    "guest": {
      time: "5 - 10 Mins per hand",
      coverage: "Palm or Back-hand trail",
      stain: "Deep Auburn Red",
      tips: ["Let dry naturally for 30 mins", "Avoid scrubbing while washing hands", "Organic stain sets organically inside 24 hrs"]
    },
    "festival": {
      time: "30 - 45 Mins",
      coverage: "Wrist length circular mandala & fingers",
      stain: "Traditional Deep Maroon",
      tips: ["Prepare skin with tea tree oil", "Wipe away paste with a dull butter knife", "Avoid chlorinated swimming pools"]
    },
    "arabic": {
      time: "20 - 30 Mins",
      coverage: "Flowing bold diagonal floral trails",
      stain: "Contoured Dark Accent",
      tips: ["Avoid touching pre-dry thick borders", "Use essential oils for stain protection", "Allow paste to flake off on its own"]
    },
    "custom": {
      time: "Variable (Custom schedule)",
      coverage: "Any customization (Portraits, pets, Skylines)",
      stain: "Bridges custom dark saturation",
      tips: ["Pre-consult draft sketches beforehand", "Do not wax or scrub after application", "Gently rub oil before bathing"]
    }
  };

  return (
    <section id="services" className="py-24 bg-beige/20 text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            ARTISTIC EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Our Premium Services
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-deep-brown/70 font-light leading-relaxed">
            Every celebration deserves a masterpiece. Discover our structured categories, designed from fine, traditional Rajasthani styles to chic contemporary lines.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-ivory rounded-[32px] shadow-sm overflow-hidden border border-beige flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="h-56 overflow-hidden relative group">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} artwork representation`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B2E2E]/90 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-ivory">
                  <div className="p-2 rounded-xl bg-mehndi-green text-white">
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Service description */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-[#7D6B5D] leading-relaxed font-light line-clamp-3">
                  {service.desc}
                </p>
                <button
                  id={`learn-more-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 rounded-full border border-beige bg-white text-xs font-sans uppercase font-bold text-deep-brown hover:bg-beige hover:border-gold/30 transition-all duration-300 tracking-widest flex items-center justify-center space-x-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Info Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4B2E2E]/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-ivory rounded-[32px] border border-beige shadow-2xl max-w-lg w-full overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="h-44 relative overflow-hidden">
              <img
                src={selectedService.imageUrl}
                alt={selectedService.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-deep-brown/80 text-white hover:bg-gold hover:text-deep-brown transition-colors shadow"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1">
              <div className="flex items-center space-x-2 text-gold">
                <div className="p-2 rounded-xl bg-mehndi-green text-white">
                  {getIcon(selectedService.iconName)}
                </div>
                <h3 className="text-2xl font-serif font-bold text-deep-brown">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-xs text-[#7D6B5D] leading-relaxed font-light">
                {selectedService.desc}
              </p>

              {/* Service Logistics Meta */}
              <div className="grid grid-cols-2 gap-4 bg-[#F5EBDD]/40 p-4 rounded-2xl border border-beige">
                <div className="space-y-1">
                  <div className="flex items-center text-xs font-mono font-semibold text-mehndi-green space-x-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Duration:</span>
                  </div>
                  <p className="text-xs font-bold text-deep-brown">
                    {serviceTimeline[selectedService.id]?.time || "Flexible"}
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-xs font-mono font-semibold text-mehndi-green space-x-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    <span>Coverage Type:</span>
                  </div>
                  <p className="text-xs font-bold text-deep-brown truncate">
                    {serviceTimeline[selectedService.id]?.coverage || "Hands"}
                  </p>
                </div>
              </div>

              {/* Stain & Care Instruction section */}
              <div className="space-y-3">
                <h4 className="font-serif font-semibold text-sm text-deep-brown border-b border-beige pb-1">
                  Professional After-Care Secrets:
                </h4>
                <ul className="space-y-2">
                  {serviceTimeline[selectedService.id]?.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start text-xs text-deep-brown/80 font-light space-x-2">
                      <Check className="h-3.5 w-3.5 text-gold mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer Book Trigger */}
            <div className="p-4 bg-beige/25 border-t border-beige flex items-center justify-between gap-4">
              <span className="text-[10px] font-mono tracking-widest text-gold font-bold">
                PURE ORGANIC HENNA
              </span>
              <a
                href="#booking-form-section"
                onClick={() => setSelectedService(null)}
                className="px-6 py-3 rounded-full bg-mehndi-green text-white text-xs font-sans font-bold uppercase tracking-widest shadow-md hover:bg-deep-brown transition-colors hover:text-gold"
              >
                Inquire Rates
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
