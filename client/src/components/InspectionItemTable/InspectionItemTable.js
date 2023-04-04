import "./InspectionItemTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const InspectionItemTable = (props) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // get id from url
    let id = window.location.pathname.split("/")[4];
      axios
    .get("/backend/api/inspection_item/"+id)
    .then((res) => {
      let data = [];
      let newData = {
        id:0,
        nom:"", 
        palan:"",
        chariot:"",
        pont:""

      }
        //foreach element in res.data get the id and name and date_soumis and currentBalance and put it in newData array
      res.data.map(element => {
        newData.id = element.id;
        newData.nom = element.nom;
        newData.palan = element.palan;
        newData.chariot = element.chariot;
        newData.pont = element.pont;
        //push newData to data array
        data.push(newData);
        //reset newData
        newData = {
          id:0,
          nom:"",
          palan:"",
          chariot:"" ,
          pont:""
        }
    return newData;  }); 
      setData(data);
    })
    .catch((err) => {
    });

     
  }, []);

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    
    {
      field: "nom",
      headerName: "Name",
      width: 230,
    },
  
    {
      field: "palan",
      headerName: "palan",
      width: 200,
    },
    {
      field: "chariot",
      headerName: "chariot",
      width: 200,
    }
    ,
    {
      field: "pont",
      headerName: "pont",
      width: 200,
    }
   
   
  ];
  
  const handleDelete = (id) => {
    //delete invoice from database
    axios
      .delete("/backend/api/inscpection_item/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
    setData(data.filter((item) => item.id !== id));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
 <div className="datatableTitle">
 Inspection Items
         <div>
         <Link to={ "newItem"} className="link">
          Add New Inspection Item
        </Link>

     </div>
      </div>
       
       
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default InspectionItemTable;