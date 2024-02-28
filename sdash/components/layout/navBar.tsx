import { TextInput } from "@mantine/core";
import { Message, SearchNormal1, Setting2, Notification } from "iconsax-react";
import Image from "next/image";
import React from "react";
import { MenuData } from "../common/menuData";
import { useTheme } from "next-themes";
export const NavBar = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const icons = [
    <Message size="22" color={theme === "light" ? "#121212" : "#ffffff"} />,
    <MenuData />,
    <Notification
      size="22"
      color={theme === "light" ? "#121212" : "#ffffff"}
    />,
  ];
  return (
    <div className="flex justify-between items-center gap-[20px]">
      <div className="flex bg-[white] gap-[10px] items-center p-[10px] rounded-[15px] dark:bg-[#1A212E]">
        <SearchNormal1
          size="24"
          color={theme === "light" ? "#121212" : "#ffffff"}
        />
        <TextInput
          placeholder="Search properly.."
          styles={{
            input: {
              outline: "none",
              width: "clamp(190px,17vw,270px)",
              border: "none",
              background: theme === "light" ? "white" : "#232A37",
              color: theme === "light" ? "black" : "white",
            },
          }}
        />
      </div>
      <div className="flex gap-[10px] items-center flex-wrap">
        <div className="flex gap-[20px] items-center">
          {icons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
        <div className="flex items-center gap-[17px] flex-wrap">
          <Image
            src={"/images/boss.jpg"}
            alt={""}
            width={40}
            height={40}
            style={{
              borderRadius: "100%",
            }}
          />
          <p className="text-[15px] font-roboto font-medium ">Alex Smit</p>
        </div>
      </div>
    </div>
  );
};
