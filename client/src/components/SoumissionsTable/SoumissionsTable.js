import "./SoumissionsTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import React from "react";
import { useState  , useEffect} from "react";
import axios from "axios";
const SoumissionsTable = (props) => {
  const [data, setData] = useState([]);
  
  const [id, setId] = useState(0);


  useEffect(() => {
    axios.get("/backend/api/last-soumission").then((res) => {
      console.log(res.data);

      let id = res.data[0].id;
    
      setId(id);
      console.log(id);
  })
      axios
      .get("/backend/api/soumissions")
      .then((res) => {
        let data = [];
        let newData = {
          id:0,
          adresse:"", 
          company:"",
          contact:"",
          sujet: "",
          tel: "",

        }
          //foreach element in res.data get the id and name and company and currentBalance and put it in newData array
        res.data.map(element => {
          newData.id = element.id;
          newData.adresse = element.adresse;
          newData.company = element.company;
          newData.contact = element.contact;
          newData.sujet = element.sujet;
          newData.tel = element.tel;
          //push newData to data array
          data.push(newData);
          //reset newData
          newData = {
            id:0,
            adresse:"",
            company:"",
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
      field: "adresse",
      headerName: "Client adresse",
      width: 230,
    },
  
    {
      field: "company",
      headerName: "Client company",
      width: 200,
    },
    {
      field: "contact",
      headerName: "Client contact",
      width: 200,
    },
    {
      field: "sujet",
      headerName: "Client sujet",
      width: 200,
    },
    {
      field: "tel",
      headerName: "TeLePhone",
      width: 200,
    }
    
   
  ];
  
  const handleDelete = (id) => {
    //delete invoice from database
    axios
      .delete("/backend/api/soumissions/" + id)
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
            <Link to={"/app/soumissions/"+params.row.id }style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/app/soumissions/edit/"+params.row.id }style={{ textDecoration: "none" }}>
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
         Soumissions
         <div>
         <Link to={ "new/"+(id+1 ) } className="link">
          Add New Soumission
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

export default SoumissionsTable;