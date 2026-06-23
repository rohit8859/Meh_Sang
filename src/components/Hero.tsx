import { motion } from 'motion/react';
import { Sparkles, Calendar, CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ivory text-deep-brown"
    >
      {/* Background Image Overlay with elegant soft watermark look */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590156221122-cee91357688c?w=1600&auto=format&fit=crop&q=80"
          alt="Premium Bridal Mehndi Background"
          className="w-full h-full object-cover object-center opacity-15 select-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/40 via-transparent to-ivory/40" />
      </div>

      {/* Decorative Blob from Natural Tones Styling */}
      <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.07] pointer-events-none z-0">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#556B2F" d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,77.3,-43.8C84.8,-30.2,88.4,-15.1,88.1,-0.2C87.8,14.7,83.6,29.4,75.4,42C67.2,54.6,55,65,41.2,71.5C27.4,78.1,12,80.7,-2.8,85.5C-17.5,90.3,-35.1,97.2,-49.6,92.5C-64.1,87.7,-75.6,71.3,-82.3,55.3C-89.1,39.3,-91.1,23.6,-90.4,8.3C-89.7,-7,-86.3,-22,-79.1,-35.7C-71.9,-49.4,-61,-61.8,-47.9,-69.4C-34.9,-77,-19.7,-79.7,-2.2,-75.9C15.3,-72.1,31.2,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Floating Decorative Ornaments mimicking traditional mandala drawings */}
      <div className="absolute top-24 left-10 opacity-20 pointer-events-none select-none hidden md:block">
        <div className="w-56 h-56 border border-[#556B2F]/30 rounded-full animate-[spin_60s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
      </div>
      <div className="absolute bottom-24 right-10 opacity-20 pointer-events-none select-none hidden md:block">
        <div className="w-72 h-72 border-2 border-[#D4AF37]/30 rounded-full animate-[spin_90s_linear_infinite]" style={{ borderStyle: 'double' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Studio Tagline */}
          <div className="inline-flex items-center space-x-2 bg-beige text-mehndi-green px-4 py-1.5 rounded-full border border-beige shadow-sm">
            <Sparkles className="h-4 w-4 text-gold animate-bounce" />
            <span className="text-xs font-mono tracking-[0.2em] font-bold uppercase text-[#556B2F]">
              Premium Bridal Studio
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Beautiful <span className="text-[#556B2F] italic">Mehndi Art</span> <br />
            for Every Celebration
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#7D6B5D] font-medium leading-relaxed">
            Bridal, Engagement, and Customized Designs Crafted with Passion. Blending traditional heritage with modern creativity for your most memorable moments.
          </p>

          {/* CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#booking-form-section"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-mehndi-green hover:bg-deep-brown text-white font-bold uppercase tracking-widest text-xs shadow-xl shadow-[#556B2F]/10 transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
            >
              <CalendarCheck className="h-4 w-4 mr-1" />
              <span>Book Appointment</span>
            </a>
            <a
              href="#gallery"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-beige text-deep-brown border border-beige font-bold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
            >
              <span>View Portfolio</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center animate-bounce">
        <a href="#about" className="text-beige/60 hover:text-gold transition-colors text-xs tracking-widest uppercase flex flex-col items-center">
          <span className="mb-2">Discover</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-beige/60 to-transparent" />
        </a>
      </div>
    </section>
  );
}
