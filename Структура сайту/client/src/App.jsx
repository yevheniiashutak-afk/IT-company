import { useEffect, useState } from "react";
import { Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ConsultationModal from "./components/ConsultationModal.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Navbar.jsx";
import RegistrationModal from "./pages/AuthPage.jsx";
import CalculatorPage from "./pages/CalculatorPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";

function SiteLayout() {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/") {
      setActiveModal(null);
    }
  }, [pathname]);

  const openModal = (modal) => {
    if (pathname !== "/") {
      navigate("/");
    }
    setActiveModal(modal);
  };

  return (
    <>
      <Header
        onConsultation={() => openModal("consultation")}
        onLogin={() => openModal("login")}
        onRegister={() => openModal("registration")}
        isLoggedIn={isLoggedIn}
        onLogout={() => {
          localStorage.removeItem("isLoggedIn");
          setIsLoggedIn(false);
          navigate("/");
        }}
      />
      <Outlet
        context={{
          openConsultation: () => openModal("consultation"),
          openRegistration: () => openModal("registration"),
        }}
      />
      <Footer />
      {pathname === "/" && activeModal === "consultation" && (
        <ConsultationModal onClose={() => setActiveModal(null)} />
      )}
      {pathname === "/" && (activeModal === "registration" || activeModal === "login") && (
        <RegistrationModal
          isLogin={activeModal === "login"}
          onClose={() => setActiveModal(null)}
          onAuthenticated={() => setIsLoggedIn(true)}
          onSwitchMode={(mode) => setActiveModal(mode)}
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServiceDetails />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
