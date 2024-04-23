import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import EditTask from "./pages/EditTask";
import AllTask from "./pages/AllTask";
import NewTask from "./pages/NewTask";
// import Rootlayout from "./layouts/Rootlayout";
import Error404 from "./pages/Error404";
import { AuthProvider } from "./context/AuthContext";
import Navbar1 from "./pages/components/Navbar1";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar1 />
          <Routes>
            {/* <Route element={<Rootlayout />}> */}
            <Route path="/" element={<CoverPage />} />
            <Route path="/tasks" element={<AllTask />} />
            <Route path="/new" element={<NewTask />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="*" element={<Error404 />} />
            {/* </Route> */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
