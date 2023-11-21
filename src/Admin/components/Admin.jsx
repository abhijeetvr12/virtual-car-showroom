
import { Avatar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CreateProductForm from './CreateProductForm';
import ProductTable from './ProductTable';
import OrdersTable from './OrdersTable';
import CustomersTable from './CustomersTable';
import AdminDashboard from './Dashboard';
const menu = [
    {name:"Dashboard",path:"/admin",icon:<DashboardIcon/>},
    {name:"Products",path:"/admin/products",icon:<ProductionQuantityLimitsIcon/>},
    {name:"Customers",path:"/admin/customers",icon:<PeopleIcon/>},
    {name:"Orders",path:"/admin/orders",icon:<ShoppingCartIcon/>},
    {name:"AddProduct",path:"/admin/product/create",icon:<AddShoppingCartIcon/>},
    {name:"",path:" "},
    
]

const Admin = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const {sideBarVisible,setSideBarVisible} = useState(false);
    const navigate = useNavigate();
    
    const drawer = (
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height:"100%"
          }}
        >
          {isLargeScreen && <Toolbar />}
          <List>
            {menu.map((item, index) => (
              <ListItem
               key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {
              <ListItem
                disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon/>
                  </ListItemIcon>
                  <ListItemText />
                </ListItemButton>
              </ListItem>
            }
          </List>
    
          {/* <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Divider />
           
            <ListItem onClick={handleLogout}  disablePadding >
                <ListItemButton>
                <Avatar
                            className="text-white"
                            onClick={handleLogout}
                           
                            sx={{
                              bgcolor: deepPurple[500],
                              color: "white",
                              cursor: "pointer",
                            }}
                          >
                            {auth.user?.firstName[0].toUpperCase()}
                          </Avatar>
                  <ListItemText className="ml-5" primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            
          </List> */}
        </Box>
      );
    //   const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    
           
      <div className='relative flex h-[100vh] '>
        <CssBaseline />
        {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}

        <div
          className='w-[15%] border border-r-gray-300 h-full fixed top-0'
          
        >
          {drawer}
        </div>
        <div className='w-[85%] h-full ml-[15%] '>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <AdminDashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm/>}></Route>
            {/* <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route> */}
            <Route path="/products" element={<ProductTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<CustomersTable/>}></Route>
            {/* <Route path="/demo" element={<DemoAdmin />}></Route> */}
          </Routes>
         
        </div>
        
      </div>
    
    
  )
}

export default Admin