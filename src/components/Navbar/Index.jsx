import { Fragment } from "react";
import { CiSearch } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ toggoleSidebarMenu }) => {
  return (
    <Fragment>
      <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          {/* Mobile hamburger -*/}
          <button
            onClick={toggoleSidebarMenu}
            className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu"
          >
            <RxHamburgerMenu size={18} />
          </button>
          {/* Search input */}
          <div className="flex justify-center flex-1 lg:mr-32">
            <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
              <div className="absolute inset-y-0 flex items-center pl-2">
                <CiSearch size={18} />
              </div>
              <input
                className="w-full pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:placeholder-gray-500 focus:bg-white focus:border-purple-300 focus:outline-none focus:shadow-outline-purple form-input"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            {/* Notificationsmenu  */}
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <IoMdNotifications size={18} />
                {/* Notification adge  */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                ></span>
              </button>
              <template x-if="isNotificationsMenuOpen">
                <ul className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700">
                  <li className="flex">
                    <a
                      className="inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      href="#"
                    >
                      <span>Messages</span>
                      <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                        13
                      </span>
                    </a>
                  </li>
                </ul>
              </template>
            </li>
            {/* Profile menu */}
            <li className="relative">
              <button
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                aria-label="Account"
                aria-haspopup="true"
              >
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <template x-if="isProfileMenuOpen">
                <ul>
                  <li className="flex">
                    <a
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                      href="#"
                    >
                      <GoSignOut size={18} />
                      <span>Log out</span>
                    </a>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
