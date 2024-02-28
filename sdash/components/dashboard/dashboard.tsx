import React from "react";
import { SideBar, NavBar, Statistics, Overview } from "../layout";
import { TableData } from "../layout/tableData";

export const Dashboard = () => {
  return (
    <div className="flex h-[100vh] ">
      <SideBar />
      <div className="bg-[#f5f5f5] px-[20px] py-[15px] grow h-[100vh] overflow-y-scroll dark:bg-[#161C27]">
        <NavBar />
        <div className="flex gap-[20px] pt-[30px]  flex-wrap">
          <div className="grow">
            <Statistics />
          </div>
          <div className="grow">
            <Overview />
          </div>
        </div>
        <div>
          <TableData />
        </div>
      </div>
    </div>
  );
};
