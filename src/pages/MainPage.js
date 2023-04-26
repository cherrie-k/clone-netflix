import MainNavBar from "../Components/Navbars/MainNavBar";
import MainSecondNav from "../Components/Navbars/MainSecondNav";
import TempMain from "../Components/TempMain";

export default function MainPage() {
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
