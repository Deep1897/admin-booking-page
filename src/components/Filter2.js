import React from 'react';
import { Grid, Typography, Button, } from '@mui/material'
import Slidersfilter from "../assets/images/Slidersfilter.png"

function Filter() {
  return (
    <Grid container  sx={{
        width:'100%',
        justifyContent:'space-between',
        marginTop:'20px',
    }}>
        <Grid item xs={7} sm={3} md={2}  sx={{
            height:"40px",
            
        }}>
          
        </Grid>

        <Grid item xs={5} sm={3} md={2} sx={{
            height:"40px",
            
            
            
        }}>
            <Button variant="contained" sx={{
               
                height:'40px',
                fontSize:{xs:'10px', sm:"10px"},
                margin:"auto",
                marginLeft:{md:"60px"}

            }}>
                
              Apply Filter
            </Button>
          
        </Grid>
      


    </Grid>
  );
}

export default Filter;
