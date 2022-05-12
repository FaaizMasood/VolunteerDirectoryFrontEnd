import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListVolunteerComponent from "./components /ListVolunteerComponent";
import HeaderComponent from "./components /HeaderComponent";
import FooterComponent from "./components /FooterComponent";
import CreateVolunteerComponent from "./components /CreateVolunteerComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListVolunteerComponent />} />
            <Route path="/volunteers" element={<ListVolunteerComponent />} />
            <Route
              path="/add-volunteers"
              element={<CreateVolunteerComponent />}
            />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
