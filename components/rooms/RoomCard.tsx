"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GalleryModal from "@/components/ui/GalleryModal";

type RoomCardProps = {
  slug: string;
  name: string;
  price: string;
  description: string;
  images: string[];
};

export default function RoomCard({ slug, name, price, description, images }: RoomCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">

        {/* Clickable image → goes to room page */}
        <Link href={`/rooms/${slug}`} className="relative block h-64 w-full overflow-hidden">
          <Image
            src={images[0]}
            alt={`${name} — Sahana Holidays Yercaud`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 flex items-end justify-end p-3">
            <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {images.length} photos
            </span>
          </div>
        </Link>

        {/* Room Details */}
        <div className="p-6">
          <Link href={`/rooms/${slug}`}>
            <h3 className="text-xl font-semibold text-stone-900 hover:text-amber-700 transition">
              {name}
            </h3>
          </Link>
          <p className="mt-3 text-sm leading-6 text-stone-600">{description}</p>

          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-500">Starting from</p>
              <p className="mt-1 text-lg font-bold text-stone-900">
                {price}
                <span className="ml-1 text-xs font-normal text-stone-500">/ night</span>
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
              >
                Photos
              </button>
              <Link
                href={`/rooms/${slug}`}
                className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-stone-950"
              >
                View Room
              </Link>
            </div>
          </div>
        </div>
      </article>

      {open && (
        <GalleryModal images={images} title={name} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
