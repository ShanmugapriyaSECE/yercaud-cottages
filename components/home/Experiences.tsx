import Image from "next/image";

const activities = [
  {
    image: "/images/experiences/Activitiies/WhatsApp Image 2026-05-30 at 08.42.31 (1).jpeg",
    title: "Outdoor Activities",
    description: "Exciting outdoor experiences in the natural surroundings of Yercaud.",
  },
  {
    image: "/images/experiences/Activitiies/WhatsApp Image 2026-05-30 at 08.42.35 (1).jpeg",
    title: "Group Adventures",
    description: "Fun group activities that bring everyone together for a memorable holiday.",
  },
  {
    image: "/images/experiences/Activitiies/WhatsApp Image 2026-05-30 at 08.42.35 (2).jpeg",
    title: "Nature Experiences",
    description: "Explore the lush greenery and peaceful beauty of the Shevaroy Hills.",
  },
  {
    image: "/images/experiences/Activitiies/WhatsApp Image 2026-05-30 at 08.42.35 (3).jpeg",
    title: "Hill Station Fun",
    description: "Activities suited for all ages to make the most of your Yercaud holiday.",
  },
  {
    image: "/images/experiences/Activitiies/WhatsApp Image 2026-05-30 at 08.42.36.jpeg",
    title: "Memorable Moments",
    description: "Create lasting memories with your family, friends or group in Yercaud.",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Experiences
          </p>
          <h2 className="mt-4 text-4xl font-bold text-stone-900 sm:text-5xl">
            Make Your Yercaud Holiday More Memorable
          </h2>
          <p className="mt-5 leading-7 text-stone-600">
            Beyond comfortable accommodation, Yercaud offers a range of experiences for groups,
            families and friends to enjoy together.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {activities.map((a) => (
            <div
              key={a.title}
              className="group overflow-hidden rounded-3xl shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={a.image}
                  alt={`${a.title} — group activity at Yercaud, Sahana Holidays`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <h3 className="font-bold text-white">{a.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/70">{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
