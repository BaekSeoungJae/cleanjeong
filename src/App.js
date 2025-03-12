import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CleanJeong from "./pages/CleanJeong";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<CleanJeong />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
