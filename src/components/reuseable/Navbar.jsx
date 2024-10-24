import { useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../../helper/sessionHelper";
import { jwtDecode } from "jwt-decode";
function Navbar() {
  const token = getToken();

  let decoded;
  if (token) {
    decoded = jwtDecode(token).role;
  }

  // State for mobile menu and dropdown visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
  });

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown menus on click
  const toggleDropdown = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  // Close dropdown on mouse out
  const closeDropdown = (dropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName]: false,
    }));
  };

  return (
    <nav className="bg-[#f9f9fa] text-[#0c0b0b] font-semibold text-[18px]">
      <div className="container mx-auto px-4 flex items-center justify-between py-2 xl:py-4">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4">
          <a to="#" className="text-2xl font-bold">
            <img src="img/logo/logo1.png" alt="" />
          </a>
        </div>

        {/* Middle Section: Navigation Items */}
        <div className="hidden lg:flex space-x-8 items-center">
          <Link
            to="/"
            className="bg-[#0a8761] px-4 py-2 rounded-3xl text-[white] hover:text-[#ffffff] hover:bg-[#0a8761de]"
          >
            মূলপাতা
          </Link>
          {/* Dropdown Menu 1 */}
          <div
            className="relative"
            onMouseLeave={() => closeDropdown("dropdown1")}
          >
            <button
              onClick={() => toggleDropdown("dropdown1")}
              className="hover:text-[#464646] focus:outline-none flex items-center"
            >
              নোটিশ দেখুন
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${
                  isDropdownOpen.dropdown1 ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Dropdown Menu Items */}
            <div
              className={`absolute left-0 w-[200%] bg-[white] text-black py-2 rounded shadow-lg z-50 ${
                isDropdownOpen.dropdown1 ? "block" : "hidden"
              }`}
            >
              <Link
                to="/allnotice"
                className="block px-4 py-2 hover:bg-[#e5e3e3]"
              >
                সকল নোটিশ
              </Link>
              <Link
                to="/important-notice"
                className="block px-4 py-2 hover:bg-[#e5e3e3]"
              >
                জরুরি বিঙ্গপ্তি
              </Link>
            </div>
          </div>
          {/* Dropdown Menu 2 */}
          <div
            className="relative"
            onMouseLeave={() => closeDropdown("dropdown2")}
          >
            <button
              onClick={() => toggleDropdown("dropdown2")}
              className="hover:text-[#464646] focus:outline-none flex items-center"
            >
              শিক্ষার্থী
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${
                  isDropdownOpen.dropdown2 ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Dropdown Menu Items */}
            <div
              className={`absolute left-0 w-[200%] bg-[white] text-black py-2 rounded shadow-lg z-50 ${
                isDropdownOpen.dropdown2 ? "block" : "hidden"
              }`}
            >
              <Link
                to="/allstudent"
                className="block px-4 py-2 hover:bg-[#e5e3e3]"
              >
                সকল শিক্ষার্থী
              </Link>
              {/* <Link to="#" className="block px-4 py-2 hover:bg-[#e5e3e3]">
                হেফজ বিভাগ
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-[#e5e3e3]">
                নাজেরা বিভাগ
              </Link>
              <Link to="#" className="block px-4 py-2 hover:bg-[#e5e3e3]">
                কিতাব খানা
              </Link> */}
            </div>
          </div>
          {/* Dropdown Menu 3 */}
          <div
            className="relative"
            onMouseLeave={() => closeDropdown("dropdown3")}
          >
            <button
              onClick={() => toggleDropdown("dropdown3")}
              className="hover:text-[#464646] focus:outline-none flex items-center"
            >
              পরীক্ষার ফলাফল
              <svg
                className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${
                  isDropdownOpen.dropdown3 ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* Dropdown Menu Items */}
            <div
              className={`absolute left-0 w-[200%] bg-[white] text-black py-2 rounded shadow-lg z-50 ${
                isDropdownOpen.dropdown3 ? "block" : "hidden"
              }`}
            >
              {/* <a to="/Allresult" className="block px-4 py-2 hover:bg-[#e5e3e3]">
                সকল ফলাফল
              </a> */}
              <Link
                to="/Hefzresult"
                className="block px-4 py-2 hover:bg-[#e5e3e3]"
              >
                হেফজ বিভাগ
              </Link>
              <Link
                to="/najeraresult"
                className="block px-4 py-2 hover:bg-[#e5e3e3]"
              >
                নাজেরা বিভাগ
              </Link>
              <Link
                to="/kitabkhana"
                className="block px-4 py-2 hover:bg-[#e5e3e3]"
              >
                কিতাব খানা
              </Link>
            </div>
          </div>
          <Link to="/Gallery" className="hover:text-[#464646]">
            ছবির গ্যালারী
          </Link>
          <Link to="/contact" className="hover:text-[#464646]">
            যোগাযোগ
          </Link>
        </div>

        {/* Right Section: Login Button */}
        <div className="hidden lg:block">
          <Link
            to={decoded === "admin" ? "/admin/dashboard" : "/login"}
            className="bg-[#0a8761] hover:bg-[#478874de] text-white font-bold py-2 px-4 rounded"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            {decoded === "admin" ? "Admin" : "Login"}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Link to="/" className="block px-4 py-2 text-sm hover:bg-[#cecccc]">
          মূলপাতা
        </Link>
        {/* Dropdown Menu 1 in Mobile */}
        <div className="block">
          <button
            onClick={() => toggleDropdown("dropdown1")}
            className="w-full text-left px-4 py-2 text-sm hover:bg-[#cecccc] focus:outline-none flex items-center"
          >
            নোটিশ দেখুন
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isDropdownOpen.dropdown1 ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`bg-[#e9e9e9] ${
              isDropdownOpen.dropdown1 ? "block" : "hidden"
            }`}
          >
            <ul className="pl-4 p-1">
              <Link
                to="#"
                className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
              >
                শিক্ষার্থীদের নোটিশ
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
              >
                অভিভাবকদের নোটিশ
              </Link>
              <Link
                to="#"
                className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
              >
                সদস্যদের নোটিশ
              </Link>
            </ul>
          </div>
        </div>
        {/* Repeat for Dropdown 2 and Dropdown 3 */}
        {/* Dropdown Menu 2 in Mobile */}
        <div className="block">
          <button
            onClick={() => toggleDropdown("dropdown2")}
            className="w-full text-left px-4 py-2 text-sm hover:bg-[#cecccc] focus:outline-none flex items-center"
          >
            শিক্ষার্থী
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isDropdownOpen.dropdown2 ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`bg-[#e9e9e9] ${
              isDropdownOpen.dropdown2 ? "block" : "hidden"
            }`}
          >
            <Link
              to="/Resultpage"
              className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
            >
              সকল শিক্ষার্থী
            </Link>
            {/* <Link
              to="/Resultpage"
              className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
            >
              নাজেরা বিভাগ
            </Link>
            <Link
              to="/Resultpage"
              className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
            >
              কিতাব খানা
            </Link> */}
          </div>
        </div>
        {/* Dropdown Menu 3 in Mobile */}
        <div className="block">
          <button
            onClick={() => toggleDropdown("dropdown3")}
            className="w-full text-left px-4 py-2 text-sm hover:bg-[#cecccc] focus:outline-none flex items-center"
          >
            পরীক্ষার ফলাফল
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isDropdownOpen.dropdown3 ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            className={`bg-[#e9e9e9] ${
              isDropdownOpen.dropdown3 ? "block" : "hidden"
            }`}
          >
            <Link
              to="/Hefzresult"
              className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
            >
              হেফজ বিভাগ
            </Link>
            <Link
              to="/najeraresult"
              className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
            >
              নাজেরা বিভাগ
            </Link>
            <Link
              to="/kitabkhana"
              className="block px-4 py-2 text-sm hover:bg-[#cecccc]"
            >
              কিতাব খানা
            </Link>
          </div>
        </div>
        {/* c */}

        <Link to="#" className="block px-4 py-2 text-sm hover:bg-[#e5e3e3]">
          ছবির গ্যালারী
        </Link>
        <Link
          to="/contact"
          className="block px-4 py-2 text-sm hover:bg-[#e5e3e3]"
        >
          যোগাযোগ
        </Link>
        <Link to="#" className="block px-4 py-2 text-sm hover:bg-[#e5e3e3]">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
