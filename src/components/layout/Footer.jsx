import equinix from "../../assets/images/equinix.webp";
import digitalRealty from "../../assets/images/digitalRealty.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-8xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:items-center">
          <div>
            <h4 className="text-2xl font-bold text-white">Isha Thakur</h4>
            <p className="mt-1 text-base text-slate-300">Founder, La Maison</p>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold text-black">
              “
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-200">
              Our business is built on close relationships and we are glad that we are able to share our positive real estate experiences with our clients.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <div className="logo-row grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            <img
              src={equinix}
              alt="Equinix"
              className="mx-auto h-12 w-auto object-contain opacity-90 transition duration-300 hover:-translate-y-1 hover:scale-105"
            />

            <img
              src={digitalRealty}
              alt="Digital Realty"
              className="mx-auto h-12 w-auto object-contain opacity-90 transition duration-300 hover:-translate-y-1 hover:scale-105"
            />

            <img
              src={equinix}
              alt="Equinix"
              className="mx-auto h-12 w-auto object-contain opacity-90 transition duration-300 hover:-translate-y-1 hover:scale-105"
            />

            <img
              src={digitalRealty}
              alt="Digital Realty"
              className="mx-auto h-12 w-auto object-contain opacity-90 transition duration-300 hover:-translate-y-1 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
