import { useEffect, useState } from "react";
import Navbar from "../reuseable/Navbar";
import Footer from "../reuseable/Footer";
import { allGetNotice } from "../../APIRequest/APIRequest";

function AllNotice() {
  const [data, setData] = useState([]);

  useEffect(() => {
    allGetNotice()
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      {/* Notice section start */}
      <div className="max-w-4xl mx-auto my-10 p-8 bg-gradient-to-r from-blue-200 to-[#00b89342] rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          নোটিশ বোর্ড
        </h2>
        {data.map((notice, index) => (
          <div
            key={index}
            className="mb-6 p-6 border-l-8 border-pink-500 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold text-purple-600">
              {notice.title}
            </h3>
            <p className="text-lg text-gray-700 mt-1">{notice.description}</p>
            <p className="text-gray-600 mt-2 italic">তারিখ: {notice.date}</p>
            <p className="text-md text-gray-800 mt-3">{notice.details}</p>
          </div>
        ))}
      </div>
      {/* Notice section end */}
      <Footer />
    </>
  );
}

export default AllNotice;
