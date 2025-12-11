import Image from "next/image";
import Script from "next/script";
import InstagramEmbed from "./components/InstagramEmbed";
import JuicerInstagram from "./components/JuicerInstagram";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="relative overflow-hidden bg-linear-to-r from-blue-700 via-blue-800 to-blue-900 text-white shadow-lg">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute -left-20 top-[-10%] h-64 w-64 rounded-full bg-blue-400 blur-3xl"></div>
          <div className="absolute right-[-5%] top-1/4 h-72 w-72 rounded-full bg-indigo-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-6 md:py-8 text-center">
          <div className="mx-auto mb-4 md:mb-5 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl">
              <Image
                src="/volleyfest-logo2.png"
                alt="Lakeshore Volleyfest 2026"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Lakeshore Volleyfest</h1>
            <p className="text-base md:text-lg font-medium text-blue-50/90">April 25 &amp; 26, 2026 · Michigan</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Image Slider */}
        <ImageSlider />

        {/* Navigation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-8">
          <Card
            title="Tournament Information"
            link="https://lakeshorevolleyfest.com/tournament-information/"
          />
          <Card
            title="Schedule"
            link="https://results.advancedeventsystems.com/event/PTAwMDAwMzY5MTY90/home"
          />
          <Card
            title="Hotel Information"
            link="https://www.teamtravelsource.com/volleyball_lander/lakeshorevolleyfest/"
          />
          <Card
            title="Tickets/Admission"
            link="https://lakeshorevolleyfest.com/tournament-information/spectator-information/"
          />
          <Card
            title="2025 Locations"
            link="https://lakeshorevolleyfest.com/tournament-information/locations/"
          />
          <Card
            title="Livestream"
            link="https://lakeshorevolleyfest.com/court-1-2-livestream/"
          />
        </div>

        {/* Tournament Details */}
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Lakeshore Volleyfest AAU Super Regional
          </h2>
          <p className="text-2xl font-semibold text-center text-blue-700 mb-6">
            April 25 – 26, 2026
          </p>
          <p className="text-center text-lg mb-8 text-gray-700">
            <span className="font-semibold">Hosted by Inside Out VBC</span><br />
            Muskegon, MI &amp; Grand Rapids, MI
          </p>

          <div className="max-w-3xl mx-auto space-y-3 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">AGE GROUPS:</div>
              <div className="p-4 bg-white text-black">11-18</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">ENTRY FEE:</div>
              <div className="p-4 bg-white text-black">$550.00 (13-18) $480.00 (11-12&apos;s)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">ENTRY DEADLINE:</div>
              <div className="p-4 bg-white text-black">April 6, 2026 (POSTMARK)</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">REGISTRATION:</div>
              <div className="p-4 bg-white text-black"><a href="https://advancedeventsystems.com/41019" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">www.advancedeventsystems.com</a></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">RULES:</div>
              <div className="p-4 bg-white text-black">Tournament will follow current AAU Rules</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-blue-300 rounded-lg overflow-hidden">
              <div className="p-4 bg-blue-50 font-bold border-r-2 border-blue-300 text-blue-900">ENTRY FEES PAYABLE TO:</div>
              <div className="p-4 bg-white text-black">Inside Out Volleyball</div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 text-base leading-relaxed text-gray-700 bg-blue-50 p-6 rounded-lg">
            <p>
              The AAU Super Regional is a National AAU Sponsored Event. Winners in each age
              division will have all or part of their fee waived for AAU Nationals. The refund is a sliding scale 100%-30% based
              on number of teams entered in a division. 16 teams equals full refund, any less than 16 teams would be paid on a
              percentage basis.
            </p>
            <p>
              Inside Out will guarantee a full entry fee to the 1st place team in each Open division.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>This event is sanctioned by the Amateur Athletic Union of the U. S., Inc.</li>
              <li>All participants must have a current AAU membership.</li>
              <li>AAU membership may not be included as part of the entry fee to the event.</li>
            </ul>
          </div>

          {/* AAU Logos */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 pt-8 border-t border-blue-200">
            <div className="relative w-80 h-40">
              <Image
                src="/aau_logo.png"
                alt="AAU Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-80 h-40">
              <Image
                src="/aauvball_logo.png"
                alt="AAU Volleyball Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        </div>

        </div>

        {/* Instagram Embed - Below main content */}
        <section className="mt-12">
          <div className="bg-white border-2 border-blue-200 rounded-xl shadow-xl p-4">
            <JuicerInstagram />
          </div>
        </section>
      </main>

      <Script async src="//www.instagram.com/embed.js" />

      {/* Footer */}
      <footer className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <a
              href="https://twitter.com/isovolleyball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
              Twitter
            </a>
            <a
              href="https://www.facebook.com/Inside-Out-Volleyball-135756269807662/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/isovolleyball/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
              Instagram
            </a>
          </div>
          <p className="text-center text-sm text-gray-400">
            © 2025 Lakeshore Volleyfest
          </p>
        </div>
      </footer>
    </div>
  );
}

function Card({ title, link }: { title: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center group overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
          <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 mb-3 transition-colors duration-300">
          {title}
        </h2>
        <span className="text-blue-600 font-semibold group-hover:underline">Read more »</span>
      </div>
    </a>
  );
}
