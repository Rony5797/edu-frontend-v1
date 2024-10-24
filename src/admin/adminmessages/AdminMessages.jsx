/* eslint-disable no-irregular-whitespace */
import Layout from "../Layout";
import WeeklyMessage from "../adminMessage/WeeklyMessage";
import WeeklyMessageTwo from "../adminMessage/WeeklyMessageTwo";
import { useState } from "react";
import { updateMessage } from "../../APIRequest/APIRequest";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function AdminMessages() {
  const [isLoadingOne, setIsLoadingOne] = useState(false);
  const [isLoadingTwo, setIsLoadingTwo] = useState(false);
  const [passId, setPassId] = useState("");
  const [refresh, setrefresh] = useState(false);
  const [titleOne, setTitleOne] = useState("");
  const [titleTwo, setTitleTwo] = useState("");

  const handleSubmitOne = (e) => {
    e.preventDefault();

    setIsLoadingOne(true);

    try {
      if (!passId) {
        toast.error("Cannot update without id");
        setIsLoadingOne(false);
        return;
      }

      const messageData = { title: titleOne };

      updateMessage(messageData, passId)
        .then(() => {
          setrefresh(!refresh);
          setTimeout(() => {
            setIsLoadingOne(false);
          }, 2000);
          toast.success("Title updated successfully");
        })
        .catch((error) => {
          console.error("Error message form:", error);
          setIsLoadingOne(false);
        });
    } catch (error) {
      console.error("Error message form:", error);
      setIsLoadingOne(false);
    }
  };
  const handleSubmitTwo = (e) => {
    e.preventDefault();

    setIsLoadingTwo(true);

    try {
      if (!passId) {
        toast.error("Cannot update without id");
        setIsLoadingTwo(false);
        return;
      }

      const messageData = { title: titleTwo };

      updateMessage(messageData, passId)
        .then(() => {
          setrefresh(!refresh);
          setTimeout(() => {
            setIsLoadingTwo(false);
          }, 2000);
          toast.success("Title updated successfully");
        })
        .catch((error) => {
          console.error("Error message form:", error);
          setIsLoadingTwo(false);
        });
    } catch (error) {
      console.error("Error message form:", error);
      setIsLoadingTwo(false);
    }
  };

  return (
    <Layout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <WeeklyMessage
        load={refresh}
        idPass={setPassId}
        titlePass={setTitleOne}
      />
      {/* short home message one */}
      <div className=" flex justify-center bg-gray-100 mt-8">
        <form
          onSubmit={handleSubmitOne}
          className="bg-white shadow-md rounded px-8 py-6 w-[90%]"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">বার্তা - ১</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              শিরোনাম
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={titleOne}
              onChange={(e) => setTitleOne(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="আপনার শিরোনাম লিখুন"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoadingOne}
              className="w-full mb-4 bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition duration-300 relative"
            >
              <span className={isLoadingOne ? "invisible" : "visible"}>
                সাবমিট করুন
              </span>
              {isLoadingOne && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
      {/* Short home message end here */}

      {/* Short message Two is start here */}
      <WeeklyMessageTwo
        load={refresh}
        idPass={setPassId}
        titlePass={setTitleTwo}
      />
      <div className="flex justify-center bg-gray-100 my-8">
        <form
          onSubmit={handleSubmitTwo}
          className="bg-white shadow-md rounded px-8 py-6 w-[90%]"
        >
          <h2 className="text-xl font-semibold mb-4 text-center">বার্তা - ২</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              শিরোনাম
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={titleTwo}
              onChange={(e) => setTitleTwo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="আপনার শিরোনাম লিখুন"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoadingTwo}
              className="w-full mb-4 bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition duration-300 relative"
            >
              <span className={isLoadingTwo ? "invisible" : "visible"}>
                সাবমিট করুন
              </span>
              {isLoadingTwo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default AdminMessages;
