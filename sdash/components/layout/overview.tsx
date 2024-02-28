import { ArrangeHorizontalCircle, CalendarSearch } from "iconsax-react";
import Image from "next/image";
import React from "react";

export const Overview = () => {
  const data = [
    {
      name: "Sportify App",
      time: "June 19 2023 at 16.42",
      amount: "-$12.7",
      img: "/images/sportify.png",
    },
    {
      name: "Adobe xD 2023",
      time: "June 19 2023 at 16.42",
      amount: "-$12.7",
      img: "/images/adobe.png",
    },
    {
      name: "Upwork",
      time: "June 19 2023 at 16.42",
      amount: "-$12.7",
      img: "/images/upwork.png",
    },
    {
      name: "Google Cloud",
      time: "June 19 2023 at 16.42",
      amount: "-$12.7",
      img: "/images/google.png",
    },
  ];
  const cardS = [
    {
      name: "3314 debit card",
      img: "/images/visa.png",
    },
    { name: "3341 mastercard", img: "/images/mastercard.png" },
  ];
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="bg-white px-[10px] py-[20px] rounded-[10px]">
        <div className="flex gap-[10px] items-center pb-[10px] border-b-[1px] border-solid border-b-[#E3E3E3]">
          <ArrangeHorizontalCircle size="22" color="#121212" />
          <span className="text-[18px] font-roboto font-medium">
            Transaction details
          </span>
        </div>
        <div className="flex flex-col gap-[10px] pt-[20px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-between gap-[20px] items-centers"
            >
              <div className="flex gap-[10px] items-center">
                <Image src={item.img} alt={""} width={30} height={30} />
                <div className="flex flex-col ">
                  <span className="text-[16px] text-[#121212] font-roboto font-medium">
                    {item.name}
                  </span>
                  <span className="text-[12px] text-whitesmoke">
                    {item.time}
                  </span>
                </div>
              </div>
              <p className="text-[17px] text-[#D62C2C] font-roboto font-medim">
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white px-[10px] py-[20px] rounded-[10px]">
        <div className="flex gap-[10px] items-center pb-[10px] border-b-[1px] border-solid border-b-[#E3E3E3]">
          <CalendarSearch size="22" color="#121212" />
          <span className="text-[18px] font-roboto font-medium">
            Quick transfer
          </span>
        </div>
        <div className="flex gap-[15px] items-center pt-[13px] justify-between">
          {cardS.map((card, index) => (
            <div
              key={index}
              className="flex gap-[10px] items-center border-[1px] border-solid border-whitesmoke p-[10px] rounded-[7px]"
            >
              <Image src={card.img} alt={""} width={30} height={30} />
              <div className="text-[13px] font-medium">{card.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
