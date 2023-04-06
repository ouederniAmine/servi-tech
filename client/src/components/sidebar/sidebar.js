import "./sidebar.css";

import authService from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/logo white.png";
import { useState ,useEffect } from "react";

import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
    const navigate = useNavigate();




    



        

    //api call to check if user is admin
   
    const signOutUser = () => {authService.logout()
        navigate("/login");
    }
    const [open, setOpen] = useState(true);
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        
        if (window.innerWidth < 768) {
          setOpen(false);
        }
        if (window.innerWidth > 768) {
          setOpen(true);
        }
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []);
 
  return ( <div className="flex">
  <div
    className={` ${
      open ? "w-72" : "w-20 "
    } bg h-screen p-5  pt-8 relative duration-300`}
  >   <img
  src="https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/control.png"
  className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
   border-2 rounded-full  ${!open && "rotate-180"}`}
  onClick={() => setOpen(!open)} alt="logo"
/>
<div className="flex gap-x-4 items-center">
      <img
        src={img}
        className={`logo cursor-pointer duration-500 ${
          open && "rotate-[360deg]" 
        }`}
        onClick={() => window.location.replace(
          "https://service-tech.ca/"
        )}
        style={{ width: "50%" }} alt="logo"
      />
      
      
    </div><>
 
  
  <ul className="pt-6 flex flex-col space-y-4">
    
      
      <li
   onClick={() => navigate("/app/inspections")}
        key={1}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        my-8"
          "bg-light-white"
         `}
      >
        <img src={`https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png`}  alt="logo"/>
        <span   className={`${!open && "hidden"} text-white origin-left duration-200`}>
          Inspections 
        </span>
      </li> 
     
      <li
   onClick={() => navigate("/app/factures")}
        key={3}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        my-8"
          "bg-light-white"
         `}
      >
        <img src={`https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png`}  alt="logo"/>
        <span   className={`${!open && "hidden"} text-white origin-left duration-200`}>
            Factures 
        </span>
      </li> 

      <li
   onClick={() => navigate("/app/certifications")}
        key={5}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        my-8"
          "bg-light-white"
         `}
      >
        <img src={`https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png`}  alt="logo"/>
        <span   className={`${!open && "hidden"} text-white origin-left duration-200`}>
            Certifications 
        </span>
      </li> 
      <li
   onClick={() => navigate("/app/soumissions")}
        key={2}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
        my-8"
          "bg-light-white"
         `}
      >
        <img src={`https://raw.githubusercontent.com/Sridhar-C-25/sidebar_reactTailwind/main/src/assets/Folder.png`}  alt="logo"/>
        <span   className={`${!open && "hidden"} text-white origin-left duration-200`}>
          Soumissions 
        </span>
      </li> 
   
      <li 
        key={4}
        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
       my-8"
          "bg-light-white"
         `}
         style={{alignSelf:"baseline"}}
         onClick={signOutUser} 
      >
    <LogoutIcon/>
        <span className={`${!open && "hidden"} text-white origin-left duration-200`}>
          Sign Out
        </span>
      </li> 
    
  </ul></>
   
  </div>
</div>
);
};

export default Sidebar;