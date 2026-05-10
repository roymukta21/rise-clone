import React from "react";
import Image from "next/image";

const MegaMenu = ({ activeMenu, setActiveMenu }) => {
  const data = {
    services: {
      width: "w-[1200px]",
      content: (
        <div className="grid grid-cols-[1fr_1fr_380px] gap-10">
          <div>
            <p className="mb-8 text-xl text-zinc-500">Core Services</p>
            <MenuLinks
              items={[
                "Search & Growth Strategy",
                "Onsite SEO",
                "Content Experience",
                "B2B Marketing",
              ]}
            />
          </div>

          <div className="pt-14">
            <MenuLinks
              items={[
                "Digital PR",
                "Social Media & Campaigns",
                "Data & Insights",
                "Social SEO/Search",
              ]}
            />
          </div>

          <ImageCard img="/images/herobg.jpg" button="View All Services ↗" />
        </div>
      ),
    },

    international: {
      width: "w-[860px]",
      content: (
        <div className="grid grid-cols-[1fr_360px] gap-12 items-center">
          <MenuLinks
            items={[
              "US Digital PR",
              "Spain Digital PR",
              "Germany Digital PR",
              "Netherlands Digital PR",
            ]}
            large
          />

          <ImageCard img="/images/herobg.jpg" />
        </div>
      ),
    },

    about: {
      width: "w-[760px]",
      content: (
        <div className="grid grid-cols-[1fr_350px] gap-12 items-center">
          <MenuLinks
            items={["About Us", "Meet The Risers", "Culture", "Testimonials"]}
            large
          />

          <ImageCard img="/images/herobg.jpg" />
        </div>
      ),
    },
  };

  return (
    <div
      onMouseLeave={() => setActiveMenu(null)}
      className={`absolute top-29.5 left-1/2 -translate-x-1/2 z-20 ${data[activeMenu].width} rounded-[36px] bg-white p-10 text-black shadow-2xl`}
    >
      {data[activeMenu].content}
    </div>
  );
};

const MenuLinks = ({ items, large = false }) => {
  return (
    <div
      className={`${
        large ? "text-[38px]" : "text-[28px]"
      } space-y-4 font-semibold leading-none tracking-[-0.08em]`}
    >
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

const ImageCard = ({ img, button }) => {
  return (
    <div className="relative h-87.5 overflow-hidden rounded-3xl">
      <Image src={img} alt="" fill className="object-cover" />

      {button && (
        <button className="absolute bottom-5 left-5 rounded-full bg-black px-8 py-4 text-xl font-semibold text-white">
          {button}
        </button>
      )}
    </div>
  );
};

export default MegaMenu;
