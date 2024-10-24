/* eslint-disable react/prop-types */
import Footer from "../reuseable/Footer";
import Navbar from "../reuseable/Navbar";

const MasterLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MasterLayout;
