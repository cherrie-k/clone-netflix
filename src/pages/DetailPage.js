import DetailNavBar from "../Components/Navbars/DetailNavBar";
import DetailSecondNav from "../Components/Navbars/DetailSecondNav";
import TempMain from "../Components/TempMain";

export default function DetailPage() {
  return (
    <div className="App">
      <DetailNavBar />
      <div>THIS IS DETAIL PAGE</div>
      <div>THIS IS DETAIL PAGE</div>
      <div>THIS IS DETAIL PAGE</div>
      <div>THIS IS DETAIL PAGE</div>
      <DetailSecondNav />
      <div
        className="container"
        style={{ margin: "0", padding: "0", background: "salmon" }}
      >
        <TempMain />
      </div>
    </div>
  );
}
