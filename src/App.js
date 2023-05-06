import MainPage from "./pages/MainPage";
import "./Styles/globals.css";
import "./Styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import HelpPage from "./pages/HelpPage";
import ReduxPractice from "./pages/ReduxPractice";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/redux-practice" element={<ReduxPractice />} />
          {/* <DetailPage /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
