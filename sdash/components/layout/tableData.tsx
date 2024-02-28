import { Database } from "@/public/images/database";
import BarChart from "../charts/barChats";
import React from "react";
import { ArrowDown2 } from "iconsax-react";

export const TableData = () => {
  const data = [
    {
      Actual: "office supplies",
      actual: "12345",
      Forecast: "12345",
      variance1: "12345",
      variance2: "12345",
      variance3: "12345",
    },
    {
      Actual: "office supplies",
      actual: "12345",
      Forecast: "12345",
      variance1: "12345",
      variance2: "12345",
      variance3: "12345",
    },
    {
      Actual: "office supplies",
      actual: "12345",
      Forecast: "12345",
      variance1: "12345",
      variance2: "12345",
      variance3: "12345",
    },
    {
      Actual: "office supplies",
      actual: "12345",
      Forecast: "12345",
      variance1: "12345",
      variance2: "12345",
      variance3: "12345",
    },
    {
      Actual: "office supplies",
      actual: "12345",
      Forecast: "12345",
      variance1: "12345",
      variance2: "12345",
      variance3: "12345",
    },
  ];
  const data2 = [
    { id: 1, title: "View Per Quarter" },
    { id: 2, title: "View Per Year" },
  ];
  return (
    <div className="flex gap-[20px] pt-[20px] flex-wrap-reverse">
      <div className="bg-white p-[30px] rounded-[15px] dark:bg-[#161C27]">
        <div className="flex gap-[7px] items-center  bd dark:border-b-[#252D3D] pb-[10px]">
          <Database />
          <p className="text-[22px] text-[#121212] font-medium font-roboto dark:text-white">
            Activity Chart
          </p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[#A8A8A8] pb-2">Per Week</p>
          <BarChart
            barData={[25, 20, 60, 30, 35, 10, 47]}
            color={[
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
            ]}
            empty={["", "", "", "", "", "", ""]}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[#A8A8A8] pb-2">Per Month</p>
          <BarChart
            barData={[
              35, 10, 47, 25, 20, 60, 30, 35, 10, 47, 57, 21, 34, 58, 66,
            ]}
            color={[
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
              "#FFBC02",
              "#876AFE",
            ]}
            empty={["", "", "", "", "", "", "", "", "", "", ""]}
          />
        </div>
        <div>
          {data2.map((item) => (
            <div className="flex justify-between items-center">
              <p className="text-[#A8A8A8] pb-2" key={item.id}>
                {item.title}
              </p>
              <ArrowDown2 size={14} className="cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
      <div className="grow bg-white p-[30px] rounded-[15px] dark:bg-[#161C27]">
        <div className="flex justify-between gap-[20px] bd pb-[10px] dark:border-b-[#252D3D]">
          <div className="flex gap-[5px] items-center ">
            <Database />
            <p className="text-[22px] text-[#121212] font-medium font-roboto dark:text-white">
              Total Point
            </p>
          </div>
          <p className="text-[#876AFE] text-[16px]">View All</p>
        </div>
        <table className="table dark:bg-[#161C27]">
          <thead>
            <tr className="dark:bg-[#232A37]">
              <th className="th font-roboto">Actual</th>
              <th className="th font-roboto">actual</th>
              <th className="th font-roboto">Forecast</th>
              <th className="th font-roboto">Variance</th>
              <th className="th font-roboto">Variance</th>
              <th className="th font-roboto">Variance</th>
              <th className="th font-roboto">Variance</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="tr">
                <td className="td font-roboto">{row.Actual}</td>
                <td className="td font-roboto">{row.actual}</td>
                <td className="td font-roboto">{row.actual}</td>
                <td className="td font-roboto">{row.actual}</td>
                <td className="td font-roboto">{row.actual}</td>
                <td className="td font-roboto">{row.actual}</td>
                <td className="td font-roboto">{row.actual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
