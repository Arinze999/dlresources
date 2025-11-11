'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Whatsapp } from '../icons/Whatsapp';
import { Mail } from '../icons/Mail';
import { LocationOn } from '../icons/Location';
import CompanyLogo from '../CompanyLogo';
import { ABOUT, BLOG, HOME } from '@/routes/routes';

export default function Footer() {
  return (
    <footer className="bg-darkgreen2 default-padding text-white w-full h-fit flex flex-col items-center gap-10 py-10">
      {/* Top contact strip */}
      <ul className="h-fit w-full  p-2 py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-500/40">
        <li className="flex-1 flex justify-start items-center gap-3">
          <div className="w-[30px] h-[30px]">
            <LocationOn width={30} height={30} />
          </div>
          <div>
            <p className="font-medium">Find Us</p>
            <small className="text-gray-400 text-[12px]">
              Umuonyeali Timber Market, Owerri, Imo
            </small>
          </div>
        </li>

        <li className="flex-1 flex justify-start items-center gap-3">
          <div className="w-[30px] h-[30px]">
            <Whatsapp width={30} height={30} />
          </div>
          <div>
            <p className="font-medium">Call/WhatsApp</p>
            <small className="text-gray-400 text-[12px]">+2348132124871</small>
          </div>
        </li>

        <li className="flex-1 flex justify-start items-center gap-3">
          <div className="w-[30px] h-[30px]">
            <Mail width={30} height={30} />
          </div>
          <div>
            <p className="font-medium">Mail</p>
            <Link href="mailto:deolaresources@gmail.com" target="_blank">
              <small className="text-gray-400 text-[12px]">
                deolaresources@gmail.com
              </small>
            </Link>
          </div>
        </li>
      </ul>

      {/* Bottom grid */}
      <div className="h-fit w-full p-2 flex flex-col md:flex-row gap-6 justify-between">
        {/* Brand + About + Socials */}
        <div className="flex-1 flex flex-col gap-3">
          <CompanyLogo />

          <small className="text-gray-400 text-[12px] leading-relaxed">
            Deola Resources is a food company with a diverse range of products
            and services, including snacks, catering services, easy foods,
            natural foods, agriculture, food processing, food production,
            manufacturing beverages and general contracts.
          </small>

          <p className="font-semibold mt-1">Follow Us</p>
          <ul className="flex gap-3 items-center">
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100063540555025&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/deolaresources/profilecard/?igsh=MWk2cm8xMXptbXlncQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="TikTok">
                <Image
                  src="/images/tiktok.png"
                  alt="TikTok"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Top Sections */}
        <div className="flex-1">
          <p className="font-semibold relative w-fit mb-5">
            Top Sections
            <span className="absolute bg-deolaYellow left-0 -bottom-2.5 w-[50%] h-[3px]" />
          </p>
          <nav className="space-y-2">
            <Link className="underline text-sm" href={`${HOME}`}>
              Home
            </Link>
            <br />
            <Link className="underline text-sm" href={`/${ABOUT}`}>
              About Us
            </Link>
            <br />
            <Link className="underline text-sm" href={`/${BLOG}`}>
              Blog
            </Link>
          </nav>
        </div>

        {/* Join the community */}
        {/* <div className="flex-1">
          <p className="font-semibold relative w-fit mb-5">
            Join the community
            <span className="absolute bg-deolaYellow left-0 -bottom-2.5 w-[50%] h-[3px]" />
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full h-10 relative border-2 border-white/40 overflow-hidden rounded-md"
          >
            <input
              type="email"
              className="email-input w-full h-full text-black text-[12px] p-2 border-none outline-none"
              placeholder="Enter email address"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="email-submit w-16 h-full absolute right-0 bottom-0 bg-deolaYellow rounded-md flex items-center justify-center"
              aria-label="Subscribe"
            >
              <Image
                src="/assets/icons/send.png"
                alt="Send"
                width={18}
                height={18}
              />
            </button>
          </form>
        </div> */}
      </div>

      <p className="w-full text-[12px] text-center py-2">
        Copyright &copy; deolaresources {new Date().getFullYear()}. All Rights
        Reserved
      </p>
    </footer>
  );
}
