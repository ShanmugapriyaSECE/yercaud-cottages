import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import GroupStays from "@/components/home/GroupStays";
import GroupFacilities from "@/components/home/GroupFacilities";
import Food from "@/components/home/Food";
import Experiences from "@/components/home/Experiences";
import ExploreYercaud from "@/components/home/ExploreYercaud";
import Gallery from "@/components/home/Gallery";
import SeoContent from "@/components/home/SeoContent";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main className="bg-stone-50 text-stone-900">
      <Header />

      {/* HERO */}
      <Hero />

      {/* ABOUT / INTRO */}
      <About />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* GROUP STAYS */}
      <GroupStays />

      {/* GROUP FACILITIES */}
      <GroupFacilities />

      {/* FOOD MENU */}
      <Food />

      {/* EXPERIENCES */}
      <Experiences />

      {/* EXPLORE YERCAUD */}
      <ExploreYercaud />

      {/* GALLERY */}
      <Gallery />

      {/* SEO CONTENT */}
      <SeoContent />

      {/* FAQ */}
      <FAQ />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-stone-900 py-28 text-white">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero/yercaud-hills.jpg"
            alt="Yercaud hills — Sahana Holidays group stay"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
            Your Yercaud Getaway Awaits
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
            Ready for Your Yercaud Group Stay?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Plan your next family holiday, group trip or weekend escape with Sahana Holidays.
            Comfortable rooms, cottages, meals and memorable Yercaud experiences await.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:+919150507580"
              className="rounded-full bg-amber-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-stone-950 shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919150507580"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-stone-900"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Now
            </a>
            <a
              href="mailto:yercaudcottages@gmail.com?subject=Group%20Stay%20Enquiry%20-%20Sahana%20Holidays%20Yercaud"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-stone-900"
            >
              ✉️ Email Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
