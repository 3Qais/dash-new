/* eslint-disable @next/next/no-img-element */
// FooterComponent.tsx

import React from "react";

import {
  IconBrandTwitterFilled,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

function LinkSection({ title, links, className = "" }) {
  return (
    <div className={`flex basis-full flex-col gap-2 ${className}`}>
      <p className="mb-2 text-white "> {title} </p>

      {/* <a href="/" className="text-[#333333] no-underline	hover:underline">
                Docs
            </a> */}

      {links.map((link, index) => (
        <a
          href={link.href}
          key={index}
          className="text-[#494949] no-underline	hover:underline"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className=" 
                mt-[100px] flex h-[400px] flex-row justify-between

                border-t-[1.5px] border-[#333333]
                bg-[#111111] px-[15%] py-10
                "
    >
      {/* Left Items */}
      <div className="flex h-full basis-full flex-col">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/landing/logo-no-background.png"
            alt="logo"
            className=" w-10"
          />
          <p
            style={{
              fontFamily: "Clash Display",
            }}
            className="ml-2 text-2xl font-bold text-[#a8a5bd]"
          >
            Elysium
          </p>
        </div>

        {/* Status */}
        <div className="mt-10">
          <div className=" flex flex-col text-white sm:flex-row sm:items-center">
            <p> Status: </p>
            <div className="flex flex-row items-center">
              <div className=" ml-2 hidden h-2 w-2 rounded-full bg-purple-900 sm:block"></div>
              <a
                href="https://status.elysium.wtf"
                className="ml-0 font-bold text-purple-900 sm:ml-1 cursor-pointer no-underline"
              >
                All Systems Operational.
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto">
          <p className=" font-bold  ">{`© ${currentYear} Elysium`}</p>

          <div className="mt-2 flex h-max flex-row gap-2">
            <IconBrandGithubFilled
              stroke="#a8a5bd"
              color="#a8a5bd"
              width={30}
            />

            {/* Seperator  */}
            <div className="h-auto py-1">
              <div className="h-full border border-[#3f3e47]"></div>
            </div>

            <IconBrandTwitterFilled color="#a8a5bd" width={30} />
          </div>
        </div>
      </div>

      {/* Right items */}
      <div className="flex basis-full justify-center ">
        <LinkSection
          title="Explore"
          className="ml-[50%] sm:ml-0"
          links={[
            {
              title: "Docs",
              href: "https://docs.elysium.wtf/",
            },
            {
              title: "Script hub",
              href: "https://minecraftscripts.com/",
            },
            {
              title: "Media",
              href: "/",
            },
          ]}
        />

        <LinkSection
          title="Company"
          className="hidden  sm:flex"
          links={[
            {
              title: "About",
              href: "/",
            },
            {
              title: "Contact Us",
              href: "/",
            },
            {
              title: "Privacy Policy",
              href: "https://forum.elysium.wtf/t/elysium-privacy-policy/1724",
            },
            {
              title: "Terms of Service",
              href: "https://forum.elysium.wtf/t/elysium-terms-of-service/1502",
            },
          ]}
        />
      </div>
    </footer>
  );
};

export default FooterComponent;
