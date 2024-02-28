import { TextInput } from "@mantine/core";
import { Message, SearchNormal1, Setting2, Notification } from "iconsax-react";
import Image from "next/image";
import React from "react";

export const NavBar = () => {
  const icons = [
    <Message size="22" color="#121212" />,
    <Setting2 size="22" color="#121212" />,
    <Notification size="22" color="#121212" />,
  ];
  return (
    <div className="flex justify-between items-center">
      <div className="flex bg-[white] gap-[10px] items-center p-[10px] rounded-[15px]">
        <SearchNormal1 size="24" color="#111C44" />
        <TextInput
          placeholder="Search properly.."
          styles={{
            input: {
              outline: "none",
              width: "270px",
            },
          }}
        />
      </div>
      <div className="flex gap-[10px] items-center">
        <div className="flex gap-[20px] items-center">
          {icons.map((icon, index) => (
            <div key={index}>{icon}</div>
          ))}
        </div>
        <div className="flex items-center gap-[17px]">
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
