import MainNavBar from "./Components/Navbars/MainNavBar";
import TempMain from "./Components/TempMain";

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <div
        className="container"
        style={{ margin: "0", padding: "0", background: "salmon" }}
      >
        <div>Learn REACT</div>
        <TempMain />
      </div>
    </div>
  );
}

export default App;
