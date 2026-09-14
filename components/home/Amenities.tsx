const amenities = [
  { icon: "🌿", title: "Surrounded by Nature", description: "Wake up to fresh hill air and lush greenery of the Shevaroy Hills." },
  { icon: "🛏️", title: "Comfortable Rooms", description: "Well-furnished rooms and cottages designed for a relaxing stay." },
  { icon: "🚿", title: "Hot Water", description: "24/7 hot water supply for a comfortable stay in the cool hills." },
  { icon: "📶", title: "Free Wi-Fi", description: "Stay connected with complimentary Wi-Fi throughout the property." },
  { icon: "🅿️", title: "Free Parking", description: "Ample free parking space available for all guests." },
  { icon: "🍽️", title: "On-Site Dining", description: "Enjoy convenient dining within the property during your stay, making it easier for families and groups to relax, eat together and enjoy their holiday." },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            What We Offer
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Amenities &amp; Facilities
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Everything you need for a comfortable and enjoyable stay in the hills of Yercaud.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-stone-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-stone-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
