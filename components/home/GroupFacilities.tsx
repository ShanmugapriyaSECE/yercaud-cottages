const facilities = [
  { icon: "🏠", title: "Comfortable Accommodation", description: "Rooms and cottages suited for couples, families and groups of different sizes." },
  { icon: "🍳", title: "Breakfast, Lunch & Dinner", description: "South Indian meals served on-site — convenient for groups who prefer to eat together." },
  { icon: "🍽️", title: "On-Site Restaurant", description: "Enjoy freshly prepared meals conveniently within the property. No need to travel for food." },
  { icon: "🧗", title: "Adventure & Outdoor Activities", description: "Outdoor and group activities can be arranged to add excitement to your Yercaud stay." },
  { icon: "🚐", title: "Transportation Assistance", description: "Local transportation options can be arranged to help your group travel around Yercaud." },
  { icon: "🗺️", title: "Yercaud Sightseeing", description: "Sightseeing assistance to Yercaud's popular viewpoints, temples, parks and attractions." },
  { icon: "🅿️", title: "Free Parking", description: "Ample parking space available on the property for all guests." },
  { icon: "📶", title: "Free Wi-Fi", description: "Complimentary Wi-Fi available throughout the property." },
  { icon: "🚿", title: "Hot Water", description: "24/7 hot water supply for a comfortable stay in the cool Yercaud hills." },
  { icon: "🤝", title: "Group-Friendly Common Areas", description: "Shared spaces where your group can relax, gather and spend time together." },
];

export default function GroupFacilities() {
  return (
    <section id="facilities" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Group Stay Facilities
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Everything You Need for a Relaxing Group Holiday
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Sahana Holidays provides the facilities and services that make group stays in Yercaud
            comfortable, convenient and enjoyable.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {facilities.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-md"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="mt-4 text-sm font-bold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-xs leading-5 text-stone-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
