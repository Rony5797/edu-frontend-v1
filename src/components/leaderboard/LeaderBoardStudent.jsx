/* eslint-disable react/prop-types */

function LeaderBoardStudent({ img, name, mark, rank }) {
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] bg-[#ffffff] px-5 mt-2 pt-3 rounded-lg">
          <div className="flex justify-between items-center pb-1">
            <p className="font-[700] text-[16px] sm:text-[26px] w-[8%]  text-center">
              {rank}
            </p>
            <span className="w-[10%] text-[40px] sm:text-[50px] text-[#f5504f]">
              <img
                className="w-[35px] sm:w-[50px] rounded-[50%]"
                src={img}
                alt="#"
              />
            </span>
            <p className="font-[700] text-[16px] sm:text-[20px] w-[45%] ">
              {name}
            </p>
            <p className="font-[700] text-[16px] sm:text-[20px] w-[20%] text-center">
              {mark}%
            </p>
          </div>
          {/* <div className="flex justify-end">
        <p className="py-1 text-xs sm:text-base">
          ১৭ই সেপ্টেম্বর ২০২৪
        </p>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoardStudent;
