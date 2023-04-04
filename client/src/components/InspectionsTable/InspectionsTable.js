import "./InspectionsTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const InspectionsTable = (props) => {
  const [data, setData] = useState([]);
  
  const [id, setId] = useState(0);


  useEffect(() => {
    axios.get("/backend/api/last-inspection").then((res) => {
      console.log(res.data);

      let id = res.data[0].id;
    
      setId(id);
      console.log(id);
  })
      axios
      .get("/backend/api/inspections")
      .then((res) => {
        let data = [];
        let newData = {
          id:0,
          num_facture:"", 
          nom_client:"",
          date_inspection:"",
          commande_par: "",
          inscpecte_par: "",
          appareil: ""

        }
          //foreach element in res.data get the id and name and nom_client and currentBalance and put it in newData array
        res.data.map(element => {
          newData.id = element.id;
          newData.num_facture = element.num_facture;
          newData.nom_client = element.nom_client;
          newData.date_inspection = element.date_inspection;
          newData.commande_par = element.commande_par;
          newData.inscpecte_par = element.inscpecte_par;
          newData.appareil = element.appareil;
          //push newData to data array
          data.push(newData);
          //reset newData
          newData = {
            id:0,
            num_facture:"",
            nom_client:"",
            currentBalance:""
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
      field: "num_facture",
      headerName: "Numero de facture",
      width: 230,
    },
  
    {
      field: "nom_client",
      headerName: "Nom du client",
      width: 200,
    },
    {
      field: "date_inspection",
      headerName: "Date d'inspection",
      width: 200,
    },
    {
      field: "commande_par",
      headerName: "Commande par",
      width: 200,
    },
    {
      field: "inscpecte_par",
      headerName: "Inspecte par",
      width: 200,
    }
    ,
    {
      field: "appareil",
      headerName: "Appareil",
      width: 200,
    }
   
  ];
  
  const handleDelete = (id) => {
    //delete invoice from database
    axios
      .delete("/backend/api/inspections/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
    setData(data.filter((item) => item.id !== id));
  };
  console.log(window.location.href.split("/").pop()+"/new");

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/app/inspections/"+params.row.id }style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/app/inspections/edit/"+params.row.id }style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
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
         Inspections
         <div>
         <Link to={ "new/"+(id+1 )} className="link">
          Add New Inspection
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

export default InspectionsTable;