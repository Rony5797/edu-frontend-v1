import { ImBullhorn } from "react-icons/im";
import LeaderBoardStudent from "./LeaderBoardStudent";
import { IoMdTime } from "react-icons/io";
import { useEffect, useState } from "react";
import { allMarks, getImpNotice } from "../../APIRequest/APIRequest";
function LeaderBoardTwo() {
  const [data, setData] = useState({});
  const [listOne, setListOne] = useState([]);
  const [listTwo, setListTwo] = useState([]);
  const [listThree, setListThree] = useState([]);

  useEffect(() => {
    getImpNotice()
      .then((res) => setData(res[0]))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const fetchFilteredData = async (department) => {
    try {
      const res = await allMarks({ department: department });
      return res;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const HEFZ = await fetchFilteredData("HEFZ");
      setListOne(HEFZ); // Set the listOne state after the data is resolved
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const Najera = await fetchFilteredData("Najera");
      setListTwo(Najera); // Set the listOne state after the data is resolved
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const Other = await fetchFilteredData("Other");
      setListThree(Other); // Set the listOne state after the data is resolved
    };
    getData();
  }, []);

  const firstThreeElements = listOne?.slice(0, 3);
  const secondThreeElements = listTwo?.slice(0, 3);
  const thirdThreeElements = listThree?.slice(0, 3);

  return (
    <div className="w-full flex justify-center mt-10 sm:mt-14 xl:mt-20 pb-8">
      <div className="w-[90%] flex flex-col lg:flex-row justify-between">
        {/* Notice section start */}
        <div className="w-full lg:w-[50%] bg-[#f8f8f8] rounded-2xl overflow-y-scroll lg:overflow-visible pb-4 mb-5 xl:mb-0">
          {/* Notice header */}
          <div className="flex justify-center text-center">
            <div className="mt-5 ">
              <h1 className="font-bold text-[24px] sm:text-[30px]">
                <u>সর্বোচ্চ মেধাতালিকা</u>
              </h1>
              <p className="font-bold text-[16px] sm:text-[18px]">
                ১ম সেমিস্টার পরীক্ষা
              </p>
            </div>
          </div>
          {/* Notice items */}
          <h1 className="font-bold text-[20px] ml-[5%] mt-3">
            হেফজ বিভাগ থেকে:
          </h1>
          {firstThreeElements?.map((student, i) => {
            return (
              <LeaderBoardStudent
                key={i}
                rank={i + 1}
                img="https://cdn.ostad.app/user/avatar/2023-02-27T04-36-50.005Z-132903%20hosne%20passport%20pic.JPG"
                name={student.studentName}
                mark={student.percentage}
              />
            );
          })}

          <h1 className="font-bold text-[20px] ml-[5%] mt-3">
            নাজেরা বিভাগ থেকে:
          </h1>
          {secondThreeElements?.map((student, i) => {
            return (
              <LeaderBoardStudent
                key={i}
                rank={i + 1}
                img="https://cdn.ostad.app/user/avatar/2023-03-14T01-58-32.404Z-absamad.jpg"
                name={student.studentName}
                mark={student.percentage}
              />
            );
          })}

          <h1 className="font-bold text-[20px] ml-[5%] mt-3">কিতাব খানা :</h1>
          {thirdThreeElements?.map((student, i) => {
            return (
              <LeaderBoardStudent
                key={i}
                rank={i + 1}
                img="https://cdn.ostad.app/user/avatar/2023-02-20T14-21-31.417Z-download.png"
                name={student.studentName}
                mark={student.percentage}
              />
            );
          })}

          {/* Notice items end */}
          <div className="flex justify-start items-center text-[14px] ml-[5%] pt-3 text-[#bbbaba]">
            <span className="mr-1">
              <IoMdTime />
            </span>
            <p>বুধবার, ১৮ সেপ্টেম্বর ২০২৪</p>
          </div>
        </div>
        {/* Notice section end */}
        {/* Madrasha info section start */}
        <div className="w-full text-center lg:w-[45%] mb-8 lg:mb-0 lg:mr-4 border-[2px] border-dotted border-[#84828291] rounded-2xl p-6">
          {/* Notice header */}
          <div className="flex justify-center pb-3">
            <div className="flex mt-3 items-center">
              <span className="text-[red] text-[28px]">
                <ImBullhorn />
              </span>
              <h1 className="font-bold text-[24px] sm:text-[30px] ml-3 py-5">
                জরুরি বিঙ্গপ্তি
              </h1>
            </div>
          </div>
          <img className="w-full rounded-md" src={data?.imagePath} alt="#" />
        </div>
        {/* Madrasha info section end */}
      </div>
    </div>
  );
}

export default LeaderBoardTwo;
