/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getMessage } from "../../APIRequest/APIRequest";

/* eslint-disable no-unused-vars */
function WeeklyMessageTwo() {
  const [data, setData] = useState("");

  useEffect(() => {
    getMessage()
      .then((res) => setData(res.data[1]))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="w-[100%] h-[auto] my-8 flex justify-center">
      <div
        className="w-[90%] bg-[#1da09134] rounded-xl border-2 border-dotted border-[#1da09153]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
      >
        <div className="flex justify-center">
          <h1 className="mt-3 font-bold text-[26px] text-[#079815]">
            ভর্তি সংক্রান্ত তথ্য!
          </h1>
        </div>
        <div className="text-center px-3">
          <p className="text-[18px] font-[700] mt-2 pb-5">{data.title}</p>
        </div>
      </div>
    </div>
  );
}

export default WeeklyMessageTwo;
