import "./InspectionItemTable.css";

import React from "react";
import {  useEffect ,createRef ,useState} from "react";
import axios from "axios";

import { useScreenshot } from 'use-react-screenshot'

import ProgressBar from "@ramonak/react-progress-bar";


const InspectionItemTable = (props) => {

  // get id from url

  // send data to cloudinary
  const [progress , setProgress] = useState(0)
 
    const [image, takeScreenshot] = useScreenshot()
    const [imgs, setImgs] = useState(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']);
    // receives array of files that are done uploading when submit button is clicked
   
    const addImg = (e,i) => {
      setImgs(imgs.map((img, index) => index === i ? URL.createObjectURL(e.target.files[0]) : img));}

      const ref = createRef(null)

//use effect when image changes
  useEffect(() => {
    takeScreenshot(ref.current) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgs]);
  const getImage = () => {
    const formData = new FormData();
   
    formData.append("file", image);    formData.append("api_key",'868849517142778');
    formData.append("upload_preset", "userimg");
   
    const config = {
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        setProgress(percentCompleted)
      }
    } 
    axios
      .post(
        "https://api.cloudinary.com/v1_1/ouedernidev/image/upload",
        formData,config
      ) 
      .then((res) => {
        
      
      const id = window.location.pathname.split("/")[4];
      // post data to database
      console.log(res.data.url)
      axios
        .post( `/backend/api/inspection_tables/${id}`, {data:res.data.url} )
        .then((res) => {
          console.log(res);
          alert("Data saved successfully");
        })
        .catch((err) => {
          console.log(err);
        });

      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Inspection Items
        <div>


        </div>
      </div>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e)=>{e.preventDefault();getImage() ; setProgress(1)}}>Upload infos</button>
     {progress > 0 && <ProgressBar completed={progress} bgcolor="#6a1b9a" height="20px" labelSize="0px" labelColor="#6a1b9a" baseBgColor="#e0e0de" labelAlignment="center" isLabelVisible={false} />}
      <table ref={ref}>
        <thead>
          <tr><th style={{width:"10px"}}>Num</th>
            <th>Appareil</th>
            <th>Palan</th>
            <th>Chariot</th>
            <th>Pont</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Frein 
  <br></br> <br></br>
{imgs[0] ? <img src={imgs[0]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,0)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-000 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>

            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue clas sName="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>25</td>
            <td>anti-chute
  <br></br> <br></br>{imgs[24] ? <img src={imgs[24]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,24)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"   onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"   onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"   onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Câble de levage
  <br></br> <br></br>{imgs[1] ? <img src={imgs[1]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
    onChange={(e)=>{
      e.preventDefault();
      addImg(e,1)
    }}
    
    />}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>26</td>
            <td>chemin de roulement
  <br></br> <br></br>{imgs[25] ? <img src={imgs[25]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,25)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Chaîne de levage
  <br></br> <br></br>{imgs[2] ? <img src={imgs[2]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
    onChange={(e)=>{
      e.preventDefault();
      addImg(e,2)
    }}
    
    />}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>27</td>
            <td>poutre-maitresse
  <br></br> <br></br>{imgs[26] ? <img src={imgs[26]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,26)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Guide-câble
  <br></br> <br></br>{imgs[3] ? <img src={imgs[3]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
    onChange={(e)=>{
      e.preventDefault();
      addImg(e,3)
    }}
    
    />}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>28</td>
            <td>etiquette de capacite
  <br></br> <br></br>{imgs[27] ? <img src={imgs[27]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
    onChange={(e)=>{
      e.preventDefault();
      addImg(e,27)
    }}
    
    />}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Guide-chaîne
  <br></br> <br></br>{imgs[4] ? <img src={imgs[4]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-500 file:text-white
      hover:file:bg-blue-600
    "
    onChange={(e)=>{
      e.preventDefault();
      addImg(e,4)
    }}
    
    />}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>29</td>
            <td>disjoncteur principal
  <br></br> <br></br>{imgs[28] ? <img src={imgs[28]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,28)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Panier à chaîne
  <br></br> <br></br>{imgs[5] ? <img src={imgs[5]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,5)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>30</td>
            <td>panneau d'alimentation
  <br></br> <br></br>{imgs[29] ? <img src={imgs[29]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,29)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Crochet de levage
  <br></br> <br></br>{imgs[6] ? <img src={imgs[6]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,6)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>31</td>
            <td>demarreur-inverseur
  <br></br> <br></br>{imgs[30] ? <img src={imgs[30]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,30)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Crochet-suspension
  <br></br> <br></br>{imgs[7] ? <img src={imgs[7]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,7)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>32</td>
            <td>contacteur pric. (M.C.)
  <br></br> <br></br>{imgs[31] ? <img src={imgs[31]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,31)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Linguets
  <br></br> <br></br>{imgs[8] ? <img src={imgs[8]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,8)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>33</td>
            <td>cable d'alimentation
  <br></br> <br></br>{imgs[32] ? <img src={imgs[32]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,32)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Mouffle inférieur
  <br></br> <br></br>{imgs[9] ? <img src={imgs[9]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,9)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>

           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>34</td>
            <td>cable feston stat/pen

  <br></br> <br></br>{imgs[33] ? <img src={imgs[33]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,33)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>11</td>
            <td>Mouffle supérieur

  <br></br> <br></br>{imgs[10] ? <img src={imgs[10]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,10)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1000 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>35</td>
            <td>cable s/o de stat/pen
  <br></br> <br></br>{imgs[34] ? <img src={imgs[34]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,34)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>12</td>
            <td>Fin de course
  <br></br> <br></br>{imgs[11] ? <img src={imgs[11]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,11)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>36</td>
            <td>boite jonction stat/pen

  <br></br> <br></br>{imgs[35] ? <img src={imgs[35]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,35)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>13</td>
            <td>Bruit-réducteur

  <br></br> <br></br>{imgs[12] ? <img src={imgs[12]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,12)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1200 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>37</td>
            <td>barre conductrice

  <br></br> <br></br>{imgs[36] ? <img src={imgs[36]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,36)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>14</td>
            <td>Joint d'étanchéité

  <br></br> <br></br>{imgs[13] ? <img src={imgs[13]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,13)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>38</td>
            <td>collecteur et brosse

  <br></br> <br></br>{imgs[38] ? <img src={imgs[38]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,38)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
                e.preventDefault();
              }}/>
           </td>
          </tr>
          <tr>
            <td>15</td>
            <td>Lub-réducteur

  <br></br> <br></br>{imgs[14] ? <img src={imgs[14]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,14)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>39</td>
            <td>klaxon

  <br></br> <br></br>{imgs[38] ? <img src={imgs[38]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,38)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>16</td>
            <td>pignon d'attauqe

  <br></br> <br></br>{imgs[15] ? <img src={imgs[15]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,15)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>40</td>
            <td>biotier de stat/pen
  <br></br> <br></br>{imgs[39] ? <img src={imgs[39]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,39)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-3900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>17</td>
            <td>acc/transmission

  <br></br> <br></br>{imgs[16] ? <img src={imgs[16]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,16)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>41</td>
            <td>poussoir stat/pen
  <br></br> <br></br>{imgs[40] ? <img src={imgs[40]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,40)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4000 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>18</td>
            <td>arbre transmission
  <br></br> <br></br>{imgs[17] ? <img src={imgs[17]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,17)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>42</td>
            <td>etiquette stat/pen

  <br></br> <br></br>{imgs[41] ? <img src={imgs[41]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,41)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>19</td>
            <td>roues menantes

  <br></br> <br></br>{imgs[18] ? <img src={imgs[18]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,18)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>43</td>
            <td>bouton d'arret urgence

  <br></br> <br></br>{imgs[42] ? <img src={imgs[42]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,42)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4200 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>20</td>
            <td>roues menes

  <br></br> <br></br>{imgs[19] ? <img src={imgs[19]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,19)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-1900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>44</td>
            <td>variateur de vitesse

  <br></br> <br></br>{imgs[43] ? <img src={imgs[43]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,43)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>21</td>
            <td>galet guide
  <br></br> <br></br>{imgs[20] ? <img src={imgs[20]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,20)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2000 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>45</td>
            <td>limiteur de charge
  <br></br> <br></br>{imgs[44] ? <img src={imgs[44]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,44)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>22</td>
            <td>pare-choc

  <br></br> <br></br>{imgs[21] ? <img src={imgs[21]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,21)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>46</td>
            <td>charniere

  <br></br> <br></br>{imgs[45] ? <img src={imgs[45]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,45)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>23</td>
            <td>butoir
  <br></br> <br></br>{imgs[22] ? <img src={imgs[22]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,22)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>47</td>
            <td>identification
  <br></br> <br></br>{imgs[46] ? <img src={imgs[46]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,46)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
          <tr>
            <td>24</td>
            <td>bati

  <br></br> <br></br>{imgs[23] ? <img src={imgs[23]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,23)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-2300 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td></tr><tr>
            <td>48</td>
            <td>teste de charge
  <br></br> <br></br>{imgs[47] ? <img src={imgs[47]} alt="img" width="300px" /> :  <input type="file" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"onChange={(e)=>{e.preventDefault();addImg(e,47)}}/>}<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-4800 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your notes here"></textarea>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
            <td>   <input id="default-checkbox" type="checkbox" defaultValue className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"    onChange={(e)=>{
              e.preventDefault();
            }}/>
           </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default InspectionItemTable;