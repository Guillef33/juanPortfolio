import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NostromoLogo from "../icons/NostromoLogo";
import HamburgerMenuIcon from "../icons/HamburgerMenuIcon";

const routes = [
  {
    name: "Profiles",
    paths: [
      { name: "Overview", pathname: "/profiles" },
      { name: "Office Buildings", pathname: "/profiles/office-buildings" },
      { name: "Government", pathname: "/profiles/government" },
      { name: "Higher Education", pathname: "/profiles/higher-education" },
      { name: "Hospitality", pathname: "/profiles/hospitality" },
      { name: "Data Centers", pathname: "/profiles/data-centers" },
    ],
  },
  {
    name: "Technology",
    paths: [
      { name: "Overview", pathname: "/technology" },
      { name: "The IceBrick Energy Cell", pathname: "/technology/icebrick" },
      { name: "Cloud Based Optimization & Reporting", pathname: "/technology/cloud" },
    ],
  },
  { name: "Sustainability", pathname: "/sustainability" },
  {
    name: "About",
    paths: [
      { name: "About Us", pathname: "/about" },
      { name: "Careers", pathname: "/about#careers" },
    ],
  },
  { name: "Blog & News", pathname: "/blogs" },
  { name: "Contact", pathname: "/contact" },
  { name: "Partners", pathname: "/coming-soon" },
  { name: "Investors", pathname: "/coming-soon" },
];

const alternateHeaderRoutes = [
  "/profiles/",
  "/technology/cloud",
  "/sustainability",
  "/coming-soon",
];

const Navbar = () => {
  const router = useRouter();

  const [showSidebar, setShowSidebar] = useState(false);
  const [alternateHeader, setAlternateHeader] = useState(false);

  useEffect(() => {
    alternateHeaderRoutes.some((route) => router.pathname.includes(route))
      ? setAlternateHeader(true)
      : setAlternateHeader(false);
  }, [router.pathname]);

  useEffect(() => {
    setShowSidebar(false);
    document.body.classList.remove("overflow-y-hidden");
  }, [router.pathname]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    document.body.classList.toggle("overflow-y-hidden");
  };

  return (
    <>
      <header className="absolute z-10 w-full py-8 2xl:py-[2.375rem]">
        <div className="flex items-center justify-center">
          <Link passHref href="/">
            <a>
              <NostromoLogo
                className="w-[10.625rem] 2xl:w-[14.063rem]"
                logoColor={alternateHeader ? "#FFFFFF" : "#BD2327"}
                textColor={router.pathname === "/" || alternateHeader ? "#FFFFFF" : "#131313"}
              />
            </a>
          </Link>
        </div>
      </header>
      <button
        className="absolute top-10 right-8 z-40 flex h-12 w-12 cursor-pointer items-center justify-center 2xl:top-[3rem] 2xl:right-[8.75rem]"
        onClick={toggleSidebar}>
        <HamburgerMenuIcon
          className="w-[1.625rem] 2xl:w-[2.125rem]"
          color={
            showSidebar
              ? "#464646"
              : router.pathname === "/" || alternateHeader
              ? "#FFFFFF"
              : "#707070"
          }
        />
      </button>
      {showSidebar && (
        <>
          <nav className="absolute right-0 z-30 min-h-screen w-[18.938rem] bg-white pl-2 2xl:w-[31.688rem]">
            <div className="mt-[7.75rem] flex flex-col items-end 2xl:mr-[6.75rem] 2xl:mt-48 last:[&>a]:text-nostromo-red">
              {routes.map((route) => {
                return route.paths ? (
                  <details className="group mb-[0.938rem] items-end text-right 2xl:mb-[1.563rem]">
                    <summary className="mb-[1.688rem] mr-[2.25rem] inline-block cursor-pointer list-none px-[0.375rem] text-[1.063rem] font-bold text-nostromo-dark-grey group-open:bg-nostromo-gray 2xl:mb-[1.313rem] 2xl:text-xl [&::-webkit-details-marker]:hidden">
                      {route.name}
                    </summary>
                    <div className="flex flex-col">
                      {route.paths.map((route) => (
                        <Link key={route.name} passHref href={route.pathname}>
                          <a className="mb-[0.938rem] pr-[2.625rem] text-[0.813rem] font-medium leading-[1.125rem] text-[#464646] 2xl:mb-[0.563rem] 2xl:text-[0.938rem]">
                            {route.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link passHref href={route.pathname}>
                    <a className="mb-[2.875rem] pr-[2.625rem] text-[1.063rem] font-bold leading-6 text-nostromo-dark-grey 2xl:text-xl">
                      {route.name}
                    </a>
                  </Link>
                );
              })}
            </div>
          </nav>
          <div
            className="absolute z-20 h-screen w-full bg-black bg-opacity-30"
            onClick={toggleSidebar}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
