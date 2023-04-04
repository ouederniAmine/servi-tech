import "./NewFacture.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

import FactureItemTable from "../../components/FactureItemTable/FactureItemTable";
const NewFacture = ({ inputs, title }) => {
  // get data from variable api endpoint
  const navigate = useNavigate();
  const [data, setData] = useState({
    date_soumis :"",  'facture_a':"", 'adresse' :"",'telephone':"", 'site_web':"", 'sous_total':"", 'tps':"", 'tvq':"", 'total':""
  });

  const sendData = () => {
    axios
      .post("/backend/api/facture", data)
      .then((res) => {
        navigate("/app/factures");
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
      <h1 className="title">New Facture informations:</h1>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      date_soumis      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={data.date_soumis} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        date_soumis: e.target.value
      });
      
      }}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      facture_a      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.facture_a} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        facture_a: e.target.value
      });
      
      }}/>
    </div>
  </div>

  

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      adresse
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="RST" value={data.adresse} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        adresse: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      telephone      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="telephone" value={data.telephone} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        telephone: e.target.value
      });
      
      }}/>
    </div>
  </div>
 
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      site_web
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="website" value={data.site_web} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        site_web: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      sous_total     </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="UK" value={data.sous_total} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        sous_total: e.target.value
      });
      
      }}/>
    </div>
  </div>  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      tps
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="RST" value={data.tps} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        tps: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      tvq    </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="tvq" value={data.tvq} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        tvq: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      total    </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="total" value={data.total} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        total: e.target.value
      });
      
      }}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
 
 
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
<br></br>
    <button type="button" onClick={(e)=>{e.preventDefault() ; sendData()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Facture</button>
</div>
  </div> 

</form>
<form className="w-full">
      <FactureItemTable/>


</form>
  
  
     </div>
</div >   
      </div>
  
  
  
  
  );
};

export default NewFacture;