import Sidebar from "../../components/sidebar/sidebar"; 
import "./SoumissionsPage.css"
import Navbar from "../../components/navbar/navbar";
import SoumissionsTable from "../../components/SoumissionsTable/SoumissionsTable";
const SoumissionsPage = () => {
  




  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singleTitleContainer">
        <SoumissionsTable></SoumissionsTable>    </div>
     
      </div>
    </div>
  );
};

export default SoumissionsPage;