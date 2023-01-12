import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex-shrink-0 hidden h-full w-[90px] bg-white border-r  md:block fixed">
      <div className="flex flex-col h-screen">
        <nav
          aria-label="Main"
          className="flex-1 px-1 py-8 overflow-y-hidden hover:overflow-y-auto"
        >
          <ul>
            <li>
              <span
                aria-hidden="true"
                className="flex justify-center flex-col text-center items-center"
              >
                <img src="Overview.png" alt="" />
              </span>
            </li>
            <li>
              <span
                aria-hidden="true"
                className="flex justify-center flex-col text-center text-orange-700 items-center mt-4"
              >
                <img src="icon-trade.png" alt="" />
                <h3 className="text-xs font-bold">Market</h3>
              </span>
            </li>
            <li>
              <span
                aria-hidden="true"
                className="flex justify-center flex-col text-center items-center mt-4"
              >
                <img src="portfolio.png" alt="" />
              </span>
            </li>
            <li>
              <span
                aria-hidden="true"
                className="flex justify-center flex-col text-center items-center mt-4"
              >
                <img src="Community.png" alt="" />
              </span>
            </li>
            <li>
              <span
                aria-hidden="true"
                className="flex justify-center flex-col text-center items-center mt-4"
              >
                <img src="Reports.png" alt="" />
                <h3 className="text-xs">Report</h3>
              </span>
            </li>

            <li>
              <span
                aria-hidden="true"
                className="flex justify-center flex-col text-center items-center mt-4"
              >
                <img src="settings.png" alt="" />
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
