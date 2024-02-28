import React from "react";
import { SideBar, NavBar, Statistics, Overview } from "../layout";
import { Table } from "../layout/table";

export const Dashboard = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="bg-[#f5f5f5] px-[20px] py-[15px] grow">
        <NavBar />
        <div className="flex gap-[20px] pt-[30px]">
          <div className="grow">
            <Statistics />
          </div>
          <div className="grow">
            <Overview />
          </div>
        </div>
        <div>{/* <Table /> */}</div>
      </div>
    </div>
  );
};
