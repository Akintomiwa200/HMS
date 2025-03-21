import { RefreshCcw } from "lucide-react";
import Logo from "../assets/favicon.ico"
import UserAvatar from "../assets/user-avatar.jpg";




const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Glory Wellness Logo" className="h-10" />
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-2">
        <img src={UserAvatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
        <span className="text-gray-700 font-medium">Grace Mark</span>
        <RefreshCcw size={18} className="text-gray-500 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
