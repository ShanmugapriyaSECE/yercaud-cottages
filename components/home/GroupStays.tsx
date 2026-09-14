const groups = [
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Groups",
    description:
      "Spacious rooms and cottages that give families the comfort and space they need for a relaxed Yercaud holiday together.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Friends Getaways",
    description:
      "Plan a memorable trip with your friends — comfortable accommodation, great food and plenty to explore in Yercaud.",
  },
  {
    icon: "🎓",
    title: "Student Groups",
    description:
      "Affordable group accommodation options suitable for student tours, college trips and educational visits to Yercaud.",
  },
  {
    icon: "💼",
    title: "Corporate Teams",
    description:
      "A peaceful hill-station setting for corporate outings, team retreats and off-site gatherings away from the city.",
  },
  {
    icon: "🌄",
    title: "Weekend Group Trips",
    description:
      "Escape the city for a weekend with your group and enjoy the cool climate and natural beauty of Yercaud.",
  },
  {
    icon: "🏡",
    title: "Large Family Holidays",
    description:
      "Multiple accommodation options that can be arranged together for larger family gatherings and reunions.",
  },
];

export default function GroupStays() {
  return (
    <section id="group-stays" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Group Accommodation in Yercaud
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
              Group Stay in Yercaud
            </h2>
            <p className="mt-6 leading-7 text-stone-600">
              Planning a trip with family, friends, students or colleagues? Sahana Holidays offers
              accommodation options suitable for different types of group travel. Bring everyone
              together, enjoy your meals, explore Yercaud and make your holiday easier to plan.
            </p>
            <p className="mt-4 leading-7 text-stone-600">
              Whether you are organising a school trip, a corporate team outing, a family reunion
              or a friends&apos; weekend escape, we can help make your Yercaud group stay
              comfortable and memorable.
            </p>
            <a
              href="tel:+919578784000"
              className="mt-8 inline-flex rounded-full bg-stone-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              Enquire About Group Stay
            </a>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {groups.map((g) => (
              <div
                key={g.title}
                className="group rounded-2xl border border-stone-100 bg-stone-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:bg-amber-50 hover:shadow-md"
              >
                <span className="text-3xl">{g.icon}</span>
                <h3 className="mt-3 text-sm font-bold text-stone-900">{g.title}</h3>
                <p className="mt-2 text-xs leading-5 text-stone-500">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
