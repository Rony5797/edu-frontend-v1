/* eslint-disable no-unused-vars */
import { FaDownload } from "react-icons/fa6";
import MasterLayout from "../masterLatout/MasterLayout";
import { useEffect, useState } from "react";
import { allMarks } from "../../APIRequest/APIRequest";

const HefzResult = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFilteredData = () => {
    setIsLoading(true);
    allMarks({ department: "HEFZ" })
      .then((res) => {
        setData(res);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchFilteredData();
  }, []);

  // Function to convert Bangla numerals to English numerals
  // const banglaToEnglishNumber = (banglaNum) => {
  //   const banglaNumerals = {
  //     "০": 0,
  //     "১": 1,
  //     "২": 2,
  //     "৩": 3,
  //     "৪": 4,
  //     "৫": 5,
  //     "৬": 6,
  //     "৭": 7,
  //     "৮": 8,
  //     "৯": 9,
  //   };
  //   return Array.from(banglaNum).reduce(
  //     (acc, char) => acc * 10 + (banglaNumerals[char] || 0),
  //     0
  //   );
  // };

  // // Function to convert English numerals back to Bangla numerals
  // const englishToBanglaNumber = (num) => {
  //   const banglaNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  //   return String(num)
  //     .split("")
  //     .map((digit) => banglaNumerals[digit])
  //     .join("");
  // };

  // // Function to calculate total and percentage
  // const calculateTotal = (subjects) => {
  //   const total = Object.values(subjects).reduce(
  //     (acc, mark) => acc + banglaToEnglishNumber(mark),
  //     0
  //   );
  //   const maxMarks = Object.keys(subjects).length * 100; // Total possible marks
  //   const percentage = Math.min((total / maxMarks) * 100, 100);
  //   return { total, percentage: Math.round(percentage) }; // Round to the nearest whole number
  // };

  // // Calculate total marks and sort students
  // const sortedStudents = data
  //   .map((student) => {
  //     const { total, percentage } = calculateTotal(student.subjects);
  //     return { ...student, total, percentage };
  //   })
  //   .sort((a, b) => b.total - a.total); // Sort in descending order of total marks

  return (
    <MasterLayout>
      {/* Top header text */}
      <div className="flex justify-center">
        <div className="text-center mt-8">
          <h1 className="font-bold text-[26px]">১ম সেমিস্টার পরীক্ষার ফলাফল</h1>
          <u>
            <p className="text-[20px]">হেফজ বিভাগ</p>
          </u>
          <p>১০/৮/২০২৪</p>
        </div>
      </div>
      {/* Top header text end */}
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 mb-4 mt-4 rounded-lg shadow-lg">
            <thead className="bg-[#1a8b65] text-white">
              <tr>
                <th className="px-4 py-2 border border-transparent">রোল</th>
                <th className="px-4 py-2 border border-transparent">নাম</th>
                <th className="px-4 py-2 border border-transparent">শ্রেণী </th>
                <th className="px-4 py-2 border border-transparent">বিভাগ</th>
                <th className="px-4 py-2 border border-transparent">বাংলা</th>
                <th className="px-4 py-2 border border-transparent">ইংরেজি</th>
                <th className="px-4 py-2 border border-transparent">গণিত</th>
                <th className="px-4 py-2 border border-transparent">আরবি</th>
                <th className="px-4 py-2 border border-transparent">রসায়ন</th>
                <th className="px-4 py-2 border border-transparent">আইসিটি</th>
                <th className="px-4 py-2 border border-transparent">
                  মোট মার্ক
                </th>
                <th className="px-4 py-2 border border-transparent">
                  মার্ক শতাংশ
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-[#f5f7ff] transition-colors duration-200`}
                >
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{student.studentName}</td>
                  <td className="px-4 py-2 border text-center">
                    {student.className}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.department}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.banglaMarks}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.englishMarks}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.mathematicsMarks}
                  </td>
                  <td className="px-4 py-2 border text-center">
                    {student.arabicMarks}
                  </td>
                  <td className="px-4 py-2 border text-center ">
                    {student.chemistryMarks}
                  </td>
                  <td className="px-4 py-2 border text-center ">
                    {student.ictMarks}
                  </td>
                  <td className="px-4 py-2 border text-center font-semibold">
                    {student.totalMarks}
                  </td>
                  <td className="px-4 py-2 border text-center text-blue-600 font-bold">
                    {student.percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mb-8 mt-2">
            <button className="text-[white] bg-[#27ae60] font-semibold text-[18px] px-3 py-2 flex justify-center hover:bg-[#29bb66ef]">
              <span className="mr-2 mt-1">
                <FaDownload />
              </span>{" "}
              ডাউনলোড
            </button>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default HefzResult;
