import "./App.css";
import "./styles/bootstrap.min.css";
import Login from "./components/login/login.";
import Home from "./components/home/home";
import UploadImage from "./components/uploadimages/uploadimage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { DASHBOARD, LOGIN, IMAGEUPLOAD } from "./common/constant";
import Footer from "./components/reusable/footer";
import Header from "./components/reusable/header";

function App() {
  return (
    <BrowserRouter>
    <div>
        <Header />
        
    </div>
        {/* <ul>
          <li>
            <Link to={LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={DASHBOARD}>Dashboard</Link>
          </li>
          <li>
            <Link to={IMAGEUPLOAD}>Upload Images</Link>
          </li>
        </ul>
      </nav>
        </ul> */}
     
      <div className="App-footer">
        <Footer />
      </div>
      <Routes>
        <Route exact path={LOGIN} element={<Login />} />
        <Route exact path={DASHBOARD} element={<Home />} />
        <Route exact path={IMAGEUPLOAD} element={<UploadImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
