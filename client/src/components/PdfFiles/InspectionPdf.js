import React, { useState, useEffect , useRef} from "react";
import logo from "../../assets/logo white.png";
import "./FacturePdf.css";
import axios from "axios";
import {useReactToPrint} from 'react-to-print';


const InspectionPdf = () => {
  // get data from axios
  const [data, setData] = useState([{ "id": 1, "num_facture": 1, "nom_client": "Mohamed amine", "adresse": "tunis", "date_inspection": "El Ouederni", "appareil": "Mohamed amine", "emplacement": "El Ouederni", "capacite": "Mohamed amine", "palan": "El Ouederni", "manufacturier": "Mohamed amine", "model": "El Ouederni", "serie": "Mohamed amine", "chaine": "El Ouederni", "hauteur": "0", "charriot": "0", "commande_par": "Mohamed amine", "vp": "", "vc": "", "inscpecte_par": "El Ouederni" }]);
  // state InspectionItems
  
const [image , setImage] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      // get the id from the url
      const inspectionid = window.location.pathname.split("/")[3];
      const result = await axios(
        `/backend/api/inspections/${inspectionid}`,
      );
    
      const inspections = await axios(
        `/backend/api/inspection_tables/${inspectionid}`,
      );
      setData(result.data);
      setImage(inspections.data[0].data)
    };
    fetchData();
  }, []);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


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
          <h1  style={{marginLeft:"200px"}} className="text-xl font-bold ">Rapport D'inspection selon les spécifications du manufacturier</h1>
          <div className="flex justify-between p-4">
            <div>
              <h6 className="font-bold">Numero de facture : <span className="text-sm font-medium"> {data[0].num_facture}</span></h6>
              <h6 className="font-bold">Nom du Client : <span className="text-sm font-medium">  {data[0].nom_client}</span></h6>
            </div>
            <div className="w-40">
              <address className="text-sm">
                <span className="font-bold"> Adresse: </span>
                {data[0].adresse}
              </address>
            </div>
            <div className="w-40">
              <address className="text-sm">
                <span className="font-bold">Date Inspection :</span>
                {data[0].date_inspection}
              </address>
            </div>
            <div />
          </div>
          <div className="flex justify-between p-4">
            <h1>Inspecté par :  {data[0].inscpecte_par}</h1></div>
            <div className="flex">
          <div className="flex justify-center p-4">
            <div className="border-b border-gray-200 shadow">
              <table className>
                <thead className="bg-gray-50">
                  <tr className="px-6 py-4">
                    Renseignements du client
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Numéro de Facture : {data[0].num_facture}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Nom de Client : {data[0].nom_client}
                    </td>

                  </tr>
                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Adresse: {data[0].adresse}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500"> Date de l'inscription: {data[0].date_inspection} </div>
                    </td>


                  </tr>


                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-center p-4">
            <div className="border-b border-gray-200 shadow">
              <table className>
                <thead className="bg-gray-50">
                  <tr className="px-6 py-4">
                    Equipment
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Appareil : {data[0].appareil}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Emplacement :  {data[0].emplacement}
                    </td>

                  </tr>
                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Capacité : {data[0].capacite}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">Palan : {data[0].palan}</div>
                    </td>


                  </tr>
                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Manufacturier : {data[0].manufacturier}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">	Modèle : {data[0].model}</div>
                    </td>


                  </tr>
                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                       Série  : {data[0].serie}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">Chaine :  {data[0].chaine}</div>
                    </td>


                  </tr>

                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Hauteur : {data[0].hauteur}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">Charriot : {data[0].charriot}</div>
                    </td>


                  </tr>

                

                  <tr className="whitespace-nowrap">

                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        VP: {data[0].vp}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">VC:  {data[0].vc}   </div>
                    </td>
                  </tr>

                  <tr className="whitespace-nowrap">

<td className="px-6 py-4">
  <div className="text-sm text-gray-900">
    Commandé par :  {data[0].commande_par}
  </div>
</td>



</tr>
                </tbody>
              </table>
            </div>
          </div></div>
          <div className="flex justify-center p-4">
            <div className="border-b border-gray-200 shadow">
             <img src={image} style={{width:"750px"}} alt="hey"></img>
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

export default InspectionPdf;