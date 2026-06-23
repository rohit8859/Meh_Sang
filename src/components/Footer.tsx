import { Sparkles, Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-deep-brown text-beige pt-16 pb-8 border-t border-gold/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo & Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-3xl font-serif font-bold text-ivory tracking-wider flex items-center">
                Meh<span className="text-gold">Sang</span>
                <Sparkles className="h-5 w-5 ml-1 text-gold text-indigo" />
              </span>
            </a>
            <p className="text-xs text-beige/70 leading-relaxed font-light">
              Designing memories since 2018. Creating bespoke bridal, engagement, and festival natural mehndi experiences that blend traditional authenticity with contemporary fine geometry.
            </p>
            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold hover:text-deep-brown text-white transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-gold"
                aria-label="Instagram Link"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918859858859"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold hover:text-deep-brown text-white transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-gold"
                aria-label="WhatsApp Link"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-serif font-bold text-sm text-ivory tracking-wider uppercase border-b border-white/10 pb-2">
              Navigations
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-beige/75">
              <li><a href="#home" className="hover:text-gold transition-colors block">Home Hub</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors block">About MehSang</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors block">Our Services</a></li>
              <li><a href="#gallery" className="hover:text-gold transition-colors block">Design Gallery</a></li>
              <li><a href="#pricing" className="hover:text-gold transition-colors block">Packages Rates</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="font-serif font-bold text-sm text-ivory tracking-wider uppercase border-b border-white/10 pb-2">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-beige/75">
              <li><a href="#services" className="hover:text-gold transition-colors block">Bridal Portrayals</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors block">Arabic Outlines</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors block">Mandala Traditional</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors block">Modern Geometry</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors block">Ceremonial Feet</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-ivory tracking-wider uppercase border-b border-white/10 pb-2">
              Contact Studio
            </h4>
            <ul className="space-y-3.5 text-xs font-light text-beige/75">
              <li className="flex items-center space-x-2.5">
                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                <span className="leading-snug">Connaught Place, New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                <span>+91 88598 58859</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="h-4 w-4 text-gold flex-shrink-0 text-white" />
                <span className="truncate">rohitkumar885985@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar copyright & terms */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-light text-beige/50 text-center gap-4">
          <p>
            &copy; 2026 MehSang. All Rights Reserved. Dedicated to beautiful weddings.
          </p>
          <div className="flex space-x-4">
            <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
