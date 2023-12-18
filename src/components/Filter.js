import React from 'react';
import { Grid, Typography, Button, } from '@mui/material'
import Slidersfilter from "../assets/images/Slidersfilter.png"
import TuneIcon from '@mui/icons-material/Tune';

function Filter() {
  return (
    <Grid container  sx={{
        width:'100%',
        justifyContent:'space-between',
        marginTop:'20px',
        // boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        padding:'10px',
    }}>
        <Grid item xs={7} sm={3} md={2}  sx={{
            height:"40px",
            
        }}>
          <Typography variant="h5"  sx={{
            fontWeight:'bold',
            color:'#464255'
          }}>Dashboard</Typography>
        </Grid>

        <Grid item xs={5} sm={3} md={2} sx={{
            height:"40px",
            
            
            
        }}>
            <Button variant="contained" startIcon={<TuneIcon/>} sx={{
               
                height:'40px',
                
                fontSize:{xs:'10px', sm:"10px"},
                margin:"auto",
                marginLeft:{md:"60px"},
                borderRadius:'10px',

            }}>
                
              Apply Filter
            </Button>
          
        </Grid>
      


    </Grid>
  );
}

export default Filter;
