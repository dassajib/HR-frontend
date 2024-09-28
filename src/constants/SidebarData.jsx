import { FaNetworkWired } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";

export const sidebarData = [
  {
    name: "Information",
    path: "/dashboard/information",
    icon: <IoInformationCircle size={18} />,
  },
  {
    name: "Attendance",
    path: "/dashboard/attendance",
    icon: <FaNetworkWired size={18} />,
  },
];
