import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Layout from "./Pages/Layout";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="resources" element={<Resources/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
