import Sidebar from "../../components/sidebar/sidebar"; 
import "./FacturePage.css"
import Navbar from "../../components/navbar/navbar";
import FactureTable from "../../components/FactureTable/FactureTable";
const FacturePage = () => {
  




  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singleTitleContainer">
        <FactureTable></FactureTable>    </div>
     
      </div>
    </div>
  );
};

export default FacturePage;