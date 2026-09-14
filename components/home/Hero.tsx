import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/hero/yercaud-hills.jpg"
        alt="Yercaud hills — Sahana Holidays group stay accommodation"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/60 to-stone-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:px-8">
        <div className="max-w-3xl">

          <p className="fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Yercaud, Tamil Nadu
          </p>

          <h1 className="fade-up fade-up-delay-1 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            Your Comfortable Group Stay
            <span className="block text-amber-400"> in Yercaud</span>
          </h1>

          <p className="fade-up fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Spacious rooms and cottages, on-site meals, outdoor activities and easy access to
            Yercaud&apos;s most scenic attractions — all in one welcoming property for families
            and groups.
          </p>

          <div className="fade-up fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+919150507580"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-stone-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400 hover:shadow-amber-400/40"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919150507580"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-stone-950"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition hover:border-white/40 hover:text-white"
            >
              Explore Our Stay
            </a>
          </div>

          {/* Stats */}
          <div className="fade-up fade-up-delay-3 mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            {[
              { value: "6+", label: "Room & Cottage Types" },
              { value: "Groups", label: "Welcome" },
              { value: "Yercaud", label: "Tamil Nadu" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-amber-400">{s.value}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <p className="text-[10px] uppercase tracking-[0.3em]">Scroll</p>
        <div className="h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
