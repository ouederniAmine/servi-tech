import "./NewSoumissionItem.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";


const NewSoumissionItem = ({ inputs, title }) => {
  // get data from variable api endpoint
  const navigate = useNavigate();
  const [data, setData] = useState({
    descri :"",  'pieces':"", 'oeuvre' :"",'total':"" ,"soumission_id" :""
  });

  const sendData = () => {
    // get id from url
    const id = window.location.pathname.split("/")[4];
    const type = window.location.pathname.split("/")[3];
        axios
      .post("/backend/api/soumission_items/"+id , data)
      .then((res) => {
        navigate("/app/soumissions/"+type+"/"+id);
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
      <h1 className="title">New Soumission Item:</h1>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      descri      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" value={data.descri} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        descri: e.target.value
      });
      
      }}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
      pieces      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={data.pieces} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        pieces: e.target.value
      });
      
      }}/>
    </div>
  </div>

  

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      oeuvre
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="100" value={data.oeuvre} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        oeuvre: e.target.value
      });
      
      }}/>
    </div>
 
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      total
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="100" value={data.total} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        total: e.target.value
      });
      
      }}/>
    </div>
 
  </div>

 

  <div className="flex flex-wrap -mx-3 mb-6">
 
 
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
<br></br>
    <button type="button" onClick={(e)=>{e.preventDefault() ; sendData()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Soumission Item</button>
</div>
  </div> 

</form>
  
     </div>
</div >   
      </div>
  
  
  
  
  );
};

export default NewSoumissionItem;