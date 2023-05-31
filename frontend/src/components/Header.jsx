import React, {useState} from 'react'
import '../App.css'
import {AppBar, Typography, Toolbar, Tabs, Tab} from "@mui/material"
import {NavLink} from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div >
      <AppBar  position='sticky' sx={{ backgroundColor: "#000000"}}>
        <Toolbar>
          <Typography fontSize={20} className='logo'>
            <span className='logo-main'>YourBook</span><span className='logo-span'>Store</span>
          </Typography>

          <Tabs 
          sx={{ml: "auto"}} 
          textColor='inherit'
          indicatorColor='primary'
          value={value}
          onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label='Add Product'/>
            <Tab LinkComponent={NavLink} to="/books" label='All Books'/>
            <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
          </Tabs>

        </Toolbar>
        
      </AppBar>
    </div>
  )
}

export default Header
