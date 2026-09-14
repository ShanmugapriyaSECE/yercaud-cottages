import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-stone-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
              Welcome to Sahana Holidays
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-stone-900 sm:text-5xl">
              A Peaceful Hill-Station Getaway in Yercaud
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-600">
              Sahana Holidays is a comfortable accommodation and group stay destination nestled in
              the beautiful Shevaroy Hills of Yercaud, Tamil Nadu. Whether you are planning a
              family holiday, a friends&apos; trip, a student group tour or a corporate outing,
              we offer a relaxed and welcoming base for your Yercaud experience.
            </p>
            <p className="mt-4 leading-7 text-stone-600">
              Choose from our range of rooms and cottages, enjoy convenient on-site dining, and
              explore the natural beauty, viewpoints, temples and attractions that make Yercaud
              one of Tamil Nadu&apos;s most loved hill stations.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-stone-200 pt-8">
              {[
                { value: "6+", label: "Stay Options" },
                { value: "Groups", label: "Welcome" },
                { value: "Yercaud", label: "Tamil Nadu" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-bold text-stone-900">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-stone-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero/yercaud-hills.jpg"
                alt="Yercaud hills view from Sahana Holidays accommodation"
                width={900}
                height={700}
                className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-amber-500 px-6 py-4 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-950">
                Yercaud, Tamil Nadu
              </p>
              <p className="mt-0.5 text-xs text-stone-800">Shevaroy Hills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
