import { useLocation, Link } from "react-router-dom";
import {
  Home,
  Box,
  Plus,
  BarChart,
  Settings,
  LogOut,
  Search,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 bg-white text-teal-600 h-screen p-4 border-r shadow-sm flex flex-col">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-3 py-1.5 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-teal-400"
        />
      </div>

      {/* Navigation Links */}
      <nav className="mt-6 flex-1">
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                isActive("/dashboard") ? "bg-teal-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              <Home size={18} /> Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/inventory"
              className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                isActive("/dashboard/inventory") ? "bg-teal-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <Box size={18} /> Inventory
              </div>
              <ChevronDown size={16} />
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/add-item"
              className={`flex items-center justify-between p-2 rounded-md cursor-pointer ${
                isActive("/dashboard/add-item") ? "bg-teal-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <Plus size={18} /> Add Item
              </div>
              <ChevronDown size={16} />
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/report"
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                isActive("/dashboard/report") ? "bg-teal-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              <BarChart size={18} /> Report
            </Link>
          </li>
        </ul>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4 flex items-center">
          <span className="w-3 h-3 bg-teal-500 rounded-full ml-auto mr-1"></span>
        </div>

        {/* Settings & Logout */}
        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard/settings"
              className={`flex items-center gap-2 p-2 rounded-md cursor-pointer ${
                isActive("/dashboard/settings") ? "bg-teal-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              <Settings size={18} /> Settings
            </Link>
          </li>

          <li>
            <button className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100 w-full text-left">
              <LogOut size={18} /> Log Out
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
