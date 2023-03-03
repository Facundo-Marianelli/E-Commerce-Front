import React from 'react';
import { Grid ,Button } from "@mui/material";
// import Item from '@mui/material/Item';
import "./navBar.css";
import CardWidget from './CardWidget.js';
import Home from '../../Routes/Home/Home';
import HomePage from '../../Routes/Home/homePage';
const Navbar = () => {
  return (
  <><Grid container spacing={2}>
      <Grid item xs={12} className='nombreTienda'>
        <Button id='botonInicio' variant="contained" href="/">Tienda deportiva</Button>
        
      </Grid>
    </Grid>

    </>
  );
};

export default Navbar;
