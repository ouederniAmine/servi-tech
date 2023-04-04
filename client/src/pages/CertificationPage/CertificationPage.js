import Sidebar from "../../components/sidebar/sidebar"; 
import "./CertificationPage.css"
import Navbar from "../../components/navbar/navbar";
import CertificationTable from "../../components/CertificationTable/CertificationTable";
const CertificationPage = () => {
  

  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singleTitleContainer">
        <CertificationTable></CertificationTable></div>
      </div>
    </div>
  );
};

export default CertificationPage;