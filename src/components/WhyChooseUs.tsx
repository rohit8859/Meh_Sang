import { WHY_CHOOSE_US } from '../data/mehndiData';
import { Medal, ShieldAlert, Edit3, Sparkles, Clock, DollarSign, Smile, Flame } from 'lucide-react';

export default function WhyChooseUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Medal': return <Medal className="h-6 w-6 text-white" />;
      case 'ShieldAlert': return <ShieldAlert className="h-6 w-6 text-white" />;
      case 'Edit3': return <Edit3 className="h-6 w-6 text-white" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-white" />;
      case 'Clock': return <Clock className="h-6 w-6 text-white" />;
      case 'DollarSign': return <DollarSign className="h-6 w-6 text-white" />;
      case 'Smile': return <Smile className="h-6 w-6 text-white" />;
      default: return <Flame className="h-6 w-6 text-white" />;
    }
  };

  return (
    <section className="py-24 bg-beige/10 text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            OUR PROMISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Why Choose MehSang
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
            Delivering exquisite organic henna artwork grounded in rich traditional standards, reliability, and hygiene.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-[32px] shadow-sm border border-beige hover:border-gold/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4"
            >
              <div className="p-3 w-12 h-12 rounded-xl bg-mehndi-green flex items-center justify-center">
                {getIcon(feature.iconName)}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif font-bold text-base text-deep-brown tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-[#7D6B5D] leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
