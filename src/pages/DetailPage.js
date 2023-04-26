import DetailNavBar from "../Components/Navbars/DetailNavBar";
import TempDetail from "../Components/TempDetail";

export default function DetailPage() {
  return (
    <div className="App">
      <DetailNavBar />
      <div style={{ margin: "0", padding: "0", background: "salmon" }}>
        <TempDetail />
      </div>
    </div>
  );
}
