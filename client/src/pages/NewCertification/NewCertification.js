import "./NewCertification.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";


const NewCertification = ({ inputs, title }) => {
  // get data from variable api endpoint
  const navigate = useNavigate();
  const [data, setData] = useState({
    inspection_date :"",  'company_usage':"", 'equipement' :"",'capacity':"", 'equipement_details':"", 'expiry':"", 'no_de_cert':"", 'responsable':"", 
  });

  const sendData = () => {

    axios
      .post("/backend/api/certifications", data)
      .then((res) => {
        navigate("/app/certifications");
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
      <h1 className="title">Edit client informations:</h1>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      inspection_date
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="inspection_date" value={data.inspection_date} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        inspection_date: e.target.value
      });
      
      }}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      company_usage      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="example@mail.com" value={data.company_usage} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        company_usage: e.target.value
      });
      
      }}/>
    </div>
  </div>

  

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      equipement
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="equipement" value={data.equipement} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        equipement: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      capacity      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="capacity" value={data.capacity} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        capacity: e.target.value
      });
      
      }}/>
    </div>
  </div>
 
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      equipement_details
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="equipement_details" value={data.equipement_details} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        equipement_details: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      expiry   </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="expiry" value={data.expiry} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        expiry: e.target.value
      });
      
      }}/>
    </div>
  </div>  <div className="flex flex-wrap -mx-3 mb-6">
    <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      No  de certification
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="numéro" value={data.no_de_cert} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        no_de_cert: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      responsable    </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="responsable" value={data.responsable} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        responsable: e.target.value
      });
      
      }}/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
 
 
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
<br></br>
    <button type="button" onClick={(e)=>{e.preventDefault() ; sendData()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Certification</button>
</div>
  </div> 

</form>
  
    </div>
</div >   
      </div>
  
  
  );
};

export default NewCertification;