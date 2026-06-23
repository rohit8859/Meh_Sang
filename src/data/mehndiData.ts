import { GalleryItem, FAQItem, TestimonialItem, PricingPackage, InstagramItem } from '../types';

export const ABOUT_TEXT = {
  title: "About MehSang",
  subtitle: "Artistry details crafted with premium passion & heritage.",
  description: "MehSang is dedicated to creating memorable mehndi experiences through intricate designs, professional service, and artistic excellence. We specialize in bridal, engagement, festive, and customized mehndi that blends traditional heritage with modern creativity. Founded with a deep passion for the therapeutic and festive allure of henna, we make sure each client experiences the finest art for their grand events.",
  features: [
    { title: "Years of Experience", desc: "Crafting beautiful stories on hands for over 8 years of professional bridal practice." },
    { title: "Professional Artistry", desc: "Expert speed, sharp precision, symmetry, and rich natural organic henna mixes." },
    { title: "Customized Designs", desc: "Personalized portraits, wedding dates, family motifs, and modern geometric patterns." },
    { title: "Customer Satisfaction", desc: "Over 500+ glowing brides and hundreds of delighted families across continuous celebrations." }
  ],
  artistImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80"
};

export const SERVICES = [
  {
    id: "bridal",
    title: "Bridal Mehndi",
    desc: "Intricate bridal designs covering hands and feet with personalized elements, depicting your unique wedding story and motifs.",
    imageUrl: "https://images.unsplash.com/photo-1590156221122-cee91357688c?w=600&auto=format&fit=crop&q=80",
    iconName: "Sparkles",
  },
  {
    id: "engagement",
    title: "Engagement Mehndi",
    desc: "Elegant, clean, and stylish patterns designed to make your beautiful rings shine, combining lightweight motifs with beautiful custom borders.",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80",
    iconName: "Heart",
  },
  {
    id: "guest",
    title: "Wedding Guest Mehndi",
    desc: "Quick, beautiful, and affordable designs. Graceful patterns applied in minutes for your wedding squad, family members, and beloved guests.",
    imageUrl: "https://images.unsplash.com/photo-1565192647048-f997ed87f5e2?w=600&auto=format&fit=crop&q=80",
    iconName: "Users",
  },
  {
    id: "festival",
    title: "Festival Mehndi",
    desc: "Special decorative designs celebrating Karwa Chauth, Teej, Eid, Diwali, and traditional family poojas with dark-staining organic henna.",
    imageUrl: "https://images.unsplash.com/photo-1610123598515-3edd538575a9?w=600&auto=format&fit=crop&q=80",
    iconName: "Flame",
  },
  {
    id: "arabic",
    title: "Arabic Mehndi",
    desc: "Modern Arabic patterns emphasizing bold curves, clean negative space, and elegant flowing floral trails for a chic stylish statement.",
    imageUrl: "https://images.unsplash.com/photo-1614914110303-34e85747ea01?w=600&auto=format&fit=crop&q=80",
    iconName: "Brush",
  },
  {
    id: "custom",
    title: "Custom Mehndi",
    desc: "Completely personalized designs tailored according to your specific themes, pets, custom skylines, portraits, or professional motifs.",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80",
    iconName: "Layers",
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    category: "Bridal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1590156221122-cee91357688c?w=600&auto=format&fit=crop&q=80",
    title: "Grand Royal Bridal",
    description: "Extremely detailed full elbow length wedding designs featuring bride and groom portraits."
  },
  {
    id: "g2",
    category: "Bridal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=80",
    title: "Symmetrical Peacock Motif",
    description: "Intricate traditional peacock and mandala fusion on hands, styled for luxury wedding photography."
  },
  {
    id: "g3",
    category: "Arabic Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1614914110303-34e85747ea01?w=600&auto=format&fit=crop&q=80",
    title: "Flowing Floral Arabic Trail",
    description: "Bold outlines with fine shading details that gracefully wind from index finger to wrist."
  },
  {
    id: "g4",
    category: "Minimal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1610123598515-3edd538575a9?w=600&auto=format&fit=crop&q=80",
    title: "Elegant Geometric Mandala",
    description: "A gorgeous clean central mandala paired with delicate finger lace patterns."
  },
  {
    id: "g5",
    category: "Traditional Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop&q=80",
    title: "Classic Indian Kalash & Baraat",
    description: "Traditional doli and shehnai details embedded into continuous dense patterns."
  },
  {
    id: "g6",
    category: "Modern Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&auto=format&fit=crop&q=80",
    title: "Chic Indo-Western fusion",
    description: "Minimal net pattern matching beautifully with gold rings and contemporary wedding wear."
  },
  {
    id: "g7",
    category: "Bridal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=600&auto=format&fit=crop&q=80",
    title: "Detailed Bridal Leg Mehndi",
    description: "Elaborated classic anklet and vine look covering feet for perfect ceremonial aesthetics."
  },
  {
    id: "g8",
    category: "Arabic Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1605666245089-66c303f29ece?w=600&auto=format&fit=crop&q=80",
    title: "Criss-Cross Arabic Lattice",
    description: "Mesh design showcasing contrast between empty space and bold dark henna lines."
  },
  {
    id: "g9",
    category: "Traditional Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?w=600&auto=format&fit=crop&q=80",
    title: "Sunder-Kand Intricate Hands",
    description: "Full palm coverage with high-density traditional motifs and rich dark staining."
  },
  {
    id: "g10",
    category: "Minimal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80",
    title: "Dainty Finger Bands",
    description: "Minimalistic henna bands styling on fingers giving a jewelry-like elegant appeal."
  },
  {
    id: "g11",
    category: "Modern Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1610397613613-286afcf137d5?w=600&auto=format&fit=crop&q=80",
    title: "Negative Space Rose Vines",
    description: "Beautiful roses crafted by leaving clear spaces with heavy surrounding fills."
  },
  {
    id: "g12",
    category: "Bridal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&auto=format&fit=crop&q=80",
    title: "Lotus Pond Bridal Feet",
    description: "Gorgeous symmetrical lotus designs covering the soles and sides of feet."
  },
  {
    id: "g13",
    category: "Arabic Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=600&auto=format&fit=crop&q=80",
    title: "Bold Leaflet Trail",
    description: "Stately leafy vine trailing from wrist to thumb, highlighting a modern minimal look."
  },
  {
    id: "g14",
    category: "Traditional Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80",
    title: "Royal Elephant motif",
    description: "Regal decorated elephant silhouettes positioned perfectly inside palm mandalas."
  },
  {
    id: "g15",
    category: "Minimal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=600&auto=format&fit=crop&q=80",
    title: "Minimalist Back-Hand Cuff",
    description: "A clean traditional cuff design wrapping the wrist like a luxury bracelet."
  },
  {
    id: "g16",
    category: "Modern Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1600142801452-f47ae55ffcf7?w=600&auto=format&fit=crop&q=80",
    title: "Contemporary Hexagonal Net",
    description: "Combining geometric sharpness with fluid organic leaves at the finger tips."
  },
  {
    id: "g17",
    category: "Bridal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=600&auto=format&fit=crop&q=80",
    title: "The Dulhan Celebration Hands",
    description: "Classic multi-stage wedding patterns complete with custom drum and shehnai motifs."
  },
  {
    id: "g18",
    category: "Arabic Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1612255395724-4f4dc1ebfa37?w=600&auto=format&fit=crop&q=80",
    title: "Dual Diagonal Trails",
    description: "Parallel flowing streams on the back-hand highlighting hand jewelry."
  },
  {
    id: "g19",
    category: "Traditional Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=600&auto=format&fit=crop&q=80",
    title: "Marigold Inspired Mandala",
    description: "A wide sunflower and marigold shape surrounded by heavy lace cuffs."
  },
  {
    id: "g20",
    category: "Minimal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1510263826233-1dfb0ced8303?w=600&auto=format&fit=crop&q=80",
    title: "Modern Finger Whispers",
    description: "Charming minimalistic dots and leafy trails aligned directly to fingertips."
  },
  {
    id: "g21",
    category: "Bridal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&auto=format&fit=crop&q=80",
    title: "Royal Rajasthani Bridal",
    description: "Extravagant full-length symmetric royal patterns featuring rich, historical floral panels and dense, majestic strokes."
  },
  {
    id: "g22",
    category: "Arabic Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    title: "Flowing Modern Arabic Ornament",
    description: "Striking leaf-trails and architectural empty space contrasts designed for contemporary celebrations."
  },
  {
    id: "g23",
    category: "Traditional Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80",
    title: "Symmetrical Sacred Mandala",
    description: "A beautiful traditional central palm mandala with traditional lace band detailing on the fingers."
  },
  {
    id: "g24",
    category: "Modern Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1562088287-bde35a1ea917?w=600&auto=format&fit=crop&q=80",
    title: "Intricate Boho Fusion",
    description: "Combining delicate modern jewelry line work with classic elements for an eye-catching, unique look."
  },
  {
    id: "g25",
    category: "Minimal Mehndi",
    imageUrl: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=600&auto=format&fit=crop&q=80",
    title: "Elegant Ring Accentuation",
    description: "A gorgeous, super minimal back-hand design curated to elegantly frame and accentuate engagement rings."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Professional Mehndi Artist",
    desc: "Exquisite craftsmanship and premium speed trained rigorously in royal wedding trends.",
    iconName: "Medal"
  },
  {
    title: "Hygienic Application",
    desc: "Strict clean practices with sanitized cones and organic henna prepared under pristine standards.",
    iconName: "ShieldAlert"
  },
  {
    title: "Customized Designs",
    desc: "Personal elements like portraits, love stories, custom dates, or wedding vows integrated.",
    iconName: "Edit3"
  },
  {
    title: "Premium Quality Mehndi",
    desc: "100% natural organic henna with deep mahogany stains, free from harmful chemical dyes.",
    iconName: "Sparkles"
  },
  {
    title: "On-Time Service",
    desc: "Absolute punctuality for bridal schedules, ensuring your timelines are respected perfectly.",
    iconName: "Clock"
  },
  {
    title: "Affordable Packages",
    desc: "Premium artistic delivery tailored across scalable wedding budgets and guest sizes.",
    iconName: "DollarSign"
  },
  {
    title: "Customer Satisfaction",
    desc: "Continuous stellar coordinates, ensuring our brides feel extremely treasured and beautiful.",
    iconName: "Smile"
  },
  {
    title: "Event Expertise",
    desc: "Graceful management of heavy guest crowds with a fast, professional, smiling team.",
    iconName: "PartyPopper"
  }
];

export const PROCESS_STEPS = [
  {
    step: "1",
    title: "Contact Us",
    desc: "Fill our online form or ping us via WhatsApp with your ceremony date and guest details."
  },
  {
    step: "2",
    title: "Discuss Requirements",
    desc: "Consult on lengths, motifs, personalized story elements, and count of family members."
  },
  {
    step: "3",
    title: "Select Design & Package",
    desc: "Pick premium options from our catalog or share custom boards. Customize to your budget."
  },
  {
    step: "4",
    title: "Confirm Booking",
    desc: "Lock your dates securely through an intuitive process and dynamic advance payments."
  },
  {
    step: "5",
    title: "Enjoy Your Event",
    desc: "Sit back and relax as our professional artist turns your hands into an exquisite canvas!"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Ananya Sharma",
    role: "Royal Bride",
    rating: 5,
    review: "MehSang created the most breathtaking bridal mehndi I could have ever imagined! The detailing of our portraits on my palms left everyone in absolute awe. The stain turned into a deep rich mahogany, and their patience was commendable.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "t2",
    name: "Priya Patel",
    role: "Wedding Host",
    rating: 5,
    review: "We booked MehSang for my sister's engagement and guest party. The team was so fast, hygienic, and extremely polite. Guests were delighted with their modern Arabic patterns. Simply the best team in the wedding industry!",
    imageUrl: "https://images.unsplash.com/photo-1505932794465-147deb7a3f5a?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "t3",
    name: "Ayesha Khan",
    role: "Eid Celebration",
    rating: 5,
    review: "Beautiful, bold, and clean strokes! Stays true to natural organic ingredients so my sensitive skin had absolutely zero issues. The scent of Eucalyptus oil in her mix was wonderfully therapeutic.",
    imageUrl: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "t4",
    name: "Meera Deshmukh",
    role: "Bridal Client",
    rating: 5,
    review: "Every single mandala and floral lace she painted matched perfectly with my custom wedding attire. It was symmetrical and looked like a royal glove. I am completely in love with MehSang's extreme professionalism!",
    imageUrl: "https://images.unsplash.com/photo-1610397613613-286afcf137d5?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "t5",
    name: "Simran Kaur",
    role: "Sangeet Event",
    rating: 5,
    review: "Outstanding service! They managed a crowd of 40 guests easily with two artists. Every guest got a gorgeous, unique pattern and there was zero rush. Punctual, neat, and highly creative.",
    imageUrl: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "t6",
    name: "Kavitha Rajan",
    role: "Karwa Chauth Client",
    rating: 5,
    review: "The intricate bird and lotus motifs she drew represented pure art. The application was so fast, yet the lines were completely pristine. MehSang is definitely our go-to personal henna artist forever!",
    imageUrl: "https://images.unsplash.com/photo-1612255395724-4f4dc1ebfa37?w=100&auto=format&fit=crop&q=80"
  }
];

export const DEFAULT_PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "p1",
    name: "Basic Mehndi Package",
    price: 499,
    description: "Simple, elegant designs perfect for light celebrations, kids, or lightweight guest requirements.",
    features: [
      "Both palms beautiful designs",
      "Stately modern or traditional mandala motif",
      "Organic dark-staining henna",
      "After-care instructions sheet",
      "Application time: ~20 mins"
    ]
  },
  {
    id: "p2",
    name: "Festival Package",
    price: 999,
    description: "Perfect for celebrations like Eid, Diwali, Teej, and beautiful Karwa Chauth rituals.",
    features: [
      "Full hands (palms & back of hand) to wrists",
      "Choice of Arabic, Traditional or Modern motifs",
      "Includes fresh homemade aromatic organic henna cone",
      "Beautiful finger lace details",
      "Free henna protection oil bottle"
    ],
    isPopular: true,
    badge: "Festive Favorite"
  },
  {
    id: "p3",
    name: "Engagement Package",
    price: 2499,
    description: "Premium stylish mehndi designed intricately to blend tradition with your hand jewelry look.",
    features: [
      "Heavy royal patterns up to mid-forearm (front & back)",
      "Choice of personalized motifs (love logo, dates)",
      "Symmetrical lace wrist cuffs",
      "Scented premium essential oil blends",
      "Application time: ~1.5 hours"
    ]
  },
  {
    id: "p4",
    name: "Bridal Package",
    price: 4999,
    description: "Ultimate luxury bespoke experience covering hands and legs recursively for your grand wedding.",
    features: [
      "Bespoke high-density patterns up to elbow length",
      "Custom bride & groom portrait portraits",
      "Bridal legs and feet custom matching designs",
      "Private pre-consultation session & pattern selection",
      "Full bridal care pack (oil, sugar mix, sealant)",
      "Dedicated senior artist on-site guidance"
    ],
    badge: "Elite Bridal"
  }
];

export const INSTAGRAM_ITEMS: InstagramItem[] = [
  {
    id: "i1",
    imageUrl: "https://images.unsplash.com/photo-1590156221122-cee91357688c?w=400&auto=format&fit=crop&q=80",
    likes: 345,
    comments: 24,
    link: "https://instagram.com"
  },
  {
    id: "i2",
    imageUrl: "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=400&auto=format&fit=crop&q=80",
    likes: 421,
    comments: 35,
    link: "https://instagram.com"
  },
  {
    id: "i3",
    imageUrl: "https://images.unsplash.com/photo-1614914110303-34e85747ea01?w=400&auto=format&fit=crop&q=80",
    likes: 298,
    comments: 19,
    link: "https://instagram.com"
  },
  {
    id: "i4",
    imageUrl: "https://images.unsplash.com/photo-1610123598515-3edd538575a9?w=400&auto=format&fit=crop&q=80",
    likes: 512,
    comments: 67,
    link: "https://instagram.com"
  },
  {
    id: "i5",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=400&auto=format&fit=crop&q=80",
    likes: 388,
    comments: 41,
    link: "https://instagram.com"
  },
  {
    id: "i6",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&auto=format&fit=crop&q=80",
    likes: 672,
    comments: 92,
    link: "https://instagram.com"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How far in advance should I book?",
    answer: "For bridal bookings, we highly recommend booking 3 to 6 months in advance, especially if your wedding falls during peak auspicious wedding dates (such as November to February in India). For festive events or smaller functions, 2 to 4 weeks advance booking is usually sufficient."
  },
  {
    question: "Do you provide home service?",
    answer: "Yes! We provide on-site premium home services for bridal mehndi, engagement ceremonies, and bridal group parties. Travel arrangements or travel surcharges may apply depending on your distance from our central studio."
  },
  {
    question: "Which mehndi do you use?",
    answer: "We strictly use 100% natural, freshly prepared, home-made organic henna paste. It is mixed in our studio with premium Rajasthani henna powder, pure water, sugar, and organic essential oils (Eucalyptus and Lavender oil) to guarantee deep color naturally. We never use chemicals or chemical dyes."
  },
  {
    question: "How long does the stain last?",
    answer: "A natural organic henna stain will last anywhere from 7 to 14 days, depending on your skin thickness, body heat, and after-care precautions. The stain peaks in color rich chocolate-mahogany 24 to 48 hours after removing the dry paste."
  },
  {
    question: "Can designs be customized?",
    answer: "Absolutely! Customization is our signature strength. We can seamlessly merge your love story, portraits of you and your spouse, names, dates, diagrams of pets, or architectural skylines directly into standard layout motifs."
  },
  {
    question: "What are your bridal packages?",
    answer: "Our standard Elite Bridal Package starts at ₹4,999 and includes full forearm length dense symmetric patterns, private customization design pre-consultation, bridal legs/feet, and a special lavender-aftercare package for deep staining."
  }
];
