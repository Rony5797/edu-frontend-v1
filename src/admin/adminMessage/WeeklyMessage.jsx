/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getMessage } from "../../APIRequest/APIRequest";
import { Pencil } from "lucide-react";

/* eslint-disable no-unused-vars */
function WeeklyMessage({ load, idPass, titlePass }) {
  const [data, setData] = useState("");

  useEffect(() => {
    getMessage()
      .then((res) => setData(res.data[0]))
      .catch((err) => {
        console.log(err.message);
      });
  }, [load]);

  return (
    <div className="w-[100%] h-[auto] my-8 flex justify-center">
      <div
        className="w-[90%] bg-[#1da09134] rounded-xl border-2 border-dotted border-[#1da09153]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
      >
        <div className="flex justify-center">
          <h1 className="mt-3 font-bold text-[26px] text-[#079815]">
            মাসিক আলোচনা !
          </h1>
        </div>
        <div className="text-center px-3">
          <p className="text-[18px] font-[700] mt-2 pb-5">{data.title}</p>
          <button
            onClick={() => {
              idPass(data._id);
              titlePass(data.title);
            }}
            className="w-[200px] mx-auto flex items-center justify-center gap-2 mb-2 bg-purple-600 text-white font-semibold p-3 rounded-md hover:bg-purple-700 transition duration-300 relative"
          >
            <Pencil />
            আপডেট করুন
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeeklyMessage;
