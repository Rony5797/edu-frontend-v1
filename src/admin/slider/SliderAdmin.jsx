import { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  slideDeleteRequest,
  slideGetRequest,
  slidePostRequest,
} from "../../APIRequest/APIRequest";
import { Pencil, Trash2 } from "lucide-react";

function SliderAdmin() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false); // New state to force re-render

  function handleChange(event) {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]); // Ensure a valid file is set
    } else {
      setImage(null); // Clear the image if no file is selected
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("id", id || ""); // Ensure id is being set

    try {
      slidePostRequest(formData)
        .then(() => {
          setTitle("");
          setImage(null);
          setId(""); // Reset ID after successful submission
        })
        .catch((error) => {
          console.error("Error upserting slider:", error);
        })
        .finally(() => {
          setRefresh(!refresh);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        });
    } catch (error) {
      console.error("Error upserting slider:", error);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }

  useEffect(() => {
    slideGetRequest()
      .then((res) => setData(res?.data))
      .catch((err) => {
        console.log(err.message);
      });
  }, [refresh]); // Include `refresh` as a dependency to trigger re-fetching on change

  const handleUpdate = (item) => {
    setId(item._id);
    setTitle(item.title);
    // You can add logic to handle the image if necessary
  };

  const handleDelete = (item) => {
    slideDeleteRequest(item?._id)
      .then(() => {
        setRefresh(!refresh); // Trigger re-fetch of data after successful deletion
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Layout>
      <div className="flex w-full justify-center px-8 mt-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-lg py-6 px-6 w-full"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 my-6">
            স্লাইডার যুক্ত করুনঃ
          </h2>

          {/* Input Fields with Image Uploads */}
          {["স্লাইডার  টাইটেল লিখুন .."].map((placeholder, index) => (
            <div className="flex mb-4" key={index}>
              <div className="flex-1">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={placeholder}
                  className="w-full py-5 pl-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="ml-4 flex flex-col items-center">
                <label className="flex flex-col items-center cursor-pointer">
                  <div className="bg-gray-100 border border-gray-300 rounded-md p-2 w-24 flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-gray-500 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h18v18H3V3zM9 14l2-2 2 2 4-4 2 2V3H3v12h6z"
                      />
                    </svg>

                    <span className="text-gray-500">ছবি যুক্ত করুনঃ</span>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
                <div className="flex overflow-x-auto space-x-2 mt-2">
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      alt=""
                      className="w-16 h-16 object-cover rounded-md border border-gray-300"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}

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

      <div className="container mx-auto p-4 mt-10">
        <h2 className="text-2xl font-bold mb-4">Slider Gallery</h2>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Image</th>
              <th className="py-2 px-4 border-b text-left">Title</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4 border-b">{item.title}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleUpdate(item)}
                      className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      <Pencil className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
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

export default SliderAdmin;
