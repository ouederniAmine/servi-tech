import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import SoumissionPdf from "../../components/PdfFiles/SoumissionPdf";
const ViewSoumission = ({ inputs, title }) => {
  // get data from variable api endpoint


  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
    <SoumissionPdf></SoumissionPdf>
</div >   
      </div>
  
  
  
 );
};

export default ViewSoumission;