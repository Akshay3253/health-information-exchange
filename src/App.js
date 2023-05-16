import "./App.css";
import Login from "./components/login/login.";
import Home from "./components/home/home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { DASHBOARD, LOGIN } from "./common/constant";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={DASHBOARD}>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path={LOGIN} element={<Login />} />
        <Route exact path={DASHBOARD} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
