import "./App.css";
import "./sidebar/SideMenu.css";
import "./home/Home.css";

import SideMenu from "./sidebar/SideMenu";
import Home from "./home/Home";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Community = () => {
  return <h1>community</h1>;
};

export default function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <h1 className="App">
      <Router>
        <SideMenu onCollapse={(inactive) => setInactive(inactive)} />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/community"} element={<Community />}></Route>
          </Routes>
        </div>
      </Router>
    </h1>
  );
}
