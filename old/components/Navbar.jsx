import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // const [nav, setNav] = useState(false)
  // const handleNav = () => {
  //     setNav(!nav)
  // }

  return (
    <div className="w-full h-[70px] bg-white border-b shadow">
      <div className="max-w-[1500px] mx-auto px-2 flex justify-between items-center h-full">
        <div>
      
          <img src="image 1.png" alt="" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-gray-900 items-center ">
            <div className="py-1 px-2 bg-gray-100 rounded-full flex gap-2 items-center">
              <span className="text-[7px] font-extrabold uppercase">light</span>
              <span className="p-2 bg-white rounded-full">
                {/* <svg
                  x-show="isDark"
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg> */}
                <img src="sun.png" alt="" />
              </span>
            </div>
            <div className="ml-6 w-px bg-gray-300 h-[4rem]"></div>
               
            <span className="ml-3">  <img src="chevron.png" alt="" /> </span>
            {/* <li className="flex flex-col items-center px-6 justify-center">
              <span className="text-gray-400 text-xs uppercase font-bold">
                cash balance
              </span>
              <span className="text-gray-900 text-xl uppercase font-extrabold">
              &#8358;8,374,763
              </span>
            </li> */}
            <li className="flex flex-col items-center px-6 justify-center">
              <span className="text-gray-400 text-xs uppercase font-bold">
                cash balance
              </span>
              <span className="text-gray-900 text-xl uppercase font-extrabold">
              &#8358;8,374,763
              </span>
            </li>
            <li className="flex flex-col items-center px-6 justify-center">
              <span className="text-gray-400 text-xs uppercase font-bold">
                securities value
              </span>
              <span className="text-gray-900 text-xl uppercase font-extrabold">
              &#8358;8,374,763
              </span>
            </li>
            <li className="flex flex-col items-center px-6 justify-center">
              <span className="text-gray-400 text-xs uppercase font-bold">
                loan balance
              </span>
              <span className="text-gray-900 text-xl uppercase font-extrabold">
              &#8358;8,374,763
              </span>
            </li>

            <div className="ml-4 w-px bg-gray-300 h-[4rem]"></div>
            <div className="ml-24 p-2 px-4 bg-black uppercase text-sm font-bold text-white">Demo</div>
            <span className="ml-1">  <img src="chevrondown.png" alt="" /> </span>
          </ul>
        </div>
        {/* Hamburger menu */}
        {/* <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
        </div>
        <div className={nav ? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center' : 
    'absolute left-[-100%]'}>
          <ul>
            <li className='text-2xl'>Platform</li>
            <li className='text-2xl'>Developers</li>
            <li className='text-2xl'>Community</li>
            <li className='text-2xl'>About</li>
            <button className='m-8'>Use Defi</button>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
