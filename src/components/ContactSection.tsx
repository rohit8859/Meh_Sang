import { Phone, Mail, MapPin, MessageCircle, Instagram, Clock, Compass } from 'lucide-react';

export default function ContactSection() {
  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5 text-mehndi-green" />,
      title: "Call Us",
      value: "+91 88598 58859",
      href: "tel:+918859858859"
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-mehndi-green" />,
      title: "WhatsApp Chat",
      value: "+91 88598 58859",
      href: "https://wa.me/918859858859"
    },
    {
      icon: <Mail className="h-5 w-5 text-mehndi-green" />,
      title: "Email Address",
      value: "rohitkumar885985@gmail.com",
      href: "mailto:rohitkumar885985@gmail.com"
    },
    {
      icon: <Instagram className="h-5 w-5 text-mehndi-green" />,
      title: "Instagram",
      value: "@MehSang_HennaArtist",
      href: "https://instagram.com"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-ivory text-deep-brown border-b border-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-gold text-xs font-mono tracking-[0.2em] font-semibold uppercase block">
            LOCATION DETAILS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-deep-brown tracking-wide leading-tight">
            Contact & Location
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto mt-2" />
          <p className="text-sm text-[#7D6B5D] font-light leading-relaxed">
            Visit our central luxury design studio, or contact us to schedule on-site home application coordinates for your wedding venue.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Block: Contact elements */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-2xl text-deep-brown tracking-wider">
                Get In Touch
              </h3>
              <p className="text-xs text-[#7D6B5D] leading-relaxed font-light">
                Feel free to visit us or contact us. Our friendly bridal designers are available 7 days a week to clarify stain instructions or outline guest package setups.
              </p>
            </div>

            {/* Quick Contact stamps */}
            <div className="space-y-5">
              {contactDetails.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex items-center space-x-4 p-4 rounded-[24px] bg-[#F5EBDD]/40 border border-beige hover:border-gold/30 hover:bg-[#F5EBDD]/60 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-white border border-beige">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-deep-brown/50 uppercase block">
                      {item.title}
                    </span>
                    <span className="text-xs md:text-sm font-sans font-bold text-deep-brown group-hover:text-mehndi-green transition-colors">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Timings */}
            <div className="p-6 rounded-[32px] bg-deep-brown text-beige border border-deep-brown space-y-3">
              <div className="flex items-center space-x-2 text-gold">
                <Clock className="h-4.5 w-4.5" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">Studio Hours</span>
              </div>
              <p className="text-[11px] font-light leading-relaxed text-beige/85">
                • Monday – Sunday: 8:30 AM – 9:00 PM<br />
                • Active Wedding Season Hours: Available 24/7 for On-Site Bridal Applications!
              </p>
            </div>
          </div>

          {/* Right Block: Real Google Maps iframe integrations */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="w-full h-full min-h-[400px] rounded-[32px] overflow-hidden border border-beige shadow-sm relative bg-white">
              
              {/* Actual Google Maps embedding Connaught Place, New Delhi bridal hub coordinates */}
              <iframe
                id="google-maps-integration"
                title="MehSang Bridal Henna Studio Delhi Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.203046048126!2d77.213233!3d28.62939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d14008.2!2d77.2162!3d28.6304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-none opacity-90 hover:opacity-100 transition-opacity"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Floating Maps Compass badge stamp */}
              <div className="absolute top-4 left-4 bg-deep-brown/95 backdrop-blur-md text-gold px-4 py-2 rounded-full border border-gold/30 shadow-md flex items-center space-x-2 select-none pointer-events-none">
                <Compass className="h-4 w-4 animate-spin-slow" />
                <span className="text-[10px] font-mono tracking-widest text-ivory">Central Bridal Studio, CP, New Delhi</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
