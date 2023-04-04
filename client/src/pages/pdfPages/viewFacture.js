import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";

import FacturePdf from "../../components/PdfFiles/FacturePdf";
const ViewFacture = ({ inputs, title }) => {
  // get data from variable api endpoint
  


  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
    <FacturePdf></FacturePdf>
</div >   
      </div>
  
  
  
 );
};

export default ViewFacture;