import {
  ArrowCircleLeft,
  ArrowCircleRight,
  Element3,
  Lock1,
  Profile,
  Sms,
} from "iconsax-react";
import React, { useState } from "react";

export const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  const items1 = [
    {
      name: "Home",
      icon: <Element3 size="18" color="#121212" />,
    },
    {
      name: "Files",
      icon: <Profile size="18" color="#121212" />,
    },
    {
      name: "Deadline Project",
      icon: <Sms size="18" color="#121212" />,
    },
    {
      name: "Management",
      icon: <Lock1 size="18" color="#121212" />,
    },
    {
      name: "database",
      icon: <Lock1 size="18" color="#121212" />,
    },
  ];
  const items2 = [
    {
      name: "Team Award",
      icon: <Element3 size="18" color="#121212" />,
    },
    {
      name: "Invoice Data",
      icon: <Profile size="18" color="#121212" />,
    },
    {
      name: "Settings",
      icon: <Sms size="18" color="#121212" />,
    },
    {
      name: "Announcement",
      icon: <Lock1 size="18" color="#121212" />,
    },
    {
      name: "Meadia Assets",
      icon: <Lock1 size="18" color="#121212" />,
    },
    {
      name: "Client Feedback",
      icon: <Lock1 size="18" color="#121212" />,
    },
  ];
  return (
    <div
      style={{
        width: toggle ? "60px" : "auto",
      }}
      className="px-[20px] pt-[15px] flex flex-col justify-centers bg-[white] h-[100vh] relative "
    >
      <p className="text-blue text-[35px] font-roboto font-bold">
        {toggle ? "" : "SDash"}
      </p>
      <div className="pt-[15px]">
        <div
          className="absolute right-[-10px]"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? (
            <ArrowCircleRight size="22" color="#121212" />
          ) : (
            <ArrowCircleLeft size="22" color="#121212" />
          )}
        </div>
        <p
          className="border-solid text-[20px] font-roboto text-my-black pb-[10px] border-b-[1px] border-b-[#e0d1d1] font-medium"
          style={{
            borderBottom: toggle ? "none" : "1px solid #f5f5f5",
          }}
        >
          {toggle ? "" : "Dashboard"}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            gap: toggle ? "28px" : "15px",
          }}
          className="flex flex-col gap-[15px] pt-[10px]"
        >
          {items1.map((item, index) => (
            <div key={index} className="flex items-center gap-[7px]">
              <div>{item.icon}</div>
              <div className="text-[16px] font-medium font-roboto whitespace-nowrap">
                {toggle ? "" : item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[15px]">
        <div className="flex flex-col gap-[15px] pt-[10px]">
          <p
            className="text-[20px] font-roboto text-my-black pb-[10px] border-b-[1px] border-b-[#e0d1d1] font-medium"
            style={{
              border: toggle ? "none" : "1px solid #f5f5f5",
            }}
          >
            {toggle ? "" : "Customer Data"}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",

              gap: toggle ? "28px" : "15px",
            }}
          >
            {items1.map((item, index) => (
              <div key={index} className="flex items-center gap-[7px]">
                <div>{item.icon}</div>
                <div className="text-[16px] font-roboto font-medium  whitespace-nowrap">
                  {toggle ? "" : item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
