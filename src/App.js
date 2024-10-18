import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Management from './pages/Management';
import AboutUs from './pages/About';
import ManageEmployees from './pages/ManageEmployees';
import ManageProducts from './pages/ManageProducts';
import AddEmployee from './pages/EmpManager/AddEmployee';
import SortEmployees from './pages/EmpManager/SortEmp';
import ViewEmployees from './pages/EmpManager/ViewEmp';
import UpdateEmployee from './pages/EmpManager/UpdEmp';
import RetireEmployee from './pages/EmpManager/RetireEmp';
import AddProduct from './pages/ProductManager/AddP';
import DeleteProduct from './pages/ProductManager/Delp';
import ViewProducts from './pages/ProductManager/ViewP';
import SortProducts from './pages/ProductManager/sortP';
import UpdateProduct from './pages/ProductManager/UpdP';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/management" element={<Management />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/manage-employees" element={<ManageEmployees />} />
          <Route path="/add Employee" element={<AddEmployee />} />
          <Route path="/view-employees" element={<ViewEmployees />} />
          <Route path="/update-employee" element={<UpdateEmployee />} />
          <Route path="/retire-employee" element={<RetireEmployee />} />
          <Route path="/sort-employees" element={<SortEmployees />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path='/add-Product' element={<AddProduct />} />
          <Route path='/delete-product' element={<DeleteProduct />} />
          <Route path='/view-products' element={<ViewProducts />} />
          <Route path='/sort-products' element={<SortProducts />} />
          <Route path='/update-product' element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
