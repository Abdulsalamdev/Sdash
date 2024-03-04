import { TextInput } from "@mantine/core";
import { Message, SearchNormal1, Setting2, Notification } from "iconsax-react";
import Image from "next/image";
import React, { useState } from "react";
import { MenuData } from "../common/menuData";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Element3,
  HambergerMenu,
  Lock1,
  Profile,
  Sms,
} from "iconsax-react";
export const NavBar = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { pathname } = useRouter();
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
  const icons = [
    {
      id: 1,
      name: (
        <Message
          size="22"
          // color={theme === "light" ? "#121212" : "#ffffff"}
          color="#121212"
        />
      ),
    },
    {
      id: 2,
      name: <MenuData />,
    },
    {
      id: 3,
      name: (
        <Notification
          size="22"
          // color={theme === "light" ? "#121212" : "#ffffff"}
          color="#121212"
        />
      ),
    },
  ];
  return (
    <div className="flex justify-between items-center gap-[clamp(10px,1.3vw,20px)]">
      <div className="flex bg-[white] gap-[10px] items-center p-[10px] rounded-[15px] dark:bg-[#1A212E]">
        <SearchNormal1
          size="24"
          // color={theme === "light" ? "#121212" : "#ffffff"}
          color="#121212"
        />
        <TextInput
          placeholder="Search properly.."
          styles={{
            input: {
              outline: "none",
              width: "clamp(150px,17vw,270px)",
              border: "none",
              // background: theme === "light" ? "white" : "#232A37",
              backgroundColor: "",
              color: theme === "light" ? "black" : "white",
            },
          }}
        />
      </div>
      <div className="flex gap-[10px] items-center flex-wrap">
        <div className="flex gap-[clamp(10px,1.3vw,20px)] items-center">
          {icons.map((icon, index) => (
            <div key={icon.id}>
              <div className="icon">{icon.name}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[10px] flex-wrap">
          <Image
            src={"/images/boss.jpg"}
            alt={""}
            width={30}
            height={30}
            style={{
              borderRadius: "100%",
            }}
          />
          <p className="text-[15px] font-roboto font-medium hidden sm:block">
            Alex Smit
          </p>
        </div>
      </div>
      <div
        className="flex md:hidden relative pt-[30px] px-[10px] items-center top-[-15px]"
        onClick={() => setVisible(!visible)}
      >
        <div>
          <HambergerMenu size="32" color="#2D6DED" />
        </div>
        {visible ? (
          <div className="visible flex flex-col gap-[15px] dark:bg-[#232A37] dark:border-[#161C27]">
            {data.map((item, index) => (
              <div key={index} className="">
                <p className="border-solid text-[20px] font-roboto text-my-black pb-[10px] border-b-[1px] border-b-[#e0d1d1] font-medium dark:text-white dark:border-b-[#252D3D]">
                  {item.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="flex flex-col gap-[20px] pt-[10px]"
                >
                  {item.info.map((content, index) => (
                    <div key={index} className="flex items-center gap-[7px]">
                      <button>{content.icon}</button>
                      <Link
                        className={`text-[16px] font-medium font-roboto whitespace-nowrap ${
                          pathname === content.link
                            ? "text-[#3045BC]"
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
    </div>
  );
};
