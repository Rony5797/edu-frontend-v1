/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Layout from "../Layout";
import { Pencil, Percent, Trash2 } from "lucide-react";
import { allMarks, deleteMarks } from "../../APIRequest/APIRequest";

import { useNavigate } from "react-router-dom";
import Loading from "../../components/loader/Loading";

const StudentResultList = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [classFilter, setClassFilter] = useState("");
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const filteredStudents = data?.filter((student) =>
    student.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate("/admin/admin-results/" + id);
  };

  const handleDelete = (id) => {
    deleteMarks(id)
      .then((res) => {
        setRefresh(!refresh);
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchFilteredData = () => {
    setIsLoading(true);
    allMarks({ department: departmentFilter, className: classFilter })
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
  }, [refresh, departmentFilter, classFilter]);

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">Students Result List</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Filter Dropdowns */}
        <div className="mb-4 flex space-x-4">
          {/* Department Filter */}
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Departments</option>
            <option value="HEFZ">হেফজ</option>
            <option value="Najera">নাজেরা</option>
            <option value="Other">অন্যান্য</option>
          </select>

          {/* Class Filter */}
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Classes</option>
            <option value="one">Class One</option>
            <option value="two">Class Two</option>
            <option value="three">Class Three</option>
            <option value="four">Class Four</option>
            {/* Add more class options as needed */}
          </select>
        </div>

        {/* Student Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">S. No</th>
                <th className="py-2 px-4 border-b text-left">Name</th>
                <th className="py-2 px-4 border-b text-left">Class</th>
                <th className="py-2 px-4 border-b text-left">Department</th>
                <th className="py-2 px-4 border-b text-left">Bangla</th>
                <th className="py-2 px-4 border-b text-left">English</th>
                <th className="py-2 px-4 border-b text-left">Math</th>
                <th className="py-2 px-4 border-b text-left">Islam</th>
                <th className="py-2 px-4 border-b text-left">ICT</th>
                <th className="py-2 px-4 border-b text-left">Chemistry</th>
                <th className="py-2 px-4 border-b text-left">Total Marks</th>
                <th className="py-2 px-4 border-b text-left">Percentage</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            {isLoading ? (
              <Loading />
            ) : (
              <tbody>
                {filteredStudents.map((student, index) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">
                      {student.studentName}
                    </td>
                    <td className="py-2 px-4 border-b">{student.className}</td>
                    <td className="py-2 px-4 border-b">{student.department}</td>
                    <td className="py-2 px-4 border-b">
                      {student.banglaMarks}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {student.englishMarks}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {student.mathematicsMarks}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {student.arabicMarks}
                    </td>
                    <td className="py-2 px-4 border-b">{student.ictMarks}</td>
                    <td className="py-2 px-4 border-b">
                      {student.chemistryMarks}
                    </td>
                    <td className="py-2 px-4 border-b">{student.totalMarks}</td>
                    <td className="py-2 px-4 border-b flex items-center">
                      {student.percentage}
                      <Percent className="w-4 h-4" />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(student._id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(student._id)}
                          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default StudentResultList;
