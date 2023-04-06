import React , { useState, useEffect , useRef} from "react";
import logo from "../../assets/logo white.png";
import "./FacturePdf.css";
import {useReactToPrint} from 'react-to-print';
import axios from "axios";

const SoumissionPdf = (props) => {
  const [data, setData] = useState([{ "id": 1, "num_facture": 1, "nom_client": "Mohamed amine", "adresse": "tunis", "date_inspection": "El Ouederni", "appareil": "Mohamed amine", "emplacement": "El Ouederni", "capacite": "Mohamed amine", "palan": "El Ouederni", "manufacturier": "Mohamed amine", "model": "El Ouederni", "serie": "Mohamed amine", "chaine": "El Ouederni", "hauteur": "0", "charriot": "0", "commande_par": "Mohamed amine", "vp": "", "vc": "", "inscpecte_par": "El Ouederni" }]);
  // state InspectionItems
  const [soumissionItems , setSoumissionItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // get the id from the url
      const inspectionid = window.location.pathname.split("/")[3];
      const result = await axios(
        `/backend/api/soumissions/${inspectionid}`,
      );
      const inspectionItems = await axios(
        `/backend/api/soumission_items/${inspectionid}`,
      );
      setSoumissionItems(inspectionItems.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  
  return (
    <>
  <div>
  <div className="flex items-center justify-center min-h-screen bg-gray-100" >
    <div className="w-3/5 bg-white shadow-lg"  ref={componentRef}> 
      <div className="flex justify-between p-4">
        <div> 
          <img src={logo} alt="logo"/>

        </div>
        <div className="p-2">
          <ul className="flex">
            <li className="flex flex-col items-center p-2 border-l-2 border-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-sm">
                www.servi-tech.ca
              </span>
              
            </li>
            <li className="flex flex-col p-2 border-l-2 border-indigo-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">
              71 Rue Gaston-Dumoulin local 105, Blainville QC J7C 6B4, Canada
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-0.5 bg-indigo-500" />
      <div className="flex justify-between p-4">
        <div>
          <h6 className="font-bold">Company : <span className="text-sm font-medium"> {data[0].company}</span></h6>
          <h6 className="font-bold">adresse : <span className="text-sm font-medium"> {data[0].adresse}</span></h6>
        </div>
        <div className="w-40">
          <address className="text-sm">
            <span className="font-bold"> Telephone: </span>
            {data[0].tel}
          </address>
        </div>
        <div className="w-40">
          <address className="text-sm">
            <span className="font-bold"> Date: </span>
            {// get date from js
              new Date().toLocaleDateString()

            
            }
          </address>
        </div>
        
        
        <div />
      </div>
      <div className="flex justify-center p-4">
        <div className="border-b border-gray-200 shadow">
        <h1 style={{fontSize:"2rem"}}>Sujet : {data[0].sujet}</h1>

          <table className>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  #
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Description
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Pièces 
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Main D'oeuvre
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {soumissionItems.map((item, index) => (
                 <tr className="whitespace-nowrap">
                 <td className="px-6 py-4 text-sm text-gray-500">
                   {item.id}
                 </td>
                 <td className="px-6 py-4">
                   <div className="text-sm text-gray-900">
                    {item.descri}
                   </div>
                 </td>
                 <td className="px-6 py-4">
                   <div className="text-sm text-gray-500">  {item.pieces}</div>
                 </td>
                 <td className="px-6 py-4 text-sm text-gray-500">
                 {item.oeuvre}
                 </td>
                 <td className="px-6 py-4">
                 {item.total}
                 </td>
               </tr>))  
                }
           
           
          
              <tr className>
                <td colSpan={3} />
                <td className="text-sm font-bold">Sous Total</td>
                <td className="text-sm font-bold tracking-wider"><b>$950</b></td>
              </tr>
              {/*end tr*/}
          
              {/*end tr*/}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-0.5 bg-indigo-500" />
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

export default SoumissionPdf;