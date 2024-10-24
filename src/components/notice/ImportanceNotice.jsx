import Navbar from "../reuseable/Navbar";
import Footer from "../reuseable/Footer";
import { useEffect, useState } from "react";
import { getImpNotice } from "../../APIRequest/APIRequest";

function ImportanceNotice() {
  const [data, setData] = useState({});

  useEffect(() => {
    getImpNotice()
      .then((res) => setData(res[0]))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
        <img
          src={data?.imagePath}
          alt="Main Notice"
          className="w-full h-auto rounded-lg mb-4"
        />
        {/* <p className="text-gray-600 mt-2 italic">তারিখ: {notice.date}</p>   */}
      </div>
      <Footer />
    </>
  );
}

export default ImportanceNotice;
