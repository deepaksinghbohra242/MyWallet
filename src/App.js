import "./App.css";
import Dashboard from "./components/dashboardOperations/Dashboard";
import DashboardItems from "./components/dashboardOperations/DashboardItems";
import Nav from "./components/shared/Nav";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/dashitem' element={<DashboardItems />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
