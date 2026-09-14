"use client";

import { useState } from "react";

type MealKey = "Breakfast" | "Lunch" | "Dinner";

const menu: Record<MealKey, { option: string; items: string }[]> = {
  Breakfast: [
    { option: "Option 1", items: "Idli, Dosa, Chutney, Sambar, Tea / Coffee" },
    { option: "Option 2", items: "Poori & Masala, Bread & Jam, Tea / Coffee" },
    { option: "Option 3", items: "Idli, Pongal, Chutney, Sambar, Tea / Coffee" },
    { option: "Option 4", items: "Idli, Upma / Kichadi, Chutney, Sambar, Tea / Coffee" },
  ],
  Lunch: [
    { option: "Option 1", items: "Rice, Fish Gravy, Sambar, Rasam, Curd, Vegetable Fry / Curry, Papad & Pickle" },
    { option: "Option 2", items: "Chicken Biryani, Boiled Egg, Raita, Gravy & Sweet" },
    { option: "Option 3", items: "Rice, Rasam, Chicken Curry, Curd, Vegetable Fry & Sweet" },
  ],
  Dinner: [
    { option: "Option 1", items: "Chapati, Egg Masala, Rice, Rasam & Omelette" },
    { option: "Option 2", items: "Chapati, Jeera Rice, Chicken Semi-Gravy & Ice Cream" },
    { option: "Option 3", items: "Rice, Chicken Semi-Gravy, Chapati, Rasam, Curd & Vegetable Fry" },
  ],
};

const tabIcons: Record<MealKey, string> = {
  Breakfast: "🌅",
  Lunch: "☀️",
  Dinner: "🌙",
};

export default function Food() {
  const [active, setActive] = useState<MealKey>("Breakfast");

  return (
    <section id="food" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            On-Site Restaurant
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Group Stay Food Menu
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Enjoy freshly prepared South Indian meals conveniently within the property.
            Perfect for families and groups who prefer to eat together.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex justify-center gap-3">
          {(Object.keys(menu) as MealKey[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                active === tab
                  ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/30"
                  : "border border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900"
              }`}
            >
              <span>{tabIcons[tab]}</span>
              {tab}
            </button>
          ))}
        </div>

        {/* Menu cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menu[active].map((item) => (
            <div
              key={item.option}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-6 transition hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                {item.option}
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-700">{item.items}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-stone-400">
          * Meal options may vary depending on the selected group package.
        </p>
      </div>
    </section>
  );
}
