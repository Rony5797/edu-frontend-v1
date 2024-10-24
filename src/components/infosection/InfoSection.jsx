import { useEffect, useState } from "react";
import { ImBullhorn } from "react-icons/im";
import { RiErrorWarningFill } from "react-icons/ri";
import { allGetNotice } from "../../APIRequest/APIRequest";
import { formatDate } from "../../helper/timeFormater";
import { Link } from "react-router-dom";

function InfoSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    allGetNotice()
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="w-full flex justify-center mt-20 pb-8">
      <div className="w-[90%] flex flex-col lg:flex-row justify-between">
        {/* Madrasha info section start */}
        <div className="w-full lg:w-[45%] mb-8 lg:mb-0 lg:mr-4">
          <img
            className="w-full rounded-md"
            src="https://darululoomhathazari.com/media/img/slider/7efacc318422f9c09506d0f2e3d1aea2.jpg"
            alt="#"
          />
          <h1 className="text-[24px] sm:text-[28px] font-bold mt-4">
            দারুল উলূম আমবাগ সংক্ষিপ্ত পরিচিতি
          </h1>
          <p className="mt-3 text-[16px] sm:text-base">
            আল-জামিয়াতুল আহ্‌লিয়া দারুল উলূম মুঈনুল ইসলাম-হাটহাজারী (হাটহাজারী
            মাদ্‌রাসা) উপ-মহাদেশের অন্যতম বৃহৎ ও সুবিখ্যাত একটি ইসলামী শিক্ষা
            প্রতিষ্ঠান। প্রতিষ্ঠানটি বাংলাদেশের চট্টগ্রাম জেলার হাটহাজারী
            উপজেলার প্রাণকেন্দ্রে অবস্থিত। জামিয়ার আয়তন ৪.৪৩ একর বা ১৭,৯২৭ বর্গ
            মিটার। জামিয়ায় বর্তমানে ১১০ জন দেশবরেণ্য সুদক্ষ শিক্ষক এবং
            কর্মকর্তার তত্ত্বাবধানে প্রায় ৮ সহস্রাধিক ছাত্র অধ্যায়নের সুযোগ লাভ
            করে আসছে। শুধুমাত্র দাওরায়ে হাদীস (টাইটেল) ক্লাসে ২৭১৪ জন ছাত্র
            অধ্যায়ন করছে। তাছাড়া প্রায় ৪,৭০০ জন গরীব মেধাবী ছাত্রকে
            বিনামূল্যে...
          </p>
        </div>
        {/* Madrasha info section end */}
        {/* Notice section start */}
        <div className="w-full lg:w-[50%] bg-[#f8f8f8] rounded-2xl overflow-y-scroll lg:overflow-visible pb-4">
          {/* Notice header */}
          <div className="flex justify-center">
            <div className="flex mt-5 items-center">
              <span className="text-[red] text-[28px]">
                <ImBullhorn />
              </span>
              <h1 className="font-bold text-[24px] sm:text-[30px] ml-3">
                নোটিশ বোর্ড
              </h1>
            </div>
          </div>
          {/* Notice items */}
          {data?.map((notice, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="w-[90%] bg-[#ffffff] px-5 mt-3 pt-3 rounded-xl">
                <div className="flex justify-between items-center">
                  <span className="w-[20%] text-[40px] sm:text-[50px] text-[#f5504f]">
                    <RiErrorWarningFill />
                  </span>
                  <p className="font-[700] text-[16px] sm:text-[20px] w-[60%] sm:w-[68%]">
                    {notice.description}
                  </p>
                  <Link
                    to="/allnotice"
                    className="w-[20%] sm:w-[15%] px-3 sm:px-6 py-1 sm:py-2 text-[#ffffff] bg-[#11966f] hover:bg-[#e1f6ef] hover:text-[#11966f] rounded-full flex justify-center items-center"
                  >
                    বিস্তারিত
                  </Link>
                </div>
                <div className="flex justify-end">
                  <p className="py-1 text-xs sm:text-base text-[#b3b2b2]">
                    {formatDate(notice.date)}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Notice items end */}
        </div>
        {/* Notice section end */}
      </div>
    </div>
  );
}

export default InfoSection;
