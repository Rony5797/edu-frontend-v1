import { useEffect, useState } from "react";
import Layout from "../Layout";
import { Pencil, Trash2 } from "lucide-react";
import {
  allGetNotice,
  allPostNotice,
  singleDeleteNotice,
  singlegetNotice,
  singleUpdateNotice,
} from "../../APIRequest/APIRequest";
import { formatDate } from "../../helper/timeFormater";

function Allnoticeadmin() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [handleType, setHandleType] = useState(false);
  const [dataId, setDataId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    details: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      allPostNotice(formData)
        .then(() => {
          setRefresh(!refresh);
          // Clear the form fields after submission
          setFormData({
            title: "",
            description: "",
            details: "",
            date: "",
          });
        })
        .catch((error) => {
          console.error("Error upserting slider:", error);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        });
    } catch (error) {
      console.error("Error upserting slider:", error);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  const handleSendUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      singleUpdateNotice(dataId, formData)
        .then(() => {
          setRefresh(!refresh);
          // Clear the form fields after submission
          setFormData({
            title: "",
            description: "",
            details: "",
            date: "",
          });
        })
        .catch((error) => {
          console.error("Error upserting slider:", error);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        });
    } catch (error) {
      console.error("Error upserting slider:", error);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  useEffect(() => {
    allGetNotice()
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err.message);
      });
  }, [refresh]);

  const handleUpdate = (id) => {
    setHandleType(true);
    setDataId(id);
    singlegetNotice(id)
      .then((res) =>
        setFormData({
          title: res.title,
          description: res.description,
          details: res.details,
          date: formatDate(res.date),
        })
      )
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDelete = (id) => {
    singleDeleteNotice(id)
      .then(() => {
        setRefresh(!refresh); // Trigger re-fetch of data after successful deletion
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-r p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-start">
          নোটিশ যুক্ত করুন:
        </h2>
        <div className="w-full p-8 bg-white rounded-lg shadow-lg">
          <form onSubmit={!handleType ? handleSubmit : handleSendUpdate}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="title"
              >
                শিরোনাম
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="description"
              >
                বিকল্প নাম
              </label>
              <input
                type="text"
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="mt-1 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="details"
              >
                বিস্তারিত
              </label>
              <textarea
                name="details"
                id="details"
                value={formData.details}
                onChange={handleChange}
                rows="6"
                className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                required
                placeholder="Text type here"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="date"
              >
                তারিখ
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="mt-1 py-2 px-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                required
              />
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
      </div>
      <div className="container mx-auto p-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Notice List</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Title</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Details</th>
              <th className="py-2 px-4 border-b text-left">Date</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">{item.description}</td>
                <td className="py-2 px-4 border-b">{item.details}</td>
                <td className="py-2 px-4 border-b">{formatDate(item.date)}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="p-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Allnoticeadmin;
