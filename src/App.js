import { Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Resources from "./Pages/Resources";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Layout from "./Pages/Layout";
import AdminCMS from "./Pages/AdminCMS";
import NewEvent from "./Pages/NewEvent";
import Register from "./Register";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="resources" element={<Resources/>} />
              <Route path="admin" element={<AdminCMS/>} />
              <Route path="addevent" element={<NewEvent/>} />
              <Route path="register" element={<Register/>} />
            </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
