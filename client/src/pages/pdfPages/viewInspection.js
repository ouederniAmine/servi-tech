import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

import InspectionPdf from "../../components/PdfFiles/InspectionPdf";
const ViewInspection = ({ inputs, title }) => {
  // get data from variable api endpoint
  

  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
    <InspectionPdf></InspectionPdf>
</div >   
      </div>
  
  
  
 );
};

export default ViewInspection;