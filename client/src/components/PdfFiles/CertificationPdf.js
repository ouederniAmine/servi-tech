
import React from "react";
import { useState  , useEffect, useRef} from "react";
import axios from "axios";
import logo from "../../assets/logo white.png";
import {useReactToPrint} from 'react-to-print';
import "./CertificationPdf.css";

const CertificationPdf = (props) => {
  const [data, setData] = useState([{"id":7,"inspection_date":"mohamed","company_usage":"tunis","equipement":"mohamed","capacity":"tunis","equipement_details":"Mohamed amine","expiry":"El Ouederni","no_de_cert":"Mohamed amine","responsable":"El Ouederni"}]);
  // state InspectionItems
const componentRef = useRef();
const handlePrint = useReactToPrint({
  content: () => componentRef.current,
});

  useEffect(() => {
    const fetchData = async () => {
      // get the id from the url
      const inspectionid = window.location.pathname.split("/")[3];
      const result = await axios(
        `/backend/api/certifications/${inspectionid}`,
      );
    
      setData(result.data);
    };
    fetchData();
  }, []);
  
  return (<>
<div className="cert-container" ref={componentRef}>
  <div className="border-gray">
    <div className="border-red">
      <div className="content">
        <img id="mt-logo" src={logo} alt="Logo Goes Here" />
        <ul className="credentials">
          <li>
            <p id="cert-id">119 Boulevard Ste-Rose

</p>
          </li>
          <li>
            <p id="host-server-id">Laval, Quebec H7L 3J7</p>
          </li>
          <li>
            <p id="lms-id">Telephone : 514-833-0724</p>
          </li>
        </ul>
     
        <div className="copytext-container">
          
          <div className="congrats-copytext">
            <h1 style={{fontSize:"30px"}}>CERTIFICATION</h1><br />
            <h2>CET APPAREIL A ETE INSPECTE AU {data[0].inspection_date}</h2><br />
            <h3 >EN USAGE CHEZ {data[0].inspection_date}</h3><br></br>
            <h3 >NOUS VOUS EMETTONS UN CERTIFICAT DE CONFORMITE POUR L'EQUIPEMENT {data[0].equipement}</h3>
          </div>
          <div className="course-copytext">
          
            <h2 > SOIT {data[0].equipement_details.toUpperCase()}   AVEC UNE CAPACITE DE  {data[0].capacity.toUpperCase()} 
</h2><br />
            <h3 id="course-id-string">CONSIDER CONFORME AUX NORMES ASME B30.2,ACNOR B167-08,RSST254.1,1509926.1

</h3><br></br><h3>AINSI QU’AU CODE D’ELECTRICITE DU QUEBEC
</h3><br></br>
<h3>EN VERTU DE NOTRE COMPETENCE UN CERTIFICAT DE CONFROMITE EXPIRE AU MOIS DE {data[0].expiry}
</h3><br></br><h3>NO.DE CERT  {data[0].no_de_cert}

</h3><br></br><h3>PAR LE RESPONSADLE {data[0].responsable}
</h3>
          </div>
  =
        </div>
      </div>
    </div>
    
  </div>
  
</div>
<div className="p-4">
            <div className="flex items-end justify-end space-x-3">
              <button className="px-4 py-2 text-sm text-green-600 bg-green-100" onClick={(e)=>{e.preventDefault() ; handlePrint()}}>Download pdf</button>
            </div>
          </div>

</>

  );
};

export default CertificationPdf;