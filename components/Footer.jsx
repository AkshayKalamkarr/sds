"use client";
import Link from "next/link";
import React from "react";

// ---------------------------------------------------------------------------
// SDS BHARAT INFRATECH PVT LTD — Footer
// "creating excellence · since 1985"
//
// - No icon library. Alignment is carried by a repeating amber accent dot
//   (".RowMarker") in front of every list line, so contact/office/links all
//   sit on the same left edge whether or not a row has extra content.
// - Logo is a single-color orange inline SVG mark (folded-ribbon / skyline
//   shape echoing the real logo's "S"), with the wordmark set separately in
//   type next to it — no text baked into the SVG itself.
// - Brick-coursing strip at the top edge is the brand's signature texture,
//   used as a structural divider instead of a plain gradient rule.
// ---------------------------------------------------------------------------

const CONTACT = {
  phone: "+91 8591269664",
  phoneHref: "tel:+918591269664",
  whatsappHref: "https://wa.me/918591269664",
  email: "contact@sdsbharatinfratech.in",
  website: "www.sdsbharatinfratech.in",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Mayuresh+Planet+Plot+42-43+Sector+15+Belapur+Navi+Mumbai",
};

const quickLinks = [
  { text: "About Us", href: "/about/supremeInfrastructure" },
  { text: "Projects", href: "/project/commercialprojects" },
  { text: "Portfolio", href: "/services/servicesdashboard" },
  { text: "Careers", href: "/careers" },
  { text: "Contact", href: "/contact" },
];

const legalLinks = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms-of-service" },
];

/** Consistent left-edge marker used on every contact / office row so rows
 *  line up whether they carry one line of text or several. */
const RowMarker = () => (
  <span
    className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"
    aria-hidden="true"
  />
);

const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 text-neutral-300">
      {/* CTA strip */}
      <div className="border-b border-white/10 bg-neutral-900/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              Have a project in mind?
            </p>
            <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
              Let&apos;s build it together.
            </h3>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-neutral-950 transition hover:bg-amber-400"
          >
            Get a Quote
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="h-12 w-auto flex-shrink-0" />
              <span className="leading-tight">
                <span className="block text-xl font-black tracking-wide text-white">
                  SDS Bharat Infratech Pvt Ltd
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-500 italic">
                  creating excellence
                </span>
              </span>
            </Link>
            {/* <p className="italic text-neutral-400">creating excellence</p> */}

            <p className="text-sm leading-relaxed text-neutral-400">
              Building commercial and residential infrastructure across Navi
              Mumbai since 1985 — from first survey stake to final handover.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/40 px-3 py-1 text-xs font-semibold tracking-wide text-amber-500">
              SINCE 1985
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 border-b-2 border-amber-600/40 pb-2 text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-amber-500"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="mb-4 border-b-2 border-amber-600/40 pb-2 text-sm font-bold uppercase tracking-widest text-white">
              Contact Us
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <RowMarker />
                <Link
                  href={CONTACT.phoneHref}
                  className="text-neutral-400 hover:text-amber-500"
                >
                  {CONTACT.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <RowMarker />
                <Link
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500"
                >
                  WhatsApp Us
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <RowMarker />
                <Link
                  href={`mailto:${CONTACT.email}`}
                  className="text-neutral-400 hover:text-amber-500"
                >
                  {CONTACT.email}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <RowMarker />
                <Link
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-amber-500"
                >
                  {CONTACT.website}
                </Link>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <RowMarker />
                <span>Mon – Sat, 9:30 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="lg:col-span-3">
            <h2 className="mb-4 border-b-2 border-amber-600/40 pb-2 text-sm font-bold uppercase tracking-widest text-white">
              Corporate Office
            </h2>
            <div className="flex items-start gap-3 text-sm text-neutral-400">
              <RowMarker />
              <p className="leading-relaxed">
                SDS Bharat Infratech Pvt Ltd
                <br />
                Office No 603, Mayuresh Planet
                <br />
                Plot No. 42/43, Sector 15,
                <br />
                Opposite Belapur Court, Belapur,
                <br />
                Navi Mumbai, Maharashtra 400614
              </p>
            </div>
            <Link
              href={CONTACT.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 pl-[22px] text-xs font-semibold uppercase tracking-wide text-amber-500 hover:underline hover:underline-offset-4"
            >
              Get Directions <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/40">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-neutral-500 sm:flex-row">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} SDS Bharat Infratech Pvt Ltd. All
            Rights Reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                className="transition-colors duration-300 hover:text-amber-500 hover:underline hover:underline-offset-4"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
