import { useState } from "react";
import Layout from "../Layout";
import { Mail, UsersRound, GraduationCap, School } from "lucide-react";
import BarCharts from "./BarCharts";

const HomeAdmin = () => {
  const [activeTab, setActiveTab] = useState("daily");
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "মোট ছাএ",
              amount: "৪৫ জন",
              icon: GraduationCap,
              color: "bg-red-500",
            },
            {
              title: "মোট পরীক্ষা",
              amount: "৪ টি",
              icon: School,
              color: "bg-blue-500",
            },
            {
              title: "মোট শিক্ষক",
              amount: "৫ জন",
              icon: UsersRound,
              color: "bg-green-500",
            },
            {
              title: "মোট বার্তা",
              amount: "৭৪ টি",
              icon: Mail,
              color: "bg-pink-500",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon
                      className={`h-10 w-10 text-white ${item.color} p-2 rounded-full`}
                    />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <div>
                      <div className="text-[16px] font-medium text-gray-500 truncate">
                        {item.title}
                      </div>
                      <div className="text-[20px] font-bold text-gray-900">
                        {item.amount}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Content */}
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                বার্ষিক আয়
              </h3>
              {/* সামগ্রিক অবস্থা */}
            </div>
            <div className="mt-4">
              <h4 className="text-3xl font-bold text-gray-900">৳ ১,২৩০৪৭</h4>
              <p className="text-sm text-gray-500"></p>
            </div>
            {/* Placeholder for chart */}
            <div className="mt-4 bg-gray-100 rounded-lg">
              <BarCharts />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomeAdmin;
