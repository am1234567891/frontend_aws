import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Navbar/Navbar";
import landingRoutes from "./LandingRoutes";
import allRegisterRoutes from "./RegistrationRoutes";

function App() {
  const allLandingRoutes = landingRoutes.map((linkComponent) => {
    return <Route key={linkComponent.path} path={linkComponent.path} element={linkComponent.element} />;
  });

  const allRegistrationRoutes = allRegisterRoutes.map((linkComponent) => (
    <Route key={linkComponent.path} path={linkComponent.path} element={linkComponent.element} />
  ));

  return (
    <Router>
      <NavBar />
      <Routes>
        {allLandingRoutes}
        {allRegistrationRoutes}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
