import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";

const Navbar = ({toggleSidebar }) => {

  return (
    <>
      <header className="h-16 sticky top-0 px-4 justify-between flex w-full bg-primary-200 border-b-[1px] border-gray-200 z-[5000]">
        <div className="flex items-center">
          {/* Mobile menu button - shown only below md breakpoint */}
          <button
            className="lg:hidden p-2 mr-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Welcome message - hidden on mobile */}
          <p className='flex text-xl font-semibold justify-start items-center text-primary'>👋🏻 Welcome back!</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;