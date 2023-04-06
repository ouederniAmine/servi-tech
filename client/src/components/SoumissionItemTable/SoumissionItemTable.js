import "./SoumissionItemTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const SoumissionItemTable = (props) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // get id from url
    let id = window.location.pathname.split("/")[4];
      axios
    .get("/backend/api/soumission_items/"+id)
    .then((res) => {
      let data = [];
      let newData = {
        id:0,
        descrip:"", 
        pieces:"",
        oeuvre:"",

      }
        //foreach element in res.data get the id and name and date_soumis and currentBalance and put it in newData array
      res.data.map(element => {
        newData.id = element.id;
        newData.descri = element.descri;
        newData.pieces = element.pieces;
        newData.oeuvre = element.oeuvre;
        //push newData to data array
        data.push(newData);
        //reset newData
        newData = {
          id:0,
          descri:"",
          pieces:"",
          oeuvre:""
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
      field: "descri",
      headerName: "description",
      width: 230,
    },
  
    {
      field: "pieces",
      headerName: "Pieces",
      width: 200,
    },
    {
      field: "oeuvre",
      headerName: "Main d'oeuvre",
      width: 200,
    }
   
  ];
  
  const handleDelete = (id) => {
    //delete invoice from database
    axios
      .delete("/backend/api/soumission_items/" + id)
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
         Soumission Items
         <div>
         <Link to={ "newItem"} className="link">
          Add New Soumission Item
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

export default SoumissionItemTable;