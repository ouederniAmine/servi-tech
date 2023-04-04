import "./newInspection.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import InspectionItemTable from "../../components/InspectionItemTable/InspectionItemTable";

const NewInspection = ({ inputs, title }) => {
  // get data from variable api endpoint

  const navigate = useNavigate();
  const [data, setData] = useState({
    num_facture :"",  'nom_client':"", 'adresse' :"",'date_inspection':0, 'appareil':0, 'emplacement':0, 'capacite':"", 'palan':"", 'manufacturier':"", 'model':"", 'serie':"", 'chaine':"", 'hauteur':0, 'charriot':0, commande_par:"", vc:"", vp:"",inscpecte_par:""
  });

  const sendData = () => {

    axios
      .post("/backend/api/inspections", data)
      .then((res) => {
        navigate("/app/inspections");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 


  return (
    <div className="single">
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        
      <form className="w-full max-w-lg">
      <h1 className="title">New Inspection:</h1>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      nom_client
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={data.nom_client} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        nom_client: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      adresse      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.adresse} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        adresse: e.target.value
      });
      
      }}/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      commande_par
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={data.commande_par} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        commande_par: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      inscpecte_par      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="UK" value={data.inscpecte_par} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        inscpecte_par: e.target.value
      });
      
      }}/>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      num_facture
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={data.num_facture} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        num_facture: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      date_inspection      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="UK" value={data.date_inspection} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        date_inspection: e.target.value
      });
      
      }}/>
    </div>
  </div>
 
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      appareil
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="RST LTD" value={data.appareil} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        appareil: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      emplacement     </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="UK" value={data.emplacement} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        emplacement: e.target.value
      });
      
      }}/>
    </div>
  </div>  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      capacite
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="RST" value={data.capacite} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        capacite: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      palan      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.palan} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        palan: e.target.value
      });
      
      }}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      manufacturier
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={data.manufacturier} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        manufacturier: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      model      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.model} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        model: e.target.value
      });
      
      }}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      serie
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={data.serie} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        serie: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      chaine      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.chaine} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        chaine: e.target.value
      });
      
      }}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
 
 
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
<br></br>
    <button type="button" onClick={(e)=>{e.preventDefault() ; sendData()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Inspection</button>
</div>
  </div> 

</form>
  
<form className="w-full">
      <InspectionItemTable/>


</form></div>
</div >   
      </div>
  
  
  
  );
};

export default NewInspection;