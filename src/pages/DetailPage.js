import DetailNavBar from "../Components/Navbars/DetailNavBar";
import DetailSecondNav from "../Components/Navbars/DetailSecondNav";
import TempDetail from "../Components/TempDetail";

export default function DetailPage() {
  return (
    <div className="App">
      <DetailNavBar />
      <DetailSecondNav />
      <div
        className="container"
        style={{ margin: "0", padding: "0", background: "salmon" }}
      >
        <TempDetail />
      </div>
    </div>
  );
}
