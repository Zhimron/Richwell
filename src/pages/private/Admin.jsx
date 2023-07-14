import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Wrapper } from './components/Wrapper';
import { Search } from './components/Search';

const Admin = () => {
  return (
    <>
      <div className="flex w-full  bg-gray-200 ">
        <Sidebar />
        <div className="flex-grow ">
          <Search />
        </div>
        <Wrapper />
      </div>
    </>
  );
};

export default Admin;
