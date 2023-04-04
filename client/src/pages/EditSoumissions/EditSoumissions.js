import "./EditSoumissions.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

const EditSoumissions = ({ inputs, title }) => {
  // get data from variable api endpoint
  const navigate = useNavigate();
  const [data, setData] = useState({
    company :"",  'adresse':"", 'contact' :"",'tel':"0", 'sujet':""
  });


  const sendData = () => {
    let clientId = window.location.pathname.split("/")[4];
    axios
      .put("/backend/api/soumissions/" +clientId, data)
      .then((res , err) => {
        console.log(res);
        console.log(err);
        navigate("/app/soumissions/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  useEffect(() => {
    let clientId = window.location.pathname.split("/")[4];
   
      axios
      .get("/backend/api/client/"+clientId)
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


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
      company
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={data.company} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        company: e.target.value
      });
      
      }}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
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
      contact
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="RS" value={data.contact} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        contact: e.target.value
      });
      
      }}/>
    </div>
    <div className=" md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      tel      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="123456" value={data.tel} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        tel: e.target.value
      });
      
      }}/>
    </div>
  </div>
  <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      sujet      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.sujet} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        sujet: e.target.value
      });
      
      }}/>
    </div>
  
  <div className="flex flex-wrap -mx-3 mb-6">
 
 
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
<br></br>
    <button type="button" onClick={(e)=>{e.preventDefault() ; sendData()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit Soumission</button>
</div>
  </div> 

</form>
  </div>
</div >   
      </div>
  
  
  
 
  );
};

export default EditSoumissions;