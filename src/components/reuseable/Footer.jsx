import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-14 text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between">
        {/* Address Section */}
        <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
          <h2 className="text-lg font-semibold mb-2">ঠিকানা</h2>
          <p className="text-gray-400">
            1234 রাস্তা, ঢাকা,
            <br />
            বাংলাদেশ
            <br />
            1212
          </p>
        </div>

        {/* Phone Number Section */}
        <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
          <h2 className="text-lg font-semibold mb-2">ফোন নম্বর</h2>
          <p className="text-gray-400">
            ০১৩১৯৩৯৪০৩৫
            <br />
            ০১৯১১৭৫৮৭৯৫
          </p>
        </div>

        {/* Info Section */}
        <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
          <h2 className="text-lg font-semibold mb-2">তথ্য</h2>
          <ul className="text-gray-400 space-y-1">
            <li>
              <a to="/about" className="hover:underline">
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a to="/services" className="hover:underline">
                পরিষেবা
              </a>
            </li>
            <li>
              <a to="/contact" className="hover:underline">
                যোগাযোগ
              </a>
            </li>
            <li>
              <a to="/privacy" className="hover:underline">
                গোপনীয়তা নীতি
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="mb-6 lg:mb-0 w-full lg:w-1/4">
          <h2 className="text-lg font-semibold mb-2">আমাদের সম্পর্কে</h2>
          <p className="text-gray-400">
            আমাদের মাদ্রাসা একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান যা ইসলামী শিক্ষা ও
            নৈতিক মূল্যবোধের প্রচার করে। আমাদের উদ্দেশ্য হল ছাত্রদের ধর্মীয়
            শিক্ষার পাশাপাশি চরিত্র গঠনের মাধ্যমে তাদের সমাজের জন্য যোগ্য নাগরিক
            হিসেবে গড়ে তোলা। আমরা অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত এবং আধুনিক
            শিক্ষার সাথে ঐতিহ্যবাহী শিক্ষার সংমিশ্রণ প্রদান করি।
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center space-x-4 mt-8">
        <a
          to="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          to="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaTwitter size={20} />
        </a>
        <a
          to="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaInstagram size={20} />
        </a>
        <a
          to="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedinIn size={20} />
        </a>
      </div>

      <div className="text-center mt-8 text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} আপনার মাদ্রাসা। সমস্ত অধিকার
          সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
