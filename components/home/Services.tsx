const services = [
  {
    icon: "🏠",
    title: "Accommodation",
    description: "Choose from a range of rooms and cottages suited for couples, families and groups of different sizes.",
  },
  {
    icon: "🍛",
    title: "Meals",
    description: "Enjoy South Indian breakfast, lunch and dinner options available on-site during your stay.",
  },
  {
    icon: "🧗",
    title: "Adventure Activities",
    description: "Outdoor activities can be arranged for groups looking to add adventure to their Yercaud holiday.",
  },
  {
    icon: "🚐",
    title: "Transportation",
    description: "Local transportation options can be arranged to help your group get around Yercaud comfortably.",
  },
  {
    icon: "🗺️",
    title: "Sightseeing Tours",
    description: "Guided sightseeing assistance to Yercaud's popular viewpoints, temples, parks and attractions can be arranged.",
  },
];

export default function Services() {
  return (
    <section className="bg-stone-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Everything You Need for a Relaxing Group Holiday
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:bg-white/10 hover:border-amber-500/30"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-5 font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
