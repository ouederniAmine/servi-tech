import "./FactureItemTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const FactureItemTable = (props) => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // get id from url
    let id = window.location.pathname.split("/")[4];
      axios
    .get("/backend/api/facture_item/"+id)
    .then((res) => {
      let data = [];
      let newData = {
        id:0,
        descrip:"", 
        unit:"",
        prix:"",

      }
        //foreach element in res.data get the id and name and date_soumis and currentBalance and put it in newData array
      res.data.map(element => {
        newData.id = element.id;
        newData.descrip = element.descrip;
        newData.unit = element.unit;
        newData.prix = element.prix;
        //push newData to data array
        data.push(newData);
        //reset newData
        newData = {
          id:0,
          descrip:"",
          unit:"",
          prix:""
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
      field: "descrip",
      headerName: "description",
      width: 230,
    },
  
    {
      field: "unit",
      headerName: "unit",
      width: 200,
    },
    {
      field: "prix",
      headerName: "prix",
      width: 200,
    }
   
  ];
  
  const handleDelete = (id) => {
    //delete invoice from database
    axios
      .delete("/backend/api/facture_item/" + id)
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
         Facture Items
         <div>
         <Link to={ "newItem"} className="link">
          Add New Facture Item
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

export default FactureItemTable;