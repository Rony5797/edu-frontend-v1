/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "../Layout";
import { impNoticeRequest } from "../../APIRequest/APIRequest";

function Importantnoticeadmin() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // State for preview

  function handleChange(event) {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile); // Set the selected file

      // Create a FileReader to generate the preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result); // Set the image preview to the base64 URL
      };
      reader.readAsDataURL(selectedFile); // Read the file and generate the base64 data URL
    } else {
      setImage(null); // Clear the image if no file is selected
      setImagePreview(null); // Clear the preview as well
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", image);

    try {
      impNoticeRequest(formData)
        .then((res) => {
          setImage(null);
        })
        .catch((error) => {
          console.error("Error upserting slider:", error);
        });
    } catch (error) {
      console.error("Error upserting slider:", error);
    }
  }

  return (
    <Layout>
      {/* Important notice section start */}
      <h2 className="text-2xl font-semibold text-[#000000] my-4 text-start ml-[2%] py-5">
        জরুরী নোটিশ যুক্ত করুনঃ
      </h2>
      <div className="flex items-center justify-center">
        <div className="w-[95%] bg-white rounded-lg shadow-2xl border border-gray-300 overflow-hidden">
          <div className="bg-[#1abc9c] py-3 text-white text-center">
            <h2 className="text-xl font-bold">ছবি আপলোড করুন</h2>
          </div>
          <div className="p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <label
                  className="block text-lg font-medium text-gray-700 mb-2"
                  htmlFor="image"
                >
                  চিত্র নির্বাচন করুন
                </label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleChange}
                  className="mt-1 block w-full border-4 border-dashed border-gray-300 rounded-md p-6 transition duration-200 focus:ring focus:ring-blue-300"
                  accept="image/*"
                  required
                />
              </div>

              {/* Preview section */}
              {imagePreview && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    প্রাকদর্শন:
                  </h3>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full max-h-80 object-contain border rounded-md"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#1abc9c] text-white font-semibold py-4 rounded-md shadow-lg hover:bg-[#1abc9ce6]"
              >
                আপলোড করুন
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Important notice section end */}
    </Layout>
  );
}

export default Importantnoticeadmin;
