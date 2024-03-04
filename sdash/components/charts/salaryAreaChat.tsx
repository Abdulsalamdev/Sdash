import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ArrowDown2 } from "iconsax-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { formatNumberInMillions } from "../utils/formatInMillions";

export const SalaryAreaChat = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { data: salaryData } = useQuery({
    queryFn: () => builder.use().transactions.transactionLog,
    queryKey: builder.transactions.transactionLog.get(),
    select: ({ data }) =>
      data?.data?.map((list) => ({
        name: dayjs(list?.date).format("DD MMM"),
        uv: formatNumberInMillions(list?.cash_bond_bought),
        pv: formatNumberInMillions(list?.salary_paid),
        amt: formatNumberInMillions(list?.salary_paid),
      })),
  });

  console.log(salaryData);

  return (
    <div>
      <div className="flex justify-between gap-[20px]">
        <div className="flex items-center gap-[20px] flex-wrap">
          <div className="flex items-center gap-[7px]">
            <span className="text-[16px] text-[#444444] font-roboto  dark:text-[#C1C2C6]">
              Salary
            </span>
            <div className="w-[18px] h-[18px] bg-[#876AFE] rounded-[5px]"></div>
          </div>
          <div className="flex items-center gap-[7px]">
            <span className="text-[16px] text-[#444444] font-roboto  dark:text-[#C1C2C6] whitespace-nowrap">
              Cash bound
            </span>
            <div className="w-[18px] h-[18px] bg-[#FFBC02] rounded-[5px]"></div>
          </div>
        </div>
        <div className="flex gap-[20px] flex-wrap">
          <div className="flex gap-[10px] items-center justify-between">
            <span className="text-[15px] font-bold text-whitesmoke">from</span>
            <span className="text-[16px] font-medium text-[#121212] dark:text-[#C1C2C6]">
              20 June
            </span>
            <ArrowDown2
              size="18"
              color={theme === "light" ? "#121212" : "#ffffff"}
            />
          </div>
          <div className="flex gap-[10px] items-center justify-between">
            <span className="text-[15px] font-bold text-whitesmoke">to</span>
            <span className="text-[16px] font-medium text-[#121212] dark:text-[#C1C2C6]">
              30 June
            </span>
            <ArrowDown2
              size="18"
              color={theme === "light" ? "#121212" : "#ffffff"}
            />
          </div>
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={290}>
          <AreaChart
            data={salaryData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  // offset="0.998978"
                  stop-color="#AF9CED"
                  stop-opacity="0.19"
                />
                <stop
                  offset="0.998978"
                  stop-color="#AF9CED"
                  stop-opacity="0.01"
                />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" color="white" />
            <YAxis dataKey="pv" />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#FFBC02"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#876AFE"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
