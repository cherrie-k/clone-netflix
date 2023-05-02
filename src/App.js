import MainPage from "./pages/MainPage";
import "./Styles/globals.css";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/reset.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/login" element={<DetailPage />}></Route>
          {/* <DetailPage /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
