import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Settings, ArrowUp, ShieldCheck } from 'lucide-react';
import { Booking, PricingPackage } from './types';

// Import our custom premium components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import InstagramFeed from './components/InstagramFeed';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [packages, setPackages] = useState<PricingPackage[]>([]);
  const [isLoadingPricing, setIsLoadingPricing] = useState<boolean>(true);
  const [isAdminMode, setIsAdminMode] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Fetch initial data cycle from fullstack express API
  useEffect(() => {
    fetchPricing();
    fetchBookings();

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchPricing = async () => {
    try {
      const res = await fetch('/api/pricing');
      if (res.ok) {
        const data = await res.json();
        setPackages(data);
      }
    } catch (err) {
      console.error("Pricing fetch failed", err);
    } finally {
      setIsLoadingPricing(false);
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch('/api/bookings');
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      }
    } catch (err) {
      console.error("Bookings fetch failed", err);
    }
  };

  // Callback when booking successfully posts
  const handleBookingCreated = (newBooking: Booking) => {
    setBookings(prev => [...prev, newBooking]);
  };

  // Callback when price settings get saved
  const handlePricingUpdated = (updatedPackages: PricingPackage[]) => {
    setPackages(updatedPackages);
  };

  // Callback when CRM changes booking status
  const handleBookingStatusUpdated = (bookingId: string, newStatus: 'Pending' | 'Confirmed' | 'Declined') => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus } : b));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="meh-sang-applet" className="min-h-screen bg-ivory text-deep-brown font-sans relative scroll-smooth selection:bg-gold/40 selection:text-deep-brown">
      
      {/* Dynamic top bar notifier indicating Admin Control Sandbox status */}
      <div className="bg-gold text-deep-brown px-4 py-2 font-mono text-[10px] md:text-xs font-bold leading-none tracking-widest text-center uppercase flex justify-center items-center gap-2 select-none z-50 relative border-b border-gold/25">
        <ShieldCheck className="h-4.5 w-4.5 text-deep-brown animate-pulse" />
        <span>Premium Sandbox Live Preview: </span>
        <button
          onClick={() => setIsAdminMode(!isAdminMode)}
          className="underline hover:text-white transition-colors cursor-pointer"
        >
          {isAdminMode ? 'Click to Exit Admin' : 'Click here to Open Admin CRM & Edit Pricing!'}
        </button>
      </div>

      {/* Main Navbar */}
      <Navbar onAdminToggle={() => setIsAdminMode(!isAdminMode)} isAdminMode={isAdminMode} />

      {/* Slide-down Administrative Hub controls */}
      <AnimatePresence>
        {isAdminMode && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="overflow-hidden border-b-2 border-gold relative z-30"
          >
            <div className="pt-[72px] bg-deep-brown"> {/* Navbar offset */}
              <AdminPanel
                bookings={bookings}
                packages={packages}
                onPricingUpdated={handlePricingUpdated}
                onBookingStatusUpdated={handleBookingStatusUpdated}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Standard Customer Presentation Layout tree */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <Pricing packages={packages} isLoading={isLoadingPricing} />
        <InstagramFeed />
        <FAQ />
        
        {/* Reservation Anchor */}
        <BookingForm onBookingSubmitted={handleBookingCreated} />
        
        <ContactSection />
      </main>

      {/* Symmetrical Footer page closure */}
      <Footer />

      {/* Floating back-to-top scroll arrow */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 bg-gold hover:bg-deep-brown text-deep-brown hover:text-gold border border-gold rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
            aria-label="Scroll back to top"
            id="scroll-to-top-button"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
