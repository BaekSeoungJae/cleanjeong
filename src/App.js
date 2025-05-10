import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import CleanJeong from "./pages/CleanJeong";
import Introduce from "./pages/Introduce";
import CommonForm from "./pages/CommonForm";
import Pageone from "./pages/PageOne";
import PageCompletion from "./pages/PageCompletion";
import PageSpecial from "./pages/PageSpecial";
import PageShop from "./pages/PageShop";
// import PageHelp from "./pages/PageHelp";
import PageEx from "./pages/PageEx";
import NewMainPage from "./pages/NewMainPage";
import PopupAd from "./pages/PopupAd";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CommonForm />}>
            <Route path="/" element={<NewMainPage />} />
            <Route path="/intro" element={<Introduce />} />
            <Route path="/houseclean" element={<Pageone />} />
            <Route path="/completion" element={<PageCompletion />} />
            <Route path="/special" element={<PageSpecial />} />
            <Route path="/shop" element={<PageShop />} />
            {/* <Route path="/help" element={<PageHelp />} /> */}
            <Route path="/ex" element={<PageEx />} />
          </Route>
          <Route path="/popup" element={<PopupAd />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
