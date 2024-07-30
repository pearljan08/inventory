import React, { useState } from 'react';
import SideNav from './components/SideNav'
import SummaryCards from './components/SummaryCards';
import { BsBagCheck, BsPeople, BsTags, BsTruck } from "react-icons/bs";
import DataGrid from './components/DataGrid';

const App = () => {
  return (
    <>
      <SideNav />
      <div className="pl-80 mt-2 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pr-10">
            <SummaryCards
              icon={<BsBagCheck />}
              textColor="text-teal-600"
              title="23"
              description="Total Products"
            />
            <SummaryCards
              icon={<BsTags />}
              textColor="text-sky-600"
              title="44"
              description="Total Categories"
            />
            <SummaryCards
              icon={<BsTruck />}
              textColor="text-purple-600"
              title="12"
              description="Total Suppliers"
            />
            <SummaryCards
              icon={<BsPeople />}
              textColor="text-indigo-600"
              title="35"
              description="Total Customers"
            />
        </div>
        <div className="grid justify-items-start pt-12 pr-10">
          <DataGrid />
        </div>
      </div>
    </>
  );
};
export default App;