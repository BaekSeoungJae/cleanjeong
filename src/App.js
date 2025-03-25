import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CleanJeong from "./pages/CleanJeong";
import Introduce from "./pages/Introduce";
import CommonForm from "./pages/CommonForm";
import Pageone from "./pages/PageOne";
import PageCompletion from "./pages/PageCompletion";
import PageSpecial from "./pages/PageSpecial";
import PageShop from "./pages/PageShop";
// import PageHelp from "./pages/PageHelp";
import PageEx from "./pages/PageEx";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.gtag) {
        console.log("✅ gtag 로딩 완료됨!");
        clearInterval(interval);
      } else {
        console.log("❌ 아직 gtag 없음");
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CommonForm />}>
            <Route path="/" element={<CleanJeong />} />
            <Route path="/intro" element={<Introduce />} />
            <Route path="/houseclean" element={<Pageone />} />
            <Route path="/completion" element={<PageCompletion />} />
            <Route path="/special" element={<PageSpecial />} />
            <Route path="/shop" element={<PageShop />} />
            {/* <Route path="/help" element={<PageHelp />} /> */}
            <Route path="/ex" element={<PageEx />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
