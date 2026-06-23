import express from "express";
import path from "path";
import { promises as fs } from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

// Default hardcoded packages to seed the database initially
interface PricingPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  badge?: string;
  isPopular?: boolean;
}

const DEFAULT_PRICING_PACKAGES: PricingPackage[] = [
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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Setup persistence directory
  const DATA_DIR = path.resolve(process.cwd(), "data");
  const BOOKINGS_FILE = path.join(DATA_DIR, "bookings.json");
  const PRICING_FILE = path.join(DATA_DIR, "pricing.json");
  const EMAILS_FILE = path.join(DATA_DIR, "emails.json");

  // Ensure data folder and default files exist
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    console.log("Data folder exists or error:", err);
  }

  // Pre-seed pricing
  try {
    await fs.access(PRICING_FILE);
  } catch {
    await fs.writeFile(PRICING_FILE, JSON.stringify(DEFAULT_PRICING_PACKAGES, null, 2), "utf8");
    console.log("Pricing file seeded with default packages.");
  }

  // Pre-seed bookings
  try {
    await fs.access(BOOKINGS_FILE);
  } catch {
    // Empty seed
    await fs.writeFile(BOOKINGS_FILE, JSON.stringify([], null, 2), "utf8");
  }

  // Pre-seed emails log
  try {
    await fs.access(EMAILS_FILE);
  } catch {
    await fs.writeFile(EMAILS_FILE, JSON.stringify([], null, 2), "utf8");
  }

  // Helper getters/setters
  async function readJSON(filePath: string) {
    try {
      const content = await fs.readFile(filePath, "utf8");
      return JSON.parse(content);
    } catch {
      return [];
    }
  }

  async function writeJSON(filePath: string, data: any) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
  }

  // 1. GET Pricing
  app.get("/api/pricing", async (req, res) => {
    const pricing = await readJSON(PRICING_FILE);
    res.json(pricing);
  });

  // 2. PUT/POST Update Pricing
  app.post("/api/pricing", async (req, res) => {
    try {
      const updatedPackages = req.body;
      if (!Array.isArray(updatedPackages)) {
        return res.status(400).json({ error: "Pricing metadata must be an array" });
      }
      await writeJSON(PRICING_FILE, updatedPackages);
      res.json({ message: "Pricing updated successfully", pricing: updatedPackages });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // 3. GET Bookings (Dashboard CRM)
  app.get("/api/bookings", async (req, res) => {
    const bookings = await readJSON(BOOKINGS_FILE);
    res.json(bookings);
  });

  // 4. POST Create Booking (Form Submission) + Simulate Outbound Email
  app.post("/api/bookings", async (req, res) => {
    try {
      const { name, phone, email, eventDate, eventType, location, message } = req.body;

      if (!name || !phone || !email || !eventDate || !eventType) {
        return res.status(400).json({ error: "Required fields are missing." });
      }

      const bookings = await readJSON(BOOKINGS_FILE);
      const emails = await readJSON(EMAILS_FILE);

      const newBooking = {
        id: "b_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
        name,
        phone,
        email,
        eventDate,
        eventType,
        location: location || "To Be Finalized",
        message: message || "No extra message provided.",
        status: "Pending",
        createdAt: new Date().toISOString()
      };

      bookings.push(newBooking);
      await writeJSON(BOOKINGS_FILE, bookings);

      // Email Mock templates
      const artistEmail = {
        id: "em_artist_" + Date.now(),
        recipient: "rohitkumar885985@gmail.com", // Artist email configured from meta parameters
        subject: `NEW MEHNDI BOOKING: ${name} - ${eventType}`,
        body: `
Dear MehSang Premium Studio,

A brand new booking inquiry request has been received!

DETAILS:
- Client Name: ${name}
- Contact Phone: ${phone}
- Email Address: ${email}
- Event Date: ${eventDate}
- Celebration Type: ${eventType}
- Venue Address: ${location}
- Personal Note: ${message}

Action: Log in to your MehSang Admin Portal to approve, reschedule, or communicate directly with the client.
        `,
        sentAt: new Date().toISOString(),
        type: "Artist Notification"
      };

      const customerEmail = {
        id: "em_client_" + Date.now(),
        recipient: email,
        subject: `MehSang Mehndi Art Studio - Your Booking Request received!`,
        body: `
Namaste ${name},

Thank you for choosing MehSang Mehndi Studio for your grand ${eventType} celebration scheduled on ${eventDate}!

We have successfully received your inquiry form. Our creative mehndi team is currently reviewing our schedule coordinates and design charts relative to your date.

SUMMARY OF INQUIRY:
- Date: ${eventDate}
- Theme: ${eventType}
- Location: ${location}

What happens next?
We will call or contact you on WhatsApp (${phone}) within 12 hours to discuss lengths, personalized peacock/bridal portraits, and custom rate card fits.

Artistically Yours,
MehSang Mehndi Brand Support Team
        `,
        sentAt: new Date().toISOString(),
        type: "Client Confirmation"
      };

      emails.push(artistEmail);
      emails.push(customerEmail);
      await writeJSON(EMAILS_FILE, emails);

      res.status(201).json({
        message: "Booking submitted securely! Logs stored and simulated confirmation emails dispatched.",
        booking: newBooking
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // 5. GET Email Logs (Admin audit trail)
  app.get("/api/emails", async (req, res) => {
    const emails = await readJSON(EMAILS_FILE);
    res.json(emails);
  });

  // 6. POST Update Booking Status
  app.post("/api/bookings/:id/status", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!["Pending", "Confirmed", "Declined"].includes(status)) {
        return res.status(400).json({ error: "Invalid booking status choice." });
      }

      const bookings = await readJSON(BOOKINGS_FILE);
      const bookingIndex = bookings.findIndex((b: any) => b.id === id);

      if (bookingIndex === -1) {
        return res.status(404).json({ error: "Booking ID not spotted." });
      }

      bookings[bookingIndex].status = status;
      await writeJSON(BOOKINGS_FILE, bookings);

      // Add a status change simulated email log as well
      const emails = await readJSON(EMAILS_FILE);
      const statusEmail = {
        id: "em_status_" + Date.now(),
        recipient: bookings[bookingIndex].email,
        subject: `MehSang Studio - Booking Status Updated: ${status}!`,
        body: `
Hello ${bookings[bookingIndex].name},

We are happy to update you that your mehndi booking request for ${bookings[bookingIndex].eventType} has been officially updated to: ${status}.

We are looking forward to making your hands look gorgeous with royal Rajasthani henna patterns!

With love,
MehSang Studio Team
        `,
        sentAt: new Date().toISOString(),
        type: "Status Update"
      };
      emails.push(statusEmail);
      await writeJSON(EMAILS_FILE, emails);

      res.json({ message: "Inquiry status updated successfully", booking: bookings[bookingIndex] });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Static production build directories
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MehSang Fullstack Server Running on http://localhost:${PORT}`);
  });
}

startServer();
