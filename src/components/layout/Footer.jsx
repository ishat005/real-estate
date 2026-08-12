import equinix from "../../assets/images/equinix.webp";
import digitalRealty from "../../assets/images/digitalRealty.webp";

const Footer = () => {
  const partners = [
    { src: equinix, alt: "Equinix" },
    { src: digitalRealty, alt: "Digital Realty" },
    { src: equinix, alt: "Equinix" },
    { src: digitalRealty, alt: "Digital Realty" },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8">

        {/* =====================================================
            FOUNDER QUOTE
        ====================================================== */}
        <div className="grid gap-6 md:grid-cols-[1fr_1.6fr] md:items-center">

          <div>
            <h4 className="text-xl font-bold tracking-tight text-white">
              Isha Thakur
            </h4>

            <p className="mt-0.5 text-sm text-slate-400">
              Founder, La Maison
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-base font-bold text-slate-950">
              "
            </div>

            <p className="text-base leading-7 text-slate-300">
              Our business is built on close relationships and we are glad
              that we are able to share our positive real estate experiences
              with our clients.
            </p>
          </div>

        </div>

        {/* =====================================================
            PARTNER LOGOS + COPYRIGHT
        ====================================================== */}
        <div className="mt-6 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-start">
            {partners.map((partner, index) => (
              <img
                key={`${partner.alt}-${index}`}
                src={partner.src}
                alt={partner.alt}
                className="h-7 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 sm:text-right">
            © {new Date().getFullYear()} La Maison. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;