"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryModal from "@/components/ui/GalleryModal";

const allPlaces = [
  { name: "Anna Park", image: "/images/yercaud/Parks & Nature/Anna Park.jpg", category: "Parks & Nature" },
  { name: "Botanical Garden", image: "/images/yercaud/Parks & Nature/Botanical Garden.jpg", category: "Parks & Nature" },
  { name: "Deer Park", image: "/images/yercaud/Parks & Nature/Deer park.jpg", category: "Parks & Nature" },
  { name: "Lake Park", image: "/images/yercaud/Parks & Nature/Lake Park.jpeg", category: "Parks & Nature" },
  { name: "Rose Garden", image: "/images/yercaud/Parks & Nature/rose-garden.jpg", category: "Parks & Nature" },
  { name: "Yercaud Lake", image: "/images/yercaud/Parks & Nature/Yercaud Lake.jpg", category: "Parks & Nature" },
  { name: "Annamalaiyar Temple", image: "/images/yercaud/Temples/Annamalaiyar Temple.jpg", category: "Temples" },
  { name: "Chakra Maha Meru Temple", image: "/images/yercaud/Temples/Chakra Maha Meru Temple.jpg", category: "Temples" },
  { name: "Hanuman Temple", image: "/images/yercaud/Temples/Hanuman Temple.jpg", category: "Temples" },
  { name: "Raja Rajeshwari Amman Temple", image: "/images/yercaud/Temples/Raja Rajeshwari Amman Temple.jpg", category: "Temples" },
  { name: "Shevarayan Temple", image: "/images/yercaud/Temples/Shevarayan Temple.jpg", category: "Temples" },
  { name: "Peeku Park", image: "/images/yercaud/Theme places/Peeku Park.jpg", category: "Theme Places" },
  { name: "Poppy Hills", image: "/images/yercaud/Theme places/Poppy Hills.jpg", category: "Theme Places" },
  { name: "Sky Park", image: "/images/yercaud/Theme places/Sky Park.jpg", category: "Theme Places" },
  { name: "Gents Seat", image: "/images/yercaud/Tourist Places/Gents Seat.jpg", category: "Tourist Attractions" },
  { name: "Karadiyur Viewpoint", image: "/images/yercaud/Tourist Places/Karadiyur view point.jpg", category: "Tourist Attractions" },
  { name: "Kiliyur Waterfalls", image: "/images/yercaud/Tourist Places/Kiliyur Waterfalls.jpg", category: "Tourist Attractions" },
  { name: "Lady's Seat", image: "/images/yercaud/Tourist Places/Lady's Seat.jpg", category: "Tourist Attractions" },
  { name: "Pagoda Point", image: "/images/yercaud/Tourist Places/Pagoda Point.JPG", category: "Tourist Attractions" },
  { name: "Yercaud Boat House", image: "/images/yercaud/Tourist Places/Yercaud Boat house.webp", category: "Tourist Attractions" },
  { name: "Yercaud Lake", image: "/images/yercaud/Tourist Places/Yercaud lake.jpg", category: "Tourist Attractions" },
];

const allImages = allPlaces.map((p) => p.image);

export default function ExploreYercaud() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="explore" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Explore Yercaud
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Explore the Beauty of Yercaud
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Stay at Sahana Holidays and discover the viewpoints, waterfalls, gardens, temples and
            attractions that make Yercaud a beautiful hill-station destination.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {allPlaces.map((place, i) => (
            <button
              key={`${place.category}-${place.name}`}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={place.image}
                alt={`${place.name} — ${place.category} in Yercaud`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 15vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 w-full p-2 translate-y-full transition duration-300 group-hover:translate-y-0">
                <p className="text-[10px] font-semibold leading-tight text-white">{place.name}</p>
                <p className="text-[9px] text-amber-300">{place.category}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryModal
          images={allImages}
          title="Explore Yercaud"
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
