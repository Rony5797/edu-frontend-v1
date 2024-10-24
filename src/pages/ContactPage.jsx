import { useState } from "react";
import MasterLayout from "../components/masterLatout/MasterLayout";
import { createInbox } from "../APIRequest/APIRequest";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // Step 1: Create state for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  // Step 2: Handle change in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" &&
      formData.number === "" &&
      formData.message === ""
    ) {
      toast.error("All input fields are required");
      return;
    }

    setIsLoading(true);
    try {
      createInbox(formData)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          setFormData({
            name: "",
            number: "",
            message: "",
          });
          toast.success("Message successfully");
        })
        .catch((error) => {
          console.error("Error student form:", error);
          setIsLoading(false);
        });
    } catch (error) {
      console.error("Error student form:", error);
      setIsLoading(false);
    }
  };

  return (
    <MasterLayout>
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
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">
            যোগাযোগ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* contact informations */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center">
                <img
                  className="w-[80%]"
                  src="https://darululoomhathazari.com/media/uploads/eae3513d607be679450d99f695757164.png"
                  alt="#"
                />
              </div>

              <p className="text-gray-700 mb-2 mt-4">
                মুহতামিম (পরিচালক) <br /> হযরতম মাও: মুফতী খলীল আহমদ কাসেমী দা:
                বা: <br /> 01903527399 (মাদ্রাসার অফিসিয়াল নাম্বার)
              </p>
              <p className="text-gray-700 py-10">
                দফতরে তা’লীমাত (শিক্ষা পরিচালনা বিভাগ) <br /> 01819-323603
              </p>
              <p className="py-5">
                সনদ, মার্কসিট, চারিত্রিক সনদ, প্রতয়্যনপত্রের বিষয়ে জানতে
              </p>
              <p>
                01823-535857 (হোয়াটসঅ্যাপে লিখে দিন) <br /> 01811-323393
                (হোয়াটসঅ্যাপে লিখে দিন)
              </p>
              <p className="py-5">
                সনদ ও যে কোন প্রয়োজনে (হোয়াটস্যাপ) সকাল 09.00 থেকে 12.30, বিশেষ
                প্রয়োজনে আছরের পর থেকে এশা।
              </p>

              <p className="py-3">হিসাব বিভাগ: 01819-323602</p>
            </div>

            {/* Form section */}
            <div className="flex flex-col justify-between">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      নাম:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="আপনার নাম"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="number"
                    >
                      মোবাইল নাম্বার:
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="আপনার মোবাইল নাম্বার"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      বার্তা লিখুন:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="এখান থেকে বার্তা লেখা শুরু করুন .."
                      rows="5"
                    ></textarea>
                  </div>
                  <div className="text-end">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      <span className={isLoading ? "invisible" : "visible"}>
                        বার্তা পাঠান
                      </span>
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Location section */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  আমাদের ঠিকানা
                </h3>
                <div className="w-full h-64">
                  <iframe
                    className="w-full h-full rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11133.018145871965!2d90.3220264264068!3d24.018707546539197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dd4664e47da1%3A0xd852a478bdd9f30b!2z4Kam4Ka-4Kaw4KeB4KayIOCmieCmsuCnguCmriDgpobgpq7gpqzgpr7gppcg4Kau4Ka-4Kam4Kaw4Ka-4Ka44Ka-!5e0!3m2!1sen!2sbd!4v1726818255386!5m2!1sen!2sbd"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default ContactPage;
