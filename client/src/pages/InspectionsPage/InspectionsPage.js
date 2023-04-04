import Sidebar from "../../components/sidebar/sidebar"; 
import "./InspectionsPage.css"
import Navbar from "../../components/navbar/navbar";
import InspectionsTable from "../../components/InspectionsTable/InspectionsTable";
const InspectionsPage = () => {
  




  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singleTitleContainer">
        <InspectionsTable></InspectionsTable>    </div>
     
      </div>
    </div>
  );
};

export default InspectionsPage;