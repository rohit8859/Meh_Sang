export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  location: string;
  message: string;
  status: 'Pending' | 'Confirmed' | 'Declined';
  createdAt: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  category: 'Bridal Mehndi' | 'Arabic Mehndi' | 'Traditional Mehndi' | 'Modern Mehndi' | 'Minimal Mehndi';
  imageUrl: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  review: string;
  imageUrl: string;
}

export interface InstagramItem {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  link: string;
}
