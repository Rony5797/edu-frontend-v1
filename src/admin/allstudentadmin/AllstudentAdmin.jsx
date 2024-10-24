/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  createStudent,
  singleStudent,
  updateStudent,
} from "../../APIRequest/APIRequest";
import { useNavigate, useParams } from "react-router-dom";

function AllstudentAdmin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    className: "",
    department: "",
    mobileNumber: "",
    bloodGroup: "",
    motherName: "",
    fatherName: "",
    fatherOccupation: "",
    dateOfBirth: "",
    joinDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      createStudent(formData)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          navigate("/admin/admin-student-list");
        })
        .catch((error) => {
          console.error("Error student form:", error);
        });
    } catch (error) {
      console.error("Error student form:", error);
    }
  };

  useEffect(() => {
    if (id) {
      singleStudent(id)
        .then((res) => setFormData(res))
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [id]);

  const handleSendUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      updateStudent(id, formData)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          navigate("/admin/admin-student-list");
        })
        .catch((error) => {
          console.error("Error upserting slider:", error);
        })
        .finally(() => {});
    } catch (error) {
      console.error("Error upserting slider:", error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center min-h-screen bg-gray-100 p-4">
        <form
          onSubmit={id === undefined ? handleSubmit : handleSendUpdate}
          className="bg-white p-8 rounded-lg shadow-md w-full"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            ছাএদের তথ্য যোগ করুন
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="name">
                নাম
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="age">
                বয়স
              </label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="address">
              ঠিকানা
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="ঠিকানা টাইপ এখানে শুরু হয়"
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="className">
                ক্লাস
              </label>
              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="one">এক</option>
                <option value="two">দুই</option>
                <option value="three">তিন</option>
                <option value="four">চার</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="department">
                বিভাগ
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">নির্বাচন করুন</option>
                <option value="HEFZ">হেফজ</option>
                <option value="Najera">নাজেরা</option>
                <option value="Other">অন্যান্য</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="mobileNumber">
                মোবাইল নম্বর
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* New Fields Added */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="bloodGroup">
                রক্তের গ্রুপ
              </label>
              <input
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="motherName">
                মায়ের নাম
              </label>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="fatherName">
                বাবার নাম
              </label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="fatherOccupation">
                বাবার পেশা
              </label>
              <input
                type="text"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="dateOfBirth">
                জন্ম তারিখ
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="joinDate">
                যোগদান তারিখ
              </label>
              <input
                type="date"
                name="joinDate"
                value={formData.joinDate}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mb-4 bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition duration-300 relative"
          >
            <span className={isLoading ? "invisible" : "visible"}>
              আপডেট করুন
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              </div>
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default AllstudentAdmin;
