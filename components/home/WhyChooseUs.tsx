const cards = [
  {
    number: "01",
    icon: "🏡",
    title: "Spacious Accommodation for Groups",
    description:
      "From well-furnished rooms to private cottages, we have options that comfortably accommodate families, friend groups and larger parties. Mix and match room types to suit your group size.",
  },
  {
    number: "02",
    icon: "🌿",
    title: "Scenic Yercaud Location",
    description:
      "Set in the lush Shevaroy Hills, Sahana Holidays offers a peaceful retreat surrounded by greenery, cool hill air and the natural beauty that makes Yercaud a favourite getaway destination.",
  },
  {
    number: "03",
    icon: "🎒",
    title: "Flexible Group Stay Packages",
    description:
      "We make group travel easier. Accommodation, on-site meals, outdoor activities, transportation and Yercaud sightseeing arrangements can all be organised to suit your group's needs.",
  },
  {
    number: "04",
    icon: "🔥",
    title: "Activities & Yercaud Experiences",
    description:
      "Enjoy bonfires, group activities and nature experiences. Explore Yercaud's viewpoints, waterfalls, temples and parks — all within easy reach of your stay.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Why Sahana Holidays
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Why Choose Sahana Holidays for Your Yercaud Group Stay?
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-500">
            Everything your group needs for a comfortable, enjoyable and memorable Yercaud holiday.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.number}
              className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-amber-600">{c.number}</p>
              <div className="mt-4 text-4xl">{c.icon}</div>
              <h3 className="mt-5 text-lg font-bold text-stone-900">{c.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{c.description}</p>
              <div className="mt-6 h-px w-8 bg-amber-500 transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
