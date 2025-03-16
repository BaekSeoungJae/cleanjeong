import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CleanJeong from "./pages/CleanJeong";
import Introduce from "./pages/Introduce";
import CommonForm from "./pages/CommonForm";
import Pageone from "./pages/PageOne";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CommonForm />}>
            <Route path="/" element={<CleanJeong />} />
            <Route path="/intro" element={<Introduce />} />
            <Route path="/houseclean" element={<Pageone />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
