import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"; 
import Jobs from "./pages/Jobs";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import "./styles/App.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import JobsListingsPage from './pages/JobListingsPage';
import JobDetailsPage from "./pages/JobDetailsPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageJobs from "./pages/admin/ManageJobs";
import ManageSlider from "./pages/admin/ManageSlider";
import ManageMenu from "./pages/admin/ManageMenu";
import PrivateRoute from "./components/PrivateRoute";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import DomesticLetsGetStarted from "./pages/services/domestic/LetsGetStarted";
import DomesticJobAssistance from "./pages/services/domestic/JobAssistance";
import DomesticLocalHiring from "./pages/services/domestic/LocalHiring";
import DomesticVerification from "./pages/services/domestic/Verification";
import DomesticProfessionalWorld from "./pages/services/domestic/ProfessionalWorld";
import IntlLetsGetStarted from "./pages/services/international/LetsGetStarted";
import IntlJobAssistance from "./pages/services/international/JobAssistance";
import IntlImmigration from "./pages/services/international/Immigration";
import IntlVerification from "./pages/services/international/Verification";
import IntlProfessionalWorld from "./pages/services/international/ProfessionalWorld";
import HireUs from "./pages/HireUs";
import GlobalITRecruitment from "./pages/GlobalITRecruitment";
import EmployeeTrainee from "./pages/EmployeeTrainee";
import TalentAcquisition from "./pages/TalentAcquisition";
import PermanentStaffing from "./pages/services/PermanentStaffing";
import ContractStaffing from "./pages/services/ContractStaffing";
import LeaderShipHiring from "./pages/services/LeaderShipHiring";
import CampusRecruitment from "./pages/services/CampusRecruitment";
import HRConsulting from "./pages/services/HRConsulting";




function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs-listing" element={<JobsListingsPage/>}/>
        <Route path="/jobs/:id" element={<JobDetailsPage/>}/>
        <Route path="/jobs/:id/apply" element={<ApplyJobPage/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hire-us" element={<HireUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />

        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ✅ Corrected PrivateRoute Usage */}
        <Route 
          path="/admin" 
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/manage-jobs" 
          element={
            <PrivateRoute>
              <ManageJobs />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/manage-slider" 
          element={
            <PrivateRoute>
              <ManageSlider />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/admin/manage-menu" 
          element={
            <PrivateRoute>
              <ManageMenu />
            </PrivateRoute>
          } 
        />

         {/* Domestic Service Routes */}
      <Route path="/domestic/lets-get-started" element={<DomesticLetsGetStarted />} />
      <Route path="/domestic/job-assistance" element={<DomesticJobAssistance />} />
      <Route path="/domestic/local-hiring" element={<DomesticLocalHiring />} />
      <Route path="/domestic/verification" element={<DomesticVerification />} />
      <Route path="/domestic/professional-world" element={<DomesticProfessionalWorld />} />

      {/* International Service Routes */}
      <Route path="/international/lets-get-started" element={<IntlLetsGetStarted />} />
      <Route path="/international/job-assistance" element={<IntlJobAssistance />} />
      <Route path="/international/immigration" element={<IntlImmigration />} />
      <Route path="/international/verification" element={<IntlVerification />} />
      <Route path="/international/professional-world" element={<IntlProfessionalWorld />} />

      <Route path="/global-it-recruitment" element={<GlobalITRecruitment />} />
      <Route path="/employee-trainee" element={<EmployeeTrainee />} />
      <Route path="/talent-acquisition" element={< TalentAcquisition/>} />
      
      {/* Add more routes for other services here */}
      <Route path="/services/permanent-staffing" element={<PermanentStaffing />} />
      <Route path="/services/contract-staffing" element={<ContractStaffing />} />
      <Route path="/services/leadership-hiring" element={<LeaderShipHiring />} />
      <Route path="/services/campus-recruitment" element={<CampusRecruitment />} />
      <Route path="/services/hr-consulting" element={<HRConsulting />} />
      

        <Route path="*" element={<NotFound/>} />
      </Routes>
      </main>
      <CTASection />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
