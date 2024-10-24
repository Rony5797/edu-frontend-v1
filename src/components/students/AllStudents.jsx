/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Footer from "../reuseable/Footer";
import Navbar from "../reuseable/Navbar";
import { allStudents } from "../../APIRequest/APIRequest";
import Loading from "../loader/Loading";
import { formatDate } from "../../helper/timeFormater";

function AllStudents() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFilteredData = () => {
    setIsLoading(true);
    allStudents()
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

  return (
    <>
      <Navbar />
      {/* All students start */}
      <div className="max-w-7xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-[black]">
          ছাত্রদের তালিকা
        </h2>
        <table className="w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-[#c0392b] text-white">
              <th className="py-2 px-4 border-b text-left">Id</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Age</th>
              <th className="py-2 px-4 border-b text-left">Class</th>
              <th className="py-2 px-4 border-b text-left">Department</th>
              <th className="py-2 px-4 border-b text-left">Mobile</th>
              <th className="py-2 px-4 border-b text-left">Father's Name</th>
              <th className="py-2 px-4 border-b text-left">Mother's Name</th>
              <th className="py-2 px-4 border-b text-left">Blood Group</th>
              <th className="py-2 px-4 border-b text-left">Birth Date</th>
              <th className="py-2 px-4 border-b text-left">Join Date</th>
            </tr>
          </thead>

          {isLoading ? (
            <Loading />
          ) : (
            <tbody>
              {data.map((student, i) => (
                <tr key={i} className="border-b hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{i + 1}</td>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.age}</td>
                  <td className="py-2 px-4 border-b">{student.className}</td>
                  <td className="py-2 px-4 border-b">{student.department}</td>
                  <td className="py-2 px-4 border-b">{student.mobileNumber}</td>
                  <td className="py-2 px-4 border-b">{student.fatherName}</td>
                  <td className="py-2 px-4 border-b">{student.motherName}</td>
                  <td className="py-2 px-4 border-b">{student.bloodGroup}</td>
                  <td className="py-2 px-4 border-b">
                    {formatDate(student.dateOfBirth)}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {formatDate(student.joinDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      {/* All students end */}
      <Footer />
    </>
  );
}

export default AllStudents;
