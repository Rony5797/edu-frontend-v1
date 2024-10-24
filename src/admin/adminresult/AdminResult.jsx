import { useEffect, useState } from "react";
import Layout from "../Layout";
import { useNavigate, useParams } from "react-router-dom";
import {
  createMarks,
  singleMarks,
  updateMarks,
} from "../../APIRequest/APIRequest";

function AdminResult() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    department: "",
    banglaMarks: "",
    englishMarks: "",
    mathematicsMarks: "",
    arabicMarks: "",
    ictMarks: "",
    chemistryMarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      createMarks(formData)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          navigate("/admin/admin-results-list");
        })
        .catch((error) => {
          console.error("Error marks form:", error);
        });
    } catch (error) {
      console.error("Error marks form:", error);
    }
  };

  useEffect(() => {
    if (id) {
      singleMarks(id)
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
      updateMarks(id, formData)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          navigate("/admin/admin-results-list");
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
      <div className="flex justify-center bg-gray-100 p-4">
        <form
          onSubmit={id === undefined ? handleSubmit : handleSendUpdate}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-screen-lg"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            ছাএদের তথ্য যোগ করুন
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="studentName">
              নাম
            </label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          </div>

          {/* Subject Marks Fields */}
          <h3 className="text-lg font-semibold my-6">পাঠ্যবিষয়ের মার্ক</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="banglaMarks">
                বাংলা
              </label>
              <input
                type="number"
                name="banglaMarks"
                value={formData.banglaMarks}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="englishMarks">
                ইংরেজি
              </label>
              <input
                type="number"
                name="englishMarks"
                value={formData.englishMarks}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="mathematicsMarks">
                গাণিত
              </label>
              <input
                type="number"
                name="mathematicsMarks"
                value={formData.mathematicsMarks}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="arabicMarks">
                আরবি
              </label>
              <input
                type="number"
                name="arabicMarks"
                value={formData.arabicMarks}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700" htmlFor="ictMarks">
                আইসিটি
              </label>
              <input
                type="number"
                name="ictMarks"
                value={formData.ictMarks}
                onChange={handleChange}
                required
                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700" htmlFor="chemistryMarks">
                রসায়ন
              </label>
              <input
                type="number"
                name="chemistryMarks"
                value={formData.chemistryMarks}
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

export default AdminResult;
