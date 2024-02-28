import { ArrowUp2, CardSend, CardTick, Profile2User } from "iconsax-react";
import React from "react";
import { SalaryAreaChat } from "../charts/salaryAreaChat";

export const Statistics = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex gap-[16px] items-center justify-between flex-wrap">
        <div className="p-[15px] bg-white rounded-[15px] pr-[25px] dark:bg-[#232A37] grow">
          <div className="flex gap-[10px] items-center pb-[10px]">
            <p>
              <Profile2User size="22" color="#2F70F2" />
            </p>
            <p className="text-[#2F70F2] font-roboto font-medium">
              Active Users
            </p>
          </div>
          <div className="flex gap-[15px] items-center">
            <p className="text-[28px] font-roboto font-bold">14,7 M</p>
            <p className="flex items-center gap-[px]">
              <ArrowUp2 size="22" color="#4EEA7A" variant="Bold" />
              <span className="text-[#4EEA7A] text-[18px] font-medium">
                32%
              </span>
            </p>
          </div>
        </div>
        <div className="p-[15px] bg-white rounded-[15px] pr-[25px] dark:bg-[#232A37] grow">
          <div className="flex gap-[10px] items-center pb-[10px]">
            <p>
              <CardSend size="22" color="#876AFE" />
            </p>
            <p className="text-[#876AFE] font-roboto font-medium">
              Transactions
            </p>
          </div>
          <div className="flex gap-[15px] items-center">
            <p className="text-[28px] font-roboto font-bold">$1234.17</p>
            <p className="flex items-center gap-[px]">
              <ArrowUp2 size="22" color="#D62C2C" variant="Bold" />
              <span className="text-[#D62C2C] text-[18px] font-medium">
                32%
              </span>
            </p>
          </div>
        </div>
        <div className="p-[15px] bg-white rounded-[15px] pr-[25px] dark:bg-[#232A37] grow">
          <div className="flex gap-[10px] items-center pb-[10px]">
            <p>
              <CardTick size="22" color="#FFBC02" />
            </p>
            <p className="text-[#FFBC02] font-roboto font-medium">
              Card issued
            </p>
          </div>
          <div className="flex gap-[15px] items-center">
            <p className="text-[28px] font-roboto font-bold">3.224</p>
            <p className="flex items-center gap-[px]">
              <ArrowUp2 size="22" color="#4EEA7A" variant="Bold" />
              <span className="text-[#4EEA7A] text-[18px] font-medium">
                32%
              </span>
            </p>
          </div>
        </div>
      </div>
      <SalaryAreaChat />
    </div>
  );
};
