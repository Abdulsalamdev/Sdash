import { builder } from "@/api/builder";
import { Adobe } from "@/public/images/adobe";
import { GoogleCloud } from "@/public/images/google";
import { Sportify } from "@/public/images/sportify";
import { Upwork } from "@/public/images/upwork";
import { TransactionData } from "@/types/alltypes";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ArrangeHorizontalCircle, CalendarSearch } from "iconsax-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { ReactNode } from "react";

export const Overview = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { data: latest } = useQuery({
    queryFn: () => builder.use().transactions.latesttransaction,
    queryKey: builder.transactions.latesttransaction.get(),
    select: ({ data }) => data?.data,
  });
  const list: Record<string, ReactNode> = {
    Spotify: <Sportify />,
    "Google Cloud": <GoogleCloud />,
    "Adobe XD 2023": <Adobe />,
    Upwork: <Upwork />,
  };
  const cardS = [
    {
      name: "3314 debit card",
      img: "/images/visa.png",
    },
    { name: "3341 mastercard", img: "/images/mastercard.png" },
    {
      name: "3314 debit card",
      img: "/images/visa.png",
    },
    { name: "3341 mastercard", img: "/images/mastercard.png" },
  ];
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="bg-white p-[30px] rounded-[10px] dark:bg-[#252735]">
        <div className="flex gap-[10px] items-center pb-[10px] border-b-[1px] border-solid border-b-[#E3E3E3] dark:border-b-[#252D3D]">
          <ArrangeHorizontalCircle
            size="22"
            color={theme === "light" ? "#121212" : "#ffffff"}
          />
          <span className="text-[18px] font-roboto font-medium">
            Transaction details
          </span>
        </div>
        <div className="flex flex-col gap-[10px] pt-[20px]">
          {latest?.map(
            ({ created_at, charge, charged_by }: TransactionData, index) => (
              <div
                key={index}
                className="flex justify-between gap-[20px] items-centers"
              >
                <div className="flex gap-[10px] items-center">
                  {list[charged_by?.company]}
                  <div className="flex flex-col ">
                    <span className="text-[16px] text-[#121212] font-roboto font-medium dark:text-[#C1C2C6]">
                      {charged_by?.company}
                    </span>
                    <span className="text-[12px] text-whitesmoke">
                      {dayjs(created_at)?.format("YYYY-MM-DD")}
                    </span>
                  </div>
                </div>
                <p
                  className="text-[17px] text-[#D62C2C] font-roboto font-medim"
                  style={{
                    color: charge?.type?.includes("debit")
                      ? "#D62C2C"
                      : "#4EEA7A",
                  }}
                >
                  {charge?.type?.includes("debit") ? "-" : "+"} $
                  {charge?.amount}
                </p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="bg-white px-[10px] py-[20px] rounded-[10px] dark:bg-[#252735]">
        <div className="flex gap-[10px] items-center pb-[10px] border-b-[1px] border-solid border-b-[#E3E3E3] dark:border-b-[#252D3D]">
          <CalendarSearch
            size="22"
            color={theme === "light" ? "#121212" : "#ffffff"}
          />
          <span className="text-[18px] font-roboto font-medium">
            Quick transfer
          </span>
        </div>
        <div className="flex gap-[15px] items-center pt-[13px] justify-between flex-wrap">
          {cardS.map((card, index) => (
            <div
              key={index}
              className="flex gap-[10px] items-center border-[1px] border-solid border-whitesmoke p-[10px] rounded-[7px] dark:border-[#434d63]"
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
