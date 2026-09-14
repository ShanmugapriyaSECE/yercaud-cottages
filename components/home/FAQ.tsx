"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of accommodation are available at Sahana Holidays?",
    a: "We offer a Deluxe Room, Triple Bedded Room, Family Room, Family Suite Room, One Bedroom Cottage and a Two Bedroom Cottage with a living room. Each option is designed to suit different group sizes and travel needs.",
  },
  {
    q: "Is Sahana Holidays suitable for group stays in Yercaud?",
    a: "Yes. Sahana Holidays is well-suited for group stays. We have multiple room and cottage options that can accommodate families, friends groups, student tours and corporate teams visiting Yercaud.",
  },
  {
    q: "Is food available for group bookings?",
    a: "Yes. We offer South Indian meal options — breakfast, lunch and dinner — for groups staying with us. Meal options may vary depending on the selected group package.",
  },
  {
    q: "Is there dining available within the property?",
    a: "Yes. We have an on-site restaurant within the property. Guests do not need to travel elsewhere for meals, which is especially convenient for families and larger groups.",
  },
  {
    q: "Is Sahana Holidays suitable for family stays in Yercaud?",
    a: "Absolutely. Our Family Room, Family Suite Room and cottage options are designed with families in mind, offering comfortable space and a relaxed atmosphere for a Yercaud family holiday.",
  },
  {
    q: "Can student or corporate groups stay here?",
    a: "Yes. We welcome student groups, college tours and corporate teams. Please contact us directly to discuss accommodation requirements and group packages.",
  },
  {
    q: "Can sightseeing or transportation arrangements be made?",
    a: "Local sightseeing assistance and transportation options can be arranged for groups. Please enquire with us when making your booking.",
  },
  {
    q: "How can I check availability and book?",
    a: "You can check availability and book online through our booking system using the Book Your Stay button. You can also call or WhatsApp us at +91 95787 84000 or email yercaudcottages@gmail.com.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">FAQ</p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Common questions about group stays, accommodation and facilities at Sahana Holidays Yercaud.
          </p>
        </div>

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white transition"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-semibold text-stone-900">{faq.q}</span>
                <span
                  className={`flex-shrink-0 text-2xl font-light text-amber-600 transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="border-t border-stone-100 px-6 pb-5 pt-4">
                  <p className="text-sm leading-7 text-stone-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
