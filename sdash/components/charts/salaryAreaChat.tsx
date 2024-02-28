import { ArrowDown2 } from "iconsax-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import Chart from "react-apexcharts";

export const SalaryAreaChat = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
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
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth" as const,
      colors: ["#876AFE", "#FFBC02"],
      width: 2,
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#eceaf5", "transparent"],
        shadeIntensity: 0,
        type: "horizontal",
        stops: [0, 100, 100, 100],
      },
    },
    tooltip: {
      theme: "transparent",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    responsive: [
      {
        breakpoint: 1440,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
  });

  return (
    <div>
      <div className="flex justify-between gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center gap-[7px]">
            <span className="text-[16px] text-[#444444] font-roboto  dark:text-[#C1C2C6]">
              Salary
            </span>
            <div className="w-[18px] h-[18px] bg-[#876AFE] rounded-[5px]"></div>
          </div>
          <div className="flex items-center gap-[7px]">
            <span className="text-[16px] text-[#444444] font-roboto  dark:text-[#C1C2C6]">
              Cash bound
            </span>
            <div className="w-[18px] h-[18px] bg-[#FFBC02] rounded-[5px]"></div>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="text-[15px] font-bold text-whitesmoke">from</span>
          <span className="text-[16px] font-medium text-[#121212] dark:text-[#C1C2C6]">
            20 June
          </span>
          <ArrowDown2
            size="18"
            color={theme === "light" ? "#121212" : "#ffffff"}
          />
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
      <div className="aspect-ratio-box pt-[10px]">
        <Chart
          options={option}
          series={series}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
