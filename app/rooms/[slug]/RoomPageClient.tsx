"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Room } from "@/data/rooms";

export default function RoomPageClient({ room }: { room: Room }) {
  const [current, setCurrent] = useState(0);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">

      {/* Top Bar */}
      <div className="bg-white border-b border-stone-200 px-6 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-wide text-stone-900">
            SAHANA
            <span className="block text-xs font-normal tracking-[0.3em] text-stone-500">HOLIDAYS</span>
          </Link>
          <Link
            href="/#rooms"
            className="text-sm font-medium text-stone-600 hover:text-amber-700 transition"
          >
            ← Back to Rooms
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">

          {/* LEFT — Photo Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative h-[420px] w-full overflow-hidden rounded-3xl">
              <Image
                src={room.images[current]}
                alt={`${room.name} - photo ${current + 1}`}
                fill
                className="object-cover transition duration-300"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />

              {/* Prev / Next */}
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrent((p) => (p - 1 + room.images.length) % room.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white text-xl hover:bg-black/70 transition"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setCurrent((p) => (p + 1) % room.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white text-xl hover:bg-black/70 transition"
                  >
                    ›
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                {current + 1} / {room.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {room.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                    i === current ? "border-amber-400" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="96px" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Details + Booking */}
          <div className="lg:sticky lg:top-8">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
              {room.type}
            </span>

            <h1 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">{room.name}</h1>

            <p className="mt-4 leading-7 text-stone-600">{room.longDescription}</p>

            {/* Capacity + Price */}
            <div className="mt-6 flex gap-6">
              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-stone-200">
                <p className="text-xs uppercase tracking-wider text-stone-500">Capacity</p>
                <p className="mt-1 font-semibold text-stone-900">{room.capacity}</p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-stone-200">
                <p className="text-xs uppercase tracking-wider text-stone-500">Starting from</p>
                <p className="mt-1 font-semibold text-stone-900">
                  {room.price} <span className="text-xs font-normal text-stone-500">/ night</span>
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-stone-500">Inclusions</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {room.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-700"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 rounded-3xl bg-stone-900 p-6 text-white">
              <p className="font-semibold text-lg">Ready to book?</p>
              <p className="mt-1 text-sm text-white/60">
                Call or WhatsApp us directly to confirm your reservation.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="tel:+919578784000"
                  target="_self"
                  className="rounded-full bg-amber-500 px-6 py-3 text-center font-semibold text-stone-950 transition hover:bg-amber-400"
                >
                  📞 Call to Book
                </a>
                <a
                  href="https://wa.me/919578784000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-stone-900"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href="mailto:yercaudcottages@gmail.com?subject=Room%20Booking%20Enquiry%20-%20Sahana%20Holidays%20Yercaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-stone-900"
                >
                  ✉️ Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
