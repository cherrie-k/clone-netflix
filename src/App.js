import MainPage from "./pages/MainPage";
import "./Styles/globals.css";
import "./Styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          {/* <DetailPage /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
