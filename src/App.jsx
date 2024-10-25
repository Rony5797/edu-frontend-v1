/* eslint-disable no-unused-vars */
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
// import ResultPage from "./pages/ResultPage";
import HefzResult from "./components/result/HefzResult";
import NajeraResult from "./components/result/NajeraResult";

import KitabKhana from "./components/result/KitabKhana";
import { useEffect, useState } from "react";

import HomeAdmin from "./admin/homePage/HomeAdmin";
import { getToken } from "./helper/sessionHelper";
import isTokenExpired from "./helper/expireToken";

import PrivateRoute from "./routes/ProtectedRoute";

import PublicRoute from "./routes/PublicRoute";

import AllNotice from "./components/notice/AllNotice";
import ImportanceNotice from "./components/notice/ImportanceNotice";
import AllStudents from "./components/students/AllStudents";
import Allnoticeadmin from "./admin/allnoticeadmin/Allnoticeadmin";
import AllstudentAdmin from "./admin/allstudentadmin/AllstudentAdmin";
import AdminResult from "./admin/adminresult/AdminResult";
import AdminContact from "./admin/admincontact/AdminContact";
import SliderAdmin from "./admin/slider/SliderAdmin";
import AdminMessages from "./admin/adminmessages/AdminMessages";
import AdminInbox from "./admin/admininbox/AdminInbox";
import Importantnoticeadmin from "./admin/importantnoticeadmin/Importantnoticeadmin.jsx";
import StudentList from "./admin/studentList/StudentList.jsx";
import StudentResultList from "./admin/resultList/StudentResultList.jsx";
import { slideGetRequest } from "./APIRequest/APIRequest.js";
import Loading from "./components/loader/Loading.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (token) {
      if (isTokenExpired(token)) {
        localStorage.removeItem("token");
        redirect("/login");
      }
    } else {
      redirect("/login");
    }
  }, [token]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let timeoutPromise;
      const apiPromise = slideGetRequest().then((res) => {
        if (res.status === "success") {
          timeoutPromise = new Promise(
            (_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000) // 5 seconds
          );
        } else {
          throw new Error("Failed to fetch data");
        }
      });

      try {
        await Promise.race([apiPromise, timeoutPromise]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Private Route - accessible only by authenticated users */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="dashboard" element={<HomeAdmin />} />
          <Route path="admin-allnotice" element={<Allnoticeadmin />} />
          <Route
            path="admin-important-notice"
            element={<Importantnoticeadmin />}
          />
          <Route path="admin-student-list" element={<StudentList />} />
          <Route path="admin-students/:id" element={<AllstudentAdmin />} />
          <Route path="admin-students" element={<AllstudentAdmin />} />
          <Route path="admin-results-list" element={<StudentResultList />} />
          <Route path="admin-results/:id" element={<AdminResult />} />
          <Route path="admin-results" element={<AdminResult />} />
          <Route path="admin-contact" element={<AdminContact />} />
          <Route path="admin-slider" element={<SliderAdmin />} />
          <Route path="admin-messages" element={<AdminMessages />} />
          <Route path="admin-inbox" element={<AdminInbox />} />
        </Route>

        {/* Regular Route - accessible by all */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/hefzresult" element={<HefzResult />} />
        <Route path="/najeraresult" element={<NajeraResult />} />
        <Route path="/kitabkhana" element={<KitabKhana />} />
        <Route path="/allnotice" element={<AllNotice />} />
        <Route path="/important-notice" element={<ImportanceNotice />} />
        <Route path="/allstudent" element={<AllStudents />} />

        {/* Redirect to dashboard if the admin is already logged in */}
        <Route path="/" element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Catch-all for 404 */}
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
