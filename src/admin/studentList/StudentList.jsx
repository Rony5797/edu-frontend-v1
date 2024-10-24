/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Layout from "../Layout";
import { Pencil, Trash2 } from "lucide-react";
import { allStudents, deleteStudent } from "../../APIRequest/APIRequest";
import { formatDate } from "../../helper/timeFormater";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loader/Loading";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const filteredStudents = data?.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (id) => {
    navigate("/admin/admin-students/" + id);
  };

  const handleDelete = (id) => {
    deleteStudent(id)
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
  }, [refresh]);

  return (
    <Layout>
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">Students List</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
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
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>

            {isLoading ? (
              <Loading />
            ) : (
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{student.name}</td>
                    <td className="py-2 px-4 border-b">{student.age}</td>
                    <td className="py-2 px-4 border-b">{student.className}</td>
                    <td className="py-2 px-4 border-b">{student.department}</td>
                    <td className="py-2 px-4 border-b">
                      {student.mobileNumber}
                    </td>
                    <td className="py-2 px-4 border-b">{student.fatherName}</td>
                    <td className="py-2 px-4 border-b">{student.motherName}</td>
                    <td className="py-2 px-4 border-b">{student.bloodGroup}</td>
                    <td className="py-2 px-4 border-b">
                      {formatDate(student.dateOfBirth)}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {formatDate(student.joinDate)}
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

export default StudentList;
