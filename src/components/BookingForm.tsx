import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, MessageSquare, User, Sparkles, CheckCircle, MessageCircle } from 'lucide-react';
import { Booking } from '../types';

interface BookingFormProps {
  onBookingSubmitted: (newBooking: Booking) => void;
}

export default function BookingForm({ onBookingSubmitted }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: 'Bridal Mehndi',
    location: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<any | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const eventOptions = [
    'Bridal Mehndi',
    'Engagement Mehndi',
    'Wedding Guest Mehndi',
    'Festival Mehndi',
    'Arabic Mehndi',
    'Custom Mehndi'
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Client full name is required.";
    
    // Simple phone pattern check
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      errors.phone = "Provide a valid phone number (minimum 10 digits).";
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Provide a valid email layout address.";
    }

    // Date validation
    if (!formData.eventDate) {
      errors.eventDate = "Ceremony celebration date is required.";
    } else {
      const selected = new Date(formData.eventDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errors.eventDate = "Date cannot fall in the past.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Server booking registration went bad");
      }

      const body = await response.json();
      setSuccessData(body);
      
      // Notify parent list updater (updates the Admin CRM UI instantly!)
      if (body.booking) {
        onBookingSubmitted(body.booking);
      }

      // Reset form variables
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: 'Bridal Mehndi',
        location: '',
        message: ''
      });
    } catch (err: any) {
      setSubmissionError(err.message || "Failed to submit booking inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-fill WhatsApp click-to-chat text
  const getWhatsAppLink = () => {
    if (!successData?.booking) return '#';
    const b = successData.booking;
    const text = `Hi MehSang! I just submitted an inquiry for my upcoming ${b.eventType} on ${b.eventDate}.\nName: ${b.name}\nWhatsApp: ${b.phone}\nLooking forward to discuss custom peacock & portrait rates!`;
    return `https://wa.me/918859858859?text=${encodeURIComponent(text)}`; // Simulated generic country route
  };

  return (
    <section id="booking-form-section" className="py-24 bg-beige/20 text-deep-brown border-b border-beige/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-ivory shadow-xl rounded-[32px] border border-beige overflow-hidden">
          
          {/* Left Block: aesthetic prompt details */}
          <div className="lg:col-span-4 bg-deep-brown text-beige p-8 flex flex-col justify-between relative">
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown via-deep-brown to-transparent opacity-85 select-none pointer-events-none" />
            
            {/* Top ornaments detail */}
            <div className="relative z-10 space-y-4">
              <span className="text-gold text-[10px] font-mono tracking-widest font-semibold uppercase block">
                MEHSANG RESERVATION
              </span>
              <h3 className="font-serif font-bold text-2xl text-ivory tracking-wider">
                Request a Design Slot
              </h3>
              <div className="h-[2px] w-12 bg-gold" />
              <p className="text-xs text-beige/80 leading-relaxed font-light">
                Secure your auspicious wedding or festival dates. Let us know your preferred length, scale, and customizable details.
              </p>
            </div>

            {/* Bottom contact citations */}
            <div className="relative z-10 pt-16 space-y-4 text-[11px] font-mono select-none">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-gold" />
                <span>Rajasthani Organic Paste</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-gold" />
                <span>Instant Confirmation logs</span>
              </div>
              <p className="text-[10px] text-beige/50 italic">
                * Outbound confirmation emails will be automatically simulated to you and the artist on submission.
              </p>
            </div>
          </div>

          {/* Right Block: Core Form or Success screen */}
          <div className="lg:col-span-8 p-8 flex flex-col justify-center">
            
            {successData ? (
              <div className="text-center space-y-6 py-6 animate-fade-in text-deep-brown">
                <div className="mx-auto w-16 h-16 rounded-full bg-mehndi-green/10 text-mehndi-green flex items-center justify-center shadow-inner">
                  <CheckCircle className="h-10 w-10" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-serif font-bold text-2xl tracking-wide">
                    Inquiry Received, {successData.booking?.name}!
                  </h4>
                  <p className="text-xs text-deep-brown/85 font-light leading-relaxed max-w-md mx-auto">
                    Your request has been stored securely in our CRM database (Inquiry ID: <span className="font-mono bg-beige/60 p-0.5 rounded text-mehndi-green font-bold text-[10px]">{successData.booking?.id}</span>).
                  </p>
                </div>

                 <div className="p-4 bg-[#F5EBDD]/40 rounded-2xl border border-beige text-left max-w-md mx-auto space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-mehndi-green font-bold">Simulated Notification Action Logs:</p>
                  <p className="text-[11px] text-deep-brown/75 font-light leading-snug">
                    ✓ Confirmation dispatch emailed to client inbox: <span className="underline font-mono">{successData.booking?.email}</span><br />
                    ✓ Push notification dispatched to artist hub: <span className="font-mono">rohitkumar885985@gmail.com</span>
                  </p>
                </div>

                {/* WhatsApp Chat link */}
                <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-mehndi-green text-white hover:bg-deep-brown hover:text-gold text-xs font-sans font-bold uppercase tracking-widest shadow transition-colors"
                  >
                    <MessageCircle className="h-4.5 w-4.5 fill-current" />
                    <span>WhatsApp Instant Chat</span>
                  </a>
                  <button
                    onClick={() => setSuccessData(null)}
                    className="w-full sm:w-auto text-xs font-mono font-bold text-deep-brown/55 hover:text-gold uppercase tracking-widest px-4 py-3"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Horizontal row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-4 w-4 text-gold" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sunder Devi"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border text-xs text-deep-brown placeholder:text-deep-brown/40 focus:bg-white focus:outline-none focus:border-gold ${
                          formErrors.name ? 'border-rose-500' : 'border-beige'
                        }`}
                      />
                    </div>
                    {formErrors.name && (
                      <span className="text-[9px] font-mono text-rose-500 font-semibold">{formErrors.name}</span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gold" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98598 58859"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border text-xs text-deep-brown placeholder:text-deep-brown/40 focus:bg-white focus:outline-none focus:border-gold ${
                          formErrors.phone ? 'border-rose-500' : 'border-beige'
                        }`}
                      />
                    </div>
                    {formErrors.phone && (
                      <span className="text-[9px] font-mono text-rose-500 font-semibold">{formErrors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Horizontal row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gold" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. bride@gmail.com"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border text-xs text-deep-brown placeholder:text-deep-brown/40 focus:bg-white focus:outline-none focus:border-gold ${
                          formErrors.email ? 'border-rose-500' : 'border-beige'
                        }`}
                      />
                    </div>
                    {formErrors.email && (
                      <span className="text-[9px] font-mono text-rose-500 font-semibold">{formErrors.email}</span>
                    )}
                  </div>

                  {/* Event Date field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                      Event Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-gold" />
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border text-xs text-deep-brown focus:bg-white focus:outline-none focus:border-gold ${
                          formErrors.eventDate ? 'border-rose-500' : 'border-beige'
                        }`}
                      />
                    </div>
                    {formErrors.eventDate && (
                      <span className="text-[9px] font-mono text-rose-500 font-semibold">{formErrors.eventDate}</span>
                    )}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Type dropdown select */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                      Event Type *
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-3 top-3.5 h-4 w-4 text-gold" />
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border border-beige text-xs text-deep-brown focus:bg-white focus:outline-none focus:border-gold appearance-none"
                      >
                        {eventOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location field */}
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                      Venue Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gold" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Grand Palace Hotel, New Delhi"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border border-beige text-xs text-deep-brown placeholder:text-deep-brown/40 focus:bg-white focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* Message TextArea */}
                <div className="space-y-1">
                  <label className="text-[10px] font-mono font-bold text-deep-brown/60 tracking-wider uppercase block">
                    Message inquiries
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gold" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="e.g. I need customized peacock designs, my husband's portrait on my right palm, and we have 25 additional family guest applications..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-beige/30 border border-beige text-xs text-deep-brown placeholder:text-deep-brown/40 focus:bg-white focus:outline-none focus:border-gold resize-none"
                    />
                  </div>
                </div>

                {submissionError && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 text-rose-600 rounded-xl text-center text-xs font-mono font-medium animate-pulse">
                    ✗ {submissionError}
                  </div>
                )}

                {/* Trigger Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    id="submit-booking-btn"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-deep-brown text-white hover:bg-mehndi-green hover:text-white transition-all duration-300 text-xs font-sans font-bold uppercase tracking-widest shadow-md flex items-center justify-center space-x-2 active:scale-95 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Processing Submission...' : 'Request Booking'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
