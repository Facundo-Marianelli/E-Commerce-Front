import React from 'react';
import { Grid ,Button } from "@mui/material";
// import Item from '@mui/material/Item';
import "./navBar.css";
import CardWidget from './CardWidget.js';
const Navbar = () => {
  return (
  <><Grid container spacing={2}>
      <Grid item xs={12} className='nombreTienda'>
        <Button id='botonInicio' variant="contained">Tienda deportiva</Button>
      </Grid>
    </Grid>

    <Grid marginTop={1} className="itemsNavBar" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
      <Grid item xs={2}>
        <Button variant="outlined">Futbol</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined">Tenis</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined">Rugby</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined">Paddle</Button>
      </Grid>
      <Grid item xs={2}>
        <Button variant="outlined">Hockey</Button>
      </Grid>
      <Grid item xs={2}>
        <CardWidget  />
      </Grid>
    </Grid>

    </>
  );
};

export default Navbar;
