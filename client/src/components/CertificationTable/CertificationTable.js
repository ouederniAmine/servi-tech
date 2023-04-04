import "./CertificationTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const CertificationTable = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios
      .get("/backend/api/certifications")
      .then((res) => {
        let data = [];
        let newData = {
          id:0,
          inspection_date:"", 
          company_usage:"",
          equipement:"",
          capacity: "",
          equipement_details: "",
          expiry: ""
        }
        res.data.map(element => {
          newData.id = element.id;
          newData.inspection_date = element.inspection_date;
          newData.company_usage = element.company_usage;
          newData.equipement = element.equipement;
          newData.capacity = element.capacity;
          newData.equipement_details = element.equipement_details;
          newData.expiry = element.expiry;
          //push newData to data array
          data.push(newData);
          //reset newData
          newData = {
            id:0,
            inspection_date:"",
            company_usage:"",
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
      field: "inspection_date",
      headerName: "Inspection Date",
      width: 230,
    },
  
    {
      field: "company_usage",
      headerName: "Company Usage",
      width: 200,
    },
    {
      field: "equipement",
      headerName: "Equipement",
      width: 200,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      width: 200,
    },
    {
      field: "equipement_details",
      headerName: "Equipement Details",
      width: 200,
    }
    ,
    {
      field: "expiry",
      headerName: "Expiry",
      width: 200,
    }
   
  ];
  
  const handleDelete = (id) => {
    axios
      .delete("/backend/api/certifications/" + id)
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
            <Link to={"/app/certifications/"+params.row.id }style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/app/certifications/edit/"+params.row.id }style={{ textDecoration: "none" }}>
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
         Certifications
         <div>
         <Link to={ "new"} className="link">
          Add New Certification
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

export default CertificationTable;