import "./App.css";
import Login from "./components/login/login.";
import UploadImage from "./components/uploadimages/uploadimage";
import PatientSearch from "./components/patient360search/patientsearch";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  DASHBOARD,
  LOGIN,
  BASE,
  IMAGEUPLOAD,
  PATIENTSEARCH,
} from "./common/constant";
import Footer from "./components/reusable/footer";
import withAuthCheck from "./components/reusable/withAuthenticationCheck";
import home from "./components/home/home";
import dashboard from "./components/dashboard/dashboard";
import Header from "./components/reusable/header";
import PageNotFound from "./components/reusable/pageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <div className="App-footer">
        <Footer />
      </div>
      <Routes>
        <Route exact path={BASE} Component={withAuthCheck(home)} />
        <Route exact path={LOGIN} element={<Login />} />
        <Route exact path={DASHBOARD} Component={withAuthCheck(dashboard)} />
        <Route
          exact
          path={IMAGEUPLOAD}
          // Component={withAuthCheck(UploadImage)}
          element={<UploadImage />}
        />
        <Route path="*" element={<PageNotFound />} />
        <Route exact path={IMAGEUPLOAD} element={<UploadImage />} />
        <Route exact path={PATIENTSEARCH} element={<PatientSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
