import React from "react";
import Link from "next/link";
import ArrowFooterFormIcon from "../icons/ArrowFooterFormIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import NostromoLogo from "../icons/NostromoLogo";
import TwitterIcon from "../icons/TwitterIcon";

const Footer = () => {
  return (
    <footer className="px-[3.75rem] py-14 md:py-36 md:px-8">
      <div className="mx-auto flex h-full max-w-[82.875rem] flex-col md:flex-row">
        <div className="mb-14 flex-1 md:mr-4 md:mb-0">
          <div className="mb-9 md:mb-[70px]">
            <NostromoLogo height={50} width={188} />
          </div>
          <form className="relative mb-8 max-w-[25rem]">
            <label
              className="text-[13px] font-bold leading-[16px] text-[#2C2C2C] text-opacity-40 focus-within:text-nostromo-dark-grey md:text-sm md:leading-[17px]"
              htmlFor="email">
              email adress
              <input
                className="block w-full border-b border-[#959595] text-xs leading-[15px] text-nostromo-dark-grey focus:border-black focus:outline-none md:text-lg md:leading-[22px]"
                name="email"
              />
              <button className="absolute top-0 -right-2 p-2">
                <ArrowFooterFormIcon height={10} width={20} />
              </button>
            </label>
          </form>
          <div className="flex items-center gap-x-[18px]">
            <a href="https://www.linkedin.com/company/nostromo-energy">
              <LinkedinIcon height={20} width={20} />
            </a>
            <a href="https://www.facebook.com/Nostromo-energy-916826548452896">
              <FacebookIcon height={20} width={20} />
            </a>
            <a href="https://twitter.com/NostromoE">
              <TwitterIcon height={20} width={20} />
            </a>
            <a href="https://www.instagram.com/nostromo_energy">
              <InstagramIcon height={20} width={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:mt-4 md:flex-row">
          <div className="mb-[1.438rem] flex flex-col items-start md:mr-4 md:flex-auto">
            <span className="mb-[1.188rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
              Profiles
            </span>
            <Link passHref href="/profiles">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Overview
              </a>
            </Link>
            <Link passHref href="/profiles/office-buildings">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Office Buildings
              </a>
            </Link>
            <Link passHref href="/profiles/government">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Government
              </a>
            </Link>
            <Link passHref href="/profiles/higher-education">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Higher Education
              </a>
            </Link>
            <Link passHref href="/profiles/hospitality">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Hospitality
              </a>
            </Link>
            <Link passHref href="/profiles/data-centers">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Data Centers
              </a>
            </Link>
          </div>
          <div className="mb-[1.438rem] flex flex-col items-start md:mr-4 md:flex-auto">
            <span className="mb-[1.188rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
              Technology
            </span>
            <Link passHref href="/technology">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Overview
              </a>
            </Link>
            <Link passHref href="/technology/icebrick">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                The IceBrick Energy Cell
              </a>
            </Link>
            <Link passHref href="/technology/cloud">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-[rgb(44,44,44,0.4)]">
                Cloud Based Optimization & Reporting
              </a>
            </Link>
          </div>
          <div className="flex flex-col items-start md:flex-1">
            <Link passHref href="/sustainability">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
                Sustainability
              </a>
            </Link>
            <Link passHref href="/about">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
                About
              </a>
            </Link>
            <Link passHref href="/blogs">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
                Blog & News
              </a>
            </Link>
            <Link passHref href="/contact">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
                Contact
              </a>
            </Link>
            <Link passHref href="/partners">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-nostromo-dark-grey">
                Partners
              </a>
            </Link>
            <Link passHref href="/investors">
              <a className="mb-[1.063rem] text-sm font-bold leading-[1.063rem] text-nostromo-red">
                Investors
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
