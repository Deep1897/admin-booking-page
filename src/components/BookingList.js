import React from 'react';
import { Grid, Typography,Button, IconButton, Stack, TextField , Badge, Box, Avatar,MenuItem,Checkbox} from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxIcon from '@mui/icons-material/CheckBox';




let  options=[
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    {
        "date": "02/05/06",
        "id":"#70178KT",
        "address":"332, Kucha Ghasi Ram,",
        "drop":"3rd-Floor Bhavani",
        "contact":"7017866149"
    },
    
];

function BookingList() {
  return (


    <Grid container sx={{
        marginTop:'20px'
    }}>
        <Grid container sx={{
           width:'100%',
           height:'30px',
          borderRadius:'5px',
           backgroundColor:"#0155A5",
           justifyContent:'space-around'
        }}>
            <Grid xs={1 } md={1} sx={{
                  height:'100%',
                  
                  textAlign:'center',
                  alignContent:'center',
                justifyContent:'space-around',
               
                 
                    
                }}>
                    <Typography variant="p" color="initial" sx={{
                        fontSize:{xs:"8px",sm:"15px",md:"14px"},
                        color:"white",
                        fontWeight:"bold",
                    }}>Date</Typography>

                </Grid>

                <Grid xs={1 } md={1} sx={{
                  height:'100%',
                  

                }}><Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"},
                    color:"white",
                    fontWeight:"bold",
                }}>Booking Id</Typography>

                </Grid>

                <Grid xs={2} md={2} sx={{
                  height:'100%',
                  overFlow:'hidden',
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"},
                    color:"white",
                    fontWeight:"bold",
                }}>Pickup</Typography>

                </Grid>

                <Grid xs={1} md={1} sx={{
                  height:'100%',
                  

                }}><Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"},
                    color:"white",
                    fontWeight:"bold",
                }}></Typography>

                </Grid>

                <Grid xs={1} md={2} sx={{
                  height:'100%',
                  overFlow:'hidden',
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"},
                    color:"white",
                    fontWeight:"bold",
                }}>Drop</Typography>

                </Grid>

                <Grid xs={1} md={1} sx={{
                  height:'100%',
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"},
                    color:"white",
                    fontWeight:"bold",
                }}>Contact</Typography>

                </Grid>

                <Grid xs={1} md={1} sx={{
                  height:'100%',
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"},
                    color:"white",
                    fontWeight:"bold",
                }}></Typography>

                </Grid>

        </Grid>
      {options.map(option => {
          return (
            <Grid container xs={12} sm={12} md={12} lg={12}  sx={{
                width:'100%',
                height:{xs:"80px", sm:"80px" , md:"40px"},
                
                marginTop:'5px',
                // gap:"20px",
                justifyContent:{xs:"space-around",md:"space-around"},
                backgroundColor:'white',
                borderRadius:'5px',
            }} >
                <Grid xs={1 } md={1} sx={{
                  height:'100%',
                  
                  textAlign:'center',
                  alignContent:'center',
                //   justifyContent:'center',
                 
                    
                }}>
                    <Typography variant="p" color="initial" sx={{
                        fontSize:{xs:"8px",sm:"15px",md:"14px"}
                    }}>{option.date}</Typography>

                </Grid>

                <Grid xs={1 } md={1} sx={{
                  height:'100%',
                  
                  

                }}><Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"}
                }}>{option.id}</Typography>

                </Grid>

                <Grid xs={2} md={2} sx={{
                  height:'100%',
                  overFlow:'hidden',
                  
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"}
                }}>{option.address}</Typography>

                </Grid>

                <Grid xs={1} md={1} sx={{
                  height:'100%',
                  
                  

                }}><Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"}
                }}>to</Typography>

                </Grid>

                <Grid xs={1} md={2} sx={{
                  height:'100%',
                  overFlow:'hidden',
                  
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"}
                }}>{option.drop}</Typography>

                </Grid>

                <Grid xs={1} md={1} sx={{
                  height:'100%',
                  
                  

                }}> <Typography variant="p" color="initial" sx={{
                    fontSize:{xs:"8px",sm:"15px",md:"15px"}
                }}>{option.contact}</Typography>

                </Grid>

                <Grid container xs={1} sx={{
                 justifyContent:'space-around',
                 paddingTop:{md:"10px"},
                 
                 paddingLeft:{xs:"1px",md:"none"}
                  

                }}>

{/* -------------------------------------------------------------------------------------------- */}

                    <Grid xs={10} sm={10} md={3}>
                       
                    <RemoveRedEyeIcon sx={{
                     color:"gray",
                    //  fontSize:{xs:'10px',sm:"10px",md:"15px"},
                     
                     }}/>
                        
                    </Grid>

                    <Grid xs={10} sm={10} md={3}>
                    <CheckBoxIcon sx={{
                        backgroundColor:"green",
                        color:'white',
                    }}/>
                        
                    </Grid>

                    <Grid xs={10} sm={10} md={3}>
                    <DeleteIcon sx={{color:"red"}} />

                    </Grid>
                   
                        
                    
                   
                   

                </Grid>
              
            </Grid>
          )
})}
    </Grid>
  );
}

export default BookingList;

