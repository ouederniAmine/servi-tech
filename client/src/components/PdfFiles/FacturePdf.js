
import React from "react";
import { useState  , useEffect , useRef} from "react";
import axios from "axios";
import logo from "../../assets/logo white.png";
import {useReactToPrint} from 'react-to-print';
import "./FacturePdf.css";

const FacturePdf = (props) => {


  const [data, setData] = useState([{"id":3,"date_soumis":"tunis","facture_a":"55270820","adresse":"tunis","telephone":"55270820","site_web":"Mohamed amine","sous_total":"El Ouederni","tps":"Mohamed amine","tvq":"El Ouederni","total":""}]);
  // state InspectionItems
  const [factureItems, setFactureItems] = useState([{ descrip :"",
    unit :"",
    prix :""}]);
    const componentRef = useRef();
const handlePrint = useReactToPrint({
  content: () => componentRef.current,
});

  useEffect(() => {
    const fetchData = async () => {
      // get the id from the url
      const inspectionid = window.location.pathname.split("/")[3];
      const result = await axios(
        `/backend/api/factures/${inspectionid}`,
      );
      const newFactureItems = await axios(
        `/backend/api/facture_item/${inspectionid}`,
      );
      setFactureItems(newFactureItems.data);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (<>
  <div ref={componentRef}>
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-3/5 bg-white shadow-lg">
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
          <h6 className="font-bold">Telephone : <span className="text-sm font-medium"> {data[0].telephone}</span></h6>
          <h6 className="font-bold">Nom du Client : <span className="text-sm font-medium"> {data[0].facture_a}</span></h6>
        </div>
        <div className="w-40">
          <address className="text-sm">
            <span className="font-bold"> Adresse: </span>
            {data[0].adresse}
          </address>
        </div>
        <div className="w-40">
          <address className="text-sm">
            <span className="font-bold">Date Soumis :</span>
            {data[0].date_soumis}
          </address>
        </div>
        <div />
      </div>
      <div className="flex justify-center p-4">
        <div className="border-b border-gray-200 shadow">
          <table className>
            <thead className="bg-gray-50">
              <tr>
              
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Description
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Unité 
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Prix
                </th>
                <th className="px-4 py-2 text-xs text-gray-500 ">
                  Montant
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
               
            {factureItems.map((item , i) => (
                      <tr key={i} className="whitespace-nowrap">
                      
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                        {item.descrip}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500"> {item.unit}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                      {item.prix}
                      </td>
                      <td className="px-6 py-4">
                      {parseInt( item.unit) * parseInt(item.prix)}
                      </td>
                    </tr>
                  ))  

                        }

            
              <tr >
                <td colSpan={3} />
                <td className="text-sm font-bold">Sous Total</td>
                <td className="text-sm font-bold tracking-wider"><b> {data[0].sous_total}</b></td>
              </tr>
              {/*end tr*/}
              <tr>
                <th colSpan={3} />
                <td className="text-sm font-bold"><b>Tps 5%</b></td>
                <td className="text-sm font-bold"><b> {data[0].tps}</b></td>
              </tr>
              <tr>
                <th colSpan={3} />
                <td className="text-sm font-bold"><b>TVQ 9%</b></td>
                <td className="text-sm font-bold"><b> {data[0].tvq}</b></td>
              </tr>
              {/*end tr*/}
              <tr className="text-white bg-gray-800">
                <th colSpan={3} />
                <td className="text-sm font-bold"><b>Total</b></td>
                <td className="text-sm font-bold"><b> {data[0].total}</b></td>
              </tr>
              {/*end tr*/}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-0.5 bg-indigo-500" />
      <div className="p-4">
       
        <div className="flex items-end justify-end space-x-3">
          <button className="px-4 py-2 text-sm text-green-600 bg-green-100">Print</button>
          
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

export default FacturePdf;