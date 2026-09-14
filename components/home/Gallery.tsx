"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "@/components/ui/GalleryModal";

const photos = [
  "/images/gallery/Common Photos/WhatsApp Image 2026-05-30 at 08.46.45 (1).jpeg",
  "/images/gallery/Common Photos/WhatsApp Image 2026-05-30 at 08.46.45.jpeg",
  "/images/gallery/Common Photos/WhatsApp Image 2026-05-30 at 08.46.46 (1).jpeg",
  "/images/gallery/Common Photos/WhatsApp Image 2026-05-30 at 08.46.46 (2).jpeg",
  "/images/gallery/Common Photos/WhatsApp Image 2026-05-30 at 08.46.46.jpeg",
];

export default function Gallery() {
  const [startIndex, setStartIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Gallery
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Explore Sahana Holidays
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            A glimpse of the accommodation, surroundings and experiences at Sahana Holidays Yercaud.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {photos.map((photo, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStartIndex(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:shadow-xl focus:outline-none ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1 / 1" : "4 / 3" }}
            >
              <Image
                src={photo}
                alt={`Sahana Holidays Yercaud — property and accommodation photo ${i + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-stone-950/0 transition duration-300 group-hover:bg-stone-950/30">
                <span className="scale-0 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-stone-900 transition duration-300 group-hover:scale-100">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {startIndex !== null && (
        <GalleryModal
          images={photos}
          title="Sahana Holidays — Yercaud"
          onClose={() => setStartIndex(null)}
        />
      )}
    </section>
  );
}
