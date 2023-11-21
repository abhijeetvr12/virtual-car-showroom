// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './customer/Pages/HomePage/Homepage';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CustomerRoute from './Routers/CustomerRoute';
import AdminRouters from './Routers/AdminRouters';



function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoute/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
