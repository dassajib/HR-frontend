import { Fragment } from "react";
import { IoHomeOutline, IoInformationCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { sidebarData } from "../../constants/SidebarData";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <Fragment>
      {/* desktop sidebar */}
      <div className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            to="/dashboard"
          >
            HR
          </Link>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                to="/dashboard"
              >
                <IoHomeOutline size={18} />
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
          </ul>
          <ul>
            {sidebarData.map((sidebarItem) => (
              <li key={sidebarItem.name} className="relative px-6 py-3">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  to={sidebarItem.path}
                >
                  {sidebarItem.icon}
                  <span className="ml-4">{sidebarItem.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-6 my-6">
            <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Create Employee
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* mobile sidebar */}
      <div
        className={`fixed inset-0 z-10 flex items-end bg-opacity-50 sm:items-center sm:justify-center ${
          sidebarOpen ? "bg-black" : ""
        }`}
      ></div>
      <div
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <Link
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
            to="/dashboard"
          >
            HR
          </Link>
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <a
                className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                href="index.html"
              >
                <IoHomeOutline size={18} />
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
          </ul>
          <ul>
            <li className="relative px-6 py-3">
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                to=""
              >
                <IoInformationCircle size={18} />
                <span className="ml-4">Information</span>
              </Link>
            </li>
          </ul>
          <div className="px-6 my-6">
            <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Create account
              <span className="ml-2" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
