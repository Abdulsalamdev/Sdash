import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
// import {} from "apexcharts";
import ApexCharts from "react-apexcharts";

export const Spline = () => {
  const [series] = useState([
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ]);
  const [option] = useState({
    chart: {
      height: 350,
      type: "area" as const,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth" as const,
    },
    xaxis: {
      type: "datetime" as const,
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  });

  return (
    <div>
      <div className="flex justify-between gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[7px]">
            <span className="text-[16px] text-[#444444] font-roboto ">
              Salary
            </span>
            <div className="w-[18px] h-[18px] bg-[#876AFE] rounded-[5px]"></div>
          </div>
          <div className="flex items-center gap-[7px]">
            <span className="text-[16px] text-[#444444] font-roboto ">
              Cash bound
            </span>
            <div className="w-[18px] h-[18px] bg-[#FFBC02] rounded-[5px]"></div>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[13px] font-bold text-whitesmoke">from</span>
          <span className="text-[16px] font-medium text-[#121212]">
            20 June
          </span>
          <ArrowDown2 size="18" color="#121212" />
          <span className="text-[13px] font-bold text-whitesmoke">to</span>
          <span className="text-[16px] font-medium text-[#121212]">
            30 June
          </span>
          <ArrowDown2 size="18" color="#121212" />
        </div>
      </div>
      <div id="chart">
        <ApexCharts options={option} series={series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
