import "./style/main.css";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar"
import Footer from "./components/navbar/footer/footer"
import Home from "./pages/home";
import Projects from "./pages/Projects";
import Contacts from "./pages/contact";
import Project from "./pages/project";

import ScrollToTop from "./utils/scrool-to-top";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
          <Navbar />
              <Routes>
                    <Route  path="/" element={<Home />} />
                    <Route  path="projects" element={<Projects />} />
                    <Route  path="project/:id" element={<Project />} />
                    <Route  path="contacts" element={<Contacts />} />
                  </Routes>
                <Footer />
      </Router>
     
      </div>
  );
}

export default App;
