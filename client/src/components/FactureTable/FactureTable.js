import "./FactureTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const FactureTable = (props) => {
  const [data, setData] = useState([]);
  
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get("/backend/api/last-facture").then((res) => {
      console.log(res.data);
     let id = res.data[0].id;
      setId(id);
      console.log(id);
  })
      axios
      .get("/backend/api/factures")
      .then((res) => {
        let data = [];
        let newData = {
          id:0,
          facture_a:"", 
          date_soumis:"",
          adresse:"",
          telephone: "",
          total: "",
          sous_total: ""

        }
          //foreach element in res.data get the id and name and date_soumis and currentBalance and put it in newData array
        res.data.map(element => {
          newData.id = element.id;
          newData.facture_a = element.facture_a;
          newData.date_soumis = element.date_soumis;
          newData.adresse = element.adresse;
          newData.telephone = element.telephone;
          newData.total = element.total;
          newData.sous_total = element.sous_total;
          //push newData to data array
          data.push(newData);
          //reset newData
          newData = {
            id:0,
            facture_a:"",
            date_soumis:"",
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
      field: "facture_a",
      headerName: "Client facture_a",
      width: 230,
    },
  
    {
      field: "date_soumis",
      headerName: "Date de soumission",
      width: 200,
    },
    {
      field: "adresse",
      headerName: "Adresse",
      width: 200,
    },
    {
      field: "telephone",
      headerName: "Telephone",
      width: 200,
    },
    {
      field: "total",
      headerName: "Total",
      width: 200,
    }
    ,
    {
      field: "sous_total",
      headerName: "Sous Total",
      width: 200,
    }
   
  ];
  
  const handleDelete = (id) => {
    //delete invoice from database
    axios
      .delete("/backend/api/factures/" + id)
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
            <Link to={"/app/factures/"+params.row.id }style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/app/factures/edit/"+params.row.id }style={{ textDecoration: "none" }}>
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
         Factures
         <div>
         <Link to={ "new/"+(id+1)} className="link">
          Add New Facture
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

export default FactureTable;