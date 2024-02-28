import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Element3,
  HambergerMenu,
  Lock1,
  Profile,
  Sms,
} from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
export const SideBar = () => {
  const { pathname } = useRouter();
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [visible, setVisible] = useState(false);
  const data = [
    {
      name: "Dashboard",
      info: [
        {
          name: "Home",
          icon: (
            <Element3
              size="18"
              color={
                pathname.includes("/")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#3045BC"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Home",
          link: "/",
        },
        {
          name: "Files",
          icon: (
            <Profile
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Files",
          link: "#",
        },
        {
          name: "Deadline Project",
          icon: (
            <Sms
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Deadline Project",
          link: "#",
        },
        {
          name: "Management",
          icon: (
            <Lock1
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Management",
          link: "#",
        },
        {
          name: "database",
          icon: (
            <Lock1
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Database",
          link: "#",
        },
      ],
    },
    {
      name: "Custome Data",
      info: [
        {
          name: "Team Award",
          icon: (
            <Element3
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Team Award",
          link: "#",
        },
        {
          name: "Invoice Data",
          icon: (
            <Profile
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Invoice Data",
          link: "#",
        },
        {
          name: "Settings",
          icon: (
            <Sms
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Settings",
          link: "#",
        },
        {
          name: "Announcement",
          icon: (
            <Lock1
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Announcement",
          link: "#",
        },
        {
          name: "Meadia Assets",
          icon: (
            <Lock1
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tooltip: "Meadia Assets",
          link: "#",
        },
        {
          name: "Client Feedback",
          icon: (
            <Lock1
              size="18"
              color={
                pathname.includes("/home")
                  ? theme === "light"
                    ? "#3045BC"
                    : "#ffffff"
                  : theme === "dark"
                  ? "#ffffff"
                  : "black"
              }
            />
          ),
          tootip: "Client Feedback",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div>
      <div
        className="flex md:hidden relative pt-[30px] px-[10px]"
        onClick={() => setVisible(!visible)}
      >
        <HambergerMenu size="22" color="#2D6DED" />
        {visible ? (
          <div className="visible">
            {data.map((item) => (
              <div key={item.name} className="">
                <p className="border-solid text-[20px] font-roboto text-my-black pb-[10px] border-b-[1px] border-b-[#e0d1d1] font-medium dark:text-white dark:border-b-[#252D3D]">
                  {item.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="flex flex-col gap-[15px] pt-[10px]"
                >
                  {item.info.map((content, index) => (
                    <div key={index} className="flex items-center gap-[7px]">
                      <button>{content.icon}</button>
                      <Link
                        className={`text-[16px] font-medium font-roboto whitespace-nowrap ${
                          pathname === content.link
                            ? "text-[white]"
                            : "text-[#121212] dark:text-[white]"
                        }`}
                        href={content.link}
                      >
                        {content.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div
        className={`hidden px-[20px] pt-[15px] md:flex flex-col justify-centers bg-[white] h-[100vh] relative overflow-y-hidden dark:bg-[#1A212E] `}
      >
        <p className="text-blue text-[clamp(25px,2.2vw,35px)] font-roboto font-bold">
          SDash
        </p>
        <div className="flex flex-col px-[10px] gap-[15px]">
          {data.map((item) => (
            <div key={item.name} className="">
              <p className="border-solid text-[20px] font-roboto text-my-black pb-[10px] border-b-[1px] border-b-[#e0d1d1] font-medium dark:text-white dark:border-b-[#252D3D]">
                {item.name}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
                className="flex flex-col gap-[15px] pt-[10px]"
              >
                {item.info.map((content, index) => (
                  <div key={index} className="flex items-center gap-[7px]">
                    <button>{content.icon}</button>
                    <Link
                      className={`text-[16px] font-medium font-roboto whitespace-nowrap ${
                        pathname === content.link
                          ? "text-[#2F70F2]"
                          : "text-[#121212] dark:text-[white]"
                      }`}
                      href={content.link}
                    >
                      {content.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
