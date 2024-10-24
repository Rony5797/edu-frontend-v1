import { useEffect, useState } from "react";
import Layout from "../Layout";
import { FaEye } from "react-icons/fa"; // Ensure you have react-icons installed
import { allInbox, deleteInbox, seenInbox } from "../../APIRequest/APIRequest";
import { formatTimeFromDateString } from "../../helper/timeConverter";
import { Trash2 } from "lucide-react";

function AdminInbox() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      allInbox()
        .then((res) => setData(res))
        .catch((err) => {
          console.log(err.message);
        });
    };

    // Fetch data immediately
    fetchData();

    // Poll every 5 seconds (5000 ms)
    const interval = setInterval(fetchData, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [refresh]); // Empty dependency array ensures this runs on mount

  const seenHandler = (id) => {
    seenInbox(id)
      .then((res) => {
        console.log(res);
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleDelete = (id) => {
    deleteInbox(id)
      .then((res) => {
        setRefresh(!refresh);
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">বার্তা ইনবক্স</h2>
        {data?.map((msg, i) => (
          <div
            key={i}
            className={`bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow duration-200 ${
              msg.seen ? "opacity-50" : ""
            }`}
          >
            <div className="flex justify-between ">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  প্রেরক: {msg.name}
                </h3>
                <p className="text-sm text-gray-600">বার্তা : {msg.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  নাম্বার : {msg.number}
                </p>
                <button
                  onClick={() => msg.seen === false && seenHandler(msg._id)}
                  className="mt-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                >
                  {!msg.seen && (
                    <FaEye className="inline-block" title="Marked as read" />
                  )}
                </button>
              </div>
              <div className="relative">
                <p className="text-xs text-gray-500">
                  {formatTimeFromDateString(msg.createdAt)} ago
                </p>
                <button
                  onClick={() => handleDelete(msg._id)}
                  className="absolute bottom-0"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default AdminInbox;
