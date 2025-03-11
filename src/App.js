import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import TossPage from "./pages/TossPage";
import TossClone from "./pages/TossClone";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<TossClone />} />
            <Route path="/toss" element={<TossPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
