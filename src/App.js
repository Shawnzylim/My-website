import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useLocation,
} from "react-router-dom";
import Home from "./components/pages/Home";
import ContactMe from "./components/pages/ContactMe";
import Gaming from "./components/pages/Gaming";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <TransitionGroup>
//       <CSSTransition key={location.key} timeout={500} classNames="page">
//         <Routes location={location}>
//           <Route index element={<Home />} />
//           <Route path="/gaming" element={<AboutMe />} />
//           <Route path="/contact-me" element={<ContactMe />} />
//           <Route path="/projects" element={<Projects />} />
//         </Routes>
//       </CSSTransition>
//     </TransitionGroup>
//   );
// };

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/my-website/" exact Component={Home} />
          <Route path="/contact-me" Component={ContactMe} />
          <Route path="/gaming" Component={Gaming} />
          <Route path="/projects" Component={Projects} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
