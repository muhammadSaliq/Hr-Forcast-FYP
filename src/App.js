import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homeapage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";

function App() {
  return (
    <div>

          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/login"} element={<Login />} />


            </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
