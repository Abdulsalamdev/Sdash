import {
  ArrowDown2,
  ArrowUp2,
  CardSend,
  CardTick,
  Profile2User,
} from "iconsax-react";
import React, { ReactNode } from "react";
import { SalaryAreaChat } from "../charts/salaryAreaChat";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { Views } from "@/types/alltypes";
import clsx from "clsx";
import { amountFormatter } from "../utils/amount-formatter";

export const Statistics = () => {
  const { data: overView } = useQuery({
    queryFn: () => builder.use().transactions.overviews,
    queryKey: builder.transactions.overviews.get(),
    select: ({ data }) => data?.data,
  });
  console.log(overView);
  const icons: Record<string, ReactNode> = {
    active_users: <Profile2User size="22" color="#2F70F2" />,
    transactions: <CardSend size="22" color="#876AFE" />,
    cards_issued: <CardTick size="22" color="#FFBC02" />,
  };

  const Color = ["#2F70F2", "#876AFE ", "#FFBC02"];
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex gap-[16px] items-center justify-between xl:flex-nowrap flex-wrap">
        {overView?.map((data: Views, index) => (
          <div
            className="p-[15px] bg-white rounded-[15px] pr-[25px] dark:bg-[#232A37] grow"
            key={index}
          >
            <div className="flex gap-[10px] items-center pb-[10px]">
              <p>{icons[data.name]}</p>
              <p
                className="text-[#2F70F2] font-roboto font-medium"
                style={{
                  color: Color[index],
                }}
              >
                {data.name}
              </p>
            </div>
            <div className="flex gap-[15px] items-center">
              <p className="text-[28px] font-roboto font-bold">
                ${amountFormatter(data?.current)}
              </p>
              <p className="flex items-center gap-[px]">
                <ArrowDown2
                  size="22"
                  // color="#4EEA7A"
                  color={
                    (
                      data?.current -
                      (data?.last_month / data?.last_month) * 100
                    )?.toString() < "50"
                      ? "#D62C2C"
                      : "#4EEA7A"
                  }
                  variant="Bold"
                  className={clsx(
                    (
                      data?.current -
                      (data?.last_month / data?.last_month) * 100
                    )?.toString() > "50"
                      ? "rotate-180"
                      : null
                  )}
                />
                <span
                  className="text-[#4EEA7A] text-[18px] font-medium"
                  style={{
                    color:
                      (
                        data?.current -
                        (data?.last_month / data?.last_month) * 100
                      )?.toString() < "50"
                        ? "#D62C2C"
                        : "#4EEA7A",
                  }}
                >
                  {(data?.current - (data?.last_month / data?.last_month) * 100)
                    .toString()
                    ?.slice(0, 2) + "%"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <SalaryAreaChat />
    </div>
  );
};
