import React from "react";
import { ImBullhorn } from "react-icons/im";
function LeaderBoard() {
  let data = {
    name: ["Imran", "Sakib", "Mahadi", "Saim", "Abu bakar", "Alif"],
    department: [
      "najera",
      "najera",
      "Najera",
      "Hefz",
      "Hefz",
      "Hefz",
      "Ketab",
      "Ketab",
      "Ketab",
    ],
    img: [
      "https://cdn.ostad.app/user/avatar/2023-03-14T01-58-32.404Z-absamad.jpg",
      "https://cdn.ostad.app/user/avatar/2023-02-15T10-43-27.490Z-IMG_20230215_164231_031.jpg",
      "https://cdn.ostad.app/user/avatar/2023-03-31T22-44-55.504Z-ostad_pp2.jpg",
      "https://cdn.ostad.app/user/avatar/2023-02-27T04-36-50.005Z-132903%20hosne%20passport%20pic.JPG",
      "https://cdn.ostad.app/user/avatar/2023-02-19T14-15-06.058Z-IMG_20220327_215446.jpg",
      "https://cdn.ostad.app/user/avatar/2023-02-27T13-39-19.910Z-Nirapadak-pal-Profile-Photo.jpg",
    ],
    mark: ["95.6%", "66.5%", "52.4%", "49.2%", "45.7%", "43.2%"],
    rank: ["1", "2", "3", "1", "2", "3", "1", "2", "3"],
  };

  return (
    <div className="w-full flex justify-center mt-20 pb-8">
      <div className="w-[90%] flex flex-col lg:flex-row justify-between">
        {/* Notice section start */}
        <div className="w-full lg:w-[50%] bg-[#f8f8f8] rounded-2xl overflow-y-scroll lg:overflow-visible pb-4">
          {/* Notice header */}
          <div className="flex justify-center">
            <div className="flex mt-5 items-center">
              <span className="text-[red] text-[28px]"></span>
              <h1 className="font-bold text-[24px] sm:text-[30px] ml-3">
                <u>সর্বোচ্চ মেধাতালিকা</u>
              </h1>
            </div>
          </div>
          {/* Notice items */}
          {data.name.map((item, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="w-[90%] bg-[#ffffff] px-5 mt-3 pt-3 rounded-xl">
                <div className="flex justify-between items-center">
                  <p className="font-[700] text-[16px] sm:text-[20px] w-[30%] sm:w-[15%] text-center">
                    {data.rank[index]}
                  </p>
                  <span className="w-[20%] text-[40px] sm:text-[50px] text-[#f5504f]">
                    <img
                      className="w-[50px] rounded-[50%]"
                      src={data.img[index]}
                      alt={item}
                    />
                  </span>
                  <p className="font-[700] text-[16px] sm:text-[20px] w-[25%] sm:w-[68%]">
                    {item}
                  </p>
                  <p className="font-[700] text-[16px] sm:text-[20px] w-[20%] sm:w-[15%] text-center">
                    {data.mark[index]}
                  </p>
                  <p className="font-[700] text-[16px] sm:text-[20px] w-[25%] sm:w-[15%] text-center">
                    {data.department[index]}
                  </p>
                </div>
                {/* <div className="flex justify-end">
                  <p className="py-1 text-xs sm:text-base">
                    ১৭ই সেপ্টেম্বর ২০২৪
                  </p>
                </div> */}
              </div>
            </div>
          ))}
          {/* Notice items end */}
        </div>
        {/* Notice section end */}
        {/* Madrasha info section start */}
        <div className="w-full text-center lg:w-[45%] mb-8 lg:mb-0 lg:mr-4 border-[2px] border-dotted border-black rounded-2xl p-6">
          {/* Notice header */}
          <div className="flex justify-center pb-3">
            <div className="flex mt-3 items-center">
              <span className="text-[red] text-[28px]">
                <ImBullhorn />
              </span>
              <h1 className="font-bold text-[24px] sm:text-[30px] ml-3">
                জরুরি বিঙ্গপ্তি
              </h1>
            </div>
          </div>
          <img
            className="w-full rounded-md"
            src="https://school360.xyz/200470/200470_media/notice/Notice_1678180939_2023-03-07.jpeg"
            alt="#"
          />
        </div>
        {/* Madrasha info section end */}
      </div>
    </div>
  );
}

export default LeaderBoard;
