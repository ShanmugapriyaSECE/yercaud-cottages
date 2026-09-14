import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahanacottages.com"),
  title: "Sahana Holidays | Group Stay & Accommodation in Yercaud",
  description:
    "Sahana Holidays offers comfortable rooms, cottages and group accommodation in Yercaud. Ideal for family stays, friends getaways, student groups and corporate outings in the Yercaud hills.",
  keywords: [
    "group stay in Yercaud",
    "group accommodation Yercaud",
    "family stay Yercaud",
    "cottages in Yercaud",
    "rooms in Yercaud",
    "Yercaud holiday stay",
    "accommodation in Yercaud",
    "student group stay Yercaud",
    "corporate group stay Yercaud",
    "Sahana Holidays Yercaud",
  ],
  authors: [{ name: "Sahana Holidays" }],
  openGraph: {
    title: "Sahana Holidays | Group Stay & Accommodation in Yercaud",
    description:
      "Plan your family holiday, friends trip or group stay in Yercaud with Sahana Holidays. Comfortable rooms, cottages, meals and memorable experiences.",
    type: "website",
    locale: "en_IN",
    siteName: "Sahana Holidays",
    images: [{ url: "/images/hero/yercaud-hills.jpg", width: 1200, height: 630, alt: "Sahana Holidays Yercaud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahana Holidays | Group Stay & Accommodation in Yercaud",
    description: "Comfortable rooms, cottages and group stays in the beautiful hills of Yercaud.",
    images: ["/images/hero/yercaud-hills.jpg"],
  },
  alternates: {
    canonical: "https://sahanacottages.com",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Sahana Holidays",
  description: "Group stay and accommodation in Yercaud with comfortable rooms, cottages and meal options.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yercaud",
    addressRegion: "Tamil Nadu",
    postalCode: "636601",
    addressCountry: "IN",
  },
  telephone: "+919150507580",
  email: "yercaudcottages@gmail.com",
  priceRange: "₹₹",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
