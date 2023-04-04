import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

import CertificationPdf from "../../components/PdfFiles/CertificationPdf";
const ViewCertification = ({ inputs, title }) => {



  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
    <CertificationPdf></CertificationPdf>
</div >   
      </div>
  
  
  
 );
};

export default ViewCertification;