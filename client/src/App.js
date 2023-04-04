import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import PrivateRoute from './services/PrivateRoute';
import EditCertification from './pages/EditCertification/EditCertification';
import EditFacture from './pages/EditFacture/EditFacture';
import EditInspection from './pages/EditInspections/EditInspections';
import EditSoumission from './pages/EditSoumissions/EditSoumissions';
import ResetPasswordPage from './pages/resetPassword/resetPasswordPage';
import ImportCsv from './pages/importCsv/importCsv';
import ClientParams from './pages/clientParams/clientParams';
import InspectionsPage from './pages/InspectionsPage/InspectionsPage';
import SoumissionsPage from './pages/SoumissionsPage/SoumissionsPage';
import CertificationsPage from './pages/CertificationPage/CertificationPage';
import NewCertification from './pages/NewCertification/NewCertification';
import NewFacture from './pages/NewFacture/NewFacture';
import NewSoumission from './pages/NewSoumission/NewSoumission';
import NewInspection from './pages/newInspection/newInspection';
import FacturesPage from './pages/FacturePage/FacturePage';
import NewFactureItem from './pages/NewFactureItem/NewFactureItem';
import NewInspectionItem from './pages/NewInspectionItem/NewInspectionItem';
import ViewFacture from './pages/pdfPages/viewFacture';
import ViewCertification from './pages/pdfPages/viewCertification';
import ViewSoumission from './pages/pdfPages/viewSoumission';
import ViewInspection from './pages/pdfPages/viewInspection';
export default function App() {
  return (
   
 

     <BrowserRouter>
        <Routes>
        <Route element={<PrivateRoute/>}>
            <Route path="/app" element={<InspectionsPage />} />
            <Route
                path="app/settings/:userId"
                element={<ClientParams/>}
              />
            <Route path="/app/inspections">
              
              <Route index element={<InspectionsPage />} />
              <Route
                path="edit/:userId"
                element={<EditInspection />}
              />
                
              <Route
                path="new/:id"
                element={<NewInspection  />}/>
                <Route
                path="new/:id/newItem"
                element={<NewInspectionItem  />}/>
                <Route
                path="edit/:id/newItem"
                element={<NewInspectionItem  />}/>
                <Route path=":userId" element={<ViewInspection />} />

                <Route
                path="csv"
                element={<ImportCsv  />}/>
              </Route> 
              
          </Route>  
          <Route path="/app/soumissions">
              
              <Route index element={<SoumissionsPage />} />
              <Route
                path="edit/:userId"
                element={<EditSoumission />}
              />
                
              <Route
                path="new"
                element={<NewSoumission  />}/>
                <Route
                path="csv"
                element={<ImportCsv  />}/>
              <Route path=":userId" element={<ViewSoumission />} /></Route> 

               <Route path="/app/certifications">
              
              <Route index element={<CertificationsPage/>} />
              <Route
                path="edit/:userId"
                element={<EditCertification />}
              />
                
              <Route
                path="new"
                element={<NewCertification  />}/>
                <Route
                path="new/:id/newItem"
                element={<NewFactureItem  />}/>
                <Route
                path="csv"
                element={<ImportCsv  />}/>
              <Route path=":userId" element={<ViewCertification />} /></Route> 



              <Route path="/app/factures">
              
              <Route index element={<FacturesPage />} />
              <Route
                path="edit/:userId"
                element={<EditFacture />}
              />
                <Route
                path="new/:id/newItem"
                element={<NewFactureItem  />}/>
 <Route
                path="edit/:userId/newItem"
                element={<NewFactureItem   />}
              />
              <Route
                path="new/:id"
                element={<NewFacture  />}/>
                <Route
                path="csv"
                element={<ImportCsv  />}/>
              <Route path=":userId" element={<ViewFacture />} /></Route>  
          <Route index path="/"   />
              <Route  path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route exact path="/reset-password/:id/:token" element={<ResetPasswordPage/>} />
        </Routes>
        
      </BrowserRouter>
 
  );
}

