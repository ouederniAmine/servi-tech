import "./NewInspectionItem.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";

import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'

const NewInspectionItem = ({ inputs, title }) => {
  // get data from variable api endpoint
  const navigate = useNavigate();
  const [data, setData] = useState({
    nom  :"",  'palan':"false", 'chariot' :"false",'pont':"false" , img:"",inspections_id:""
  });

  const sendData = () => {
    // get id from url
    const id = window.location.pathname.split("/")[4];
    const type = window.location.pathname.split("/")[3];
    axios
      .post("/backend/api/inscpection_item/"+id , data)
      .then((res) => {
        navigate("/app/inspections/"+type+"/"+id);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 

  return (
   
    <div className="single">   <WidgetLoader />
    <Sidebar />
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        
      <form className="w-full max-w-lg">


      
<div>
  <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Inspections</h3>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      nom
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="100" value={data.nom} onChange={ (e)=>{e.preventDefault();  setData({
        ...data, 
        nom: e.target.value
      });
      
      }}/>
    </div>
 
  </div>
  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input id="vue-checkbox-list" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
        onChange={(e)=>{e.preventDefault(); setData({
          ...data, 
          palan: e.target.checked
        });}}
        />
        <label htmlFor="vue-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Palan</label>
      </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input id="react-checkbox-list" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"   onChange={(e)=>{e.preventDefault(); setData({
          ...data, 
          chariot: e.target.checked
        });}}/>
        <label htmlFor="react-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Chariot</label>
      </div>
    </li>
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center pl-3">
        <input id="angular-checkbox-list" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
          onChange={(e)=>{e.preventDefault(); setData({
            ...data, 
            pont: e.target.checked
          });}}/>
        <label htmlFor="angular-checkbox-list" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pont</label>
      </div>
    </li>
  
  </ul>
</div>


  
  
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      img
      </label>
      <Widget
        sources={['local', 'camera']} // set the sources available for uploading -> by default
        // all sources are available. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
    // add source keys
        // and ID's as an object. More information on their use can be found at
        // https://cloudinary.com/documentation/upload_widget#the_sources_parameter
        resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={'dmwm7mymx'} // your cloudinary account cloud name.
        // Located on https://cloudinary.com/console/
        uploadPreset={'fsbmxjvl'} // check that an upload preset exists and check mode is signed or unisgned
        buttonText={'Upload Photo'} // default 'Upload Files'
        style={{
              color: 'white',
              border: 'none',
              width: '120px',
              backgroundColor: 'green',
              borderRadius: '4px',
              height: '25px'
            }} // inline styling only or style id='cloudinary_upload_button'
        folder={'inspections'} // set cloudinary folder name to send file
        cropping={false} // set ability to crop images -> default = true
        // https://support.cloudinary.com/hc/en-us/articles/203062071-How-to-crop-images-via-the-Upload-Widget-#:~:text=Click%20on%20the%20%22Edit%22%20link,OK%22%20and%20Save%20the%20changes.
        // more information here on cropping. Coordinates are returned or upload preset needs changing
        multiple={true} // set to false as default. Allows multiple file uploading
        // will only allow 1 file to be uploaded if cropping set to true
        autoClose={false} // wil  l close the widget after s  uccess. Default true
        onSuccess={(e)=>{setData({
          ...data, 
          img: e.info.url
        })}} // add success callback -> returns result
        onFailure={(e)=>{console.log(e)}} // add failure callback -> returns 'response.error' + 'response.result'
        logging={false} // logs will be provided for success and failure messages,
        // set to false for production -> default = true
        customPublicId={'sample'} // set a specific custom public_id.
        // To use the file name as the public_id use 'use_filename={true}' parameter
        eager={'w_400,h_300,c_pad|w_260,h_200,c_crop'} // add eager transformations -> deafult = null
        use_filename={false} // tell Cloudinary to use the original name of the uploaded
        // file as its public ID -> default = true,

        widgetStyles={{
          palette: {
            window: '#737373',
            windowBorder: '#FFFFFF',
            tabIcon: '#FF9600',
            menuIcons: '#D7D7D8',
            textDark: '#DEDEDE',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#B3B3B3',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#909090'
          },
          fonts: {
            default: null,
            "'Fira Sans', sans-serif": {
              url: 'https://fonts.googleapis.com/css?family=Fira+Sans',
              active: true
            }
          }
        }} // ability to customise the style of the widget uploader
        destroy={true} // will destroy the widget on completion


    

      />    </div>
 
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
 
 
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
<br></br>
    <button type="button" onClick={(e)=>{e.preventDefault() ; sendData()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">New Inspection Item</button>
</div>
  </div> 

</form>
  
     </div>
</div >   
      </div>
  
  
  
  
  );
};

export default NewInspectionItem;