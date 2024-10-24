/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Bell,
  Settings,
  Home,
  ClipboardPenLine,
  CircleAlert,
  GraduationCap,
  ClipboardList,
  GalleryHorizontal,
  Send,
  Mails,
  UserPlus,
  ClipboardPlus,
} from "lucide-react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex w-full h-screen bg-gray-100 ">
        {/* Sidebar */}
        <aside className="w-72  bg-black  text-white">
          <Link to="/admin/dashboard" className="p-4">
            <h1 className="text-2xl font-bold">Lector.</h1>
          </Link>
          <nav className="mt-8">
            {[
              { name: "হোম", icon: Home, link: "dashboard" },
              {
                name: "সকল নোটিশ",
                icon: ClipboardPenLine,
                link: "admin-allnotice",
              },
              {
                name: "জরুরি বিঙ্গপ্তি",
                icon: CircleAlert,
                link: "admin-important-notice",
              },
              {
                name: "শিক্ষার্থী তালিকা",
                icon: GraduationCap,
                link: "admin-student-list",
              },
              {
                name: "শিক্ষার্থী যোগ করুন",
                icon: UserPlus,
                link: "admin-students",
              },
              {
                name: "ফলাফল এর  তালিকা",
                icon: ClipboardList,
                link: "admin-results-list",
              },
              {
                name: "ফলাফল যোগ করুন",
                icon: ClipboardPlus,
                link: "admin-results",
              },

              {
                name: "স্লাইডার",
                icon: GalleryHorizontal,
                link: "admin-slider",
              },
              { name: "ম্যাসেজ", icon: Send, link: "admin-messages" },
              { name: "ইনবক্স", icon: Mails, link: "admin-inbox" },
            ].map((item) => (
              <Link
                key={item.name}
                to={`/admin/${item.link.toLowerCase()}`}
                className="flex items-center px-4 py-2 text-[19px]  hover:bg-gray-700"
              >
                <item.icon className="mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-full">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate">
                ড্যাশবোর্ড
              </h2>
              <div className="flex items-center">
                <button className="py-2 px-1 rounded-full hover:bg-gray-100 flex relative">
                  <Bell className="h-6 w-6 text-gray-500" />
                  <span className="absolute top-0 right-0 font-bold text-red-600"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 ml-2">
                  <Settings className="h-6 w-6 text-gray-500" />
                </button>
              </div>
            </div>
          </header>

          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
