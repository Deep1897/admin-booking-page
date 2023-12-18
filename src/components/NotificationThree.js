import React from 'react';
import { Grid, Typography,Button, IconButton, Stack, TextField , Badge, Box, Avatar} from '@mui/material'
import booking from "../assets/images/booking.png"
import Group from "../assets/images/Group.png"
import Groupss from "../assets/images/Groupss.png"

function Notification() {
  return (

    <Grid container sx={{
        width:'100%',
        justifyContent:'space-around',
        marginTop:'40px',
        gap:'20px'

    }} >

        <Grid item xs={5} sm={5} md={2} sx={{
            height:"65px",
            borderRadius:'12px',
            
            backgroundColor:'#fff',

        }}>

            <Stack direction='row' sx={{
                marginLeft:"20px"
            }}>
                <Box sx={{
                    width:'60px',
                    height:'60px',
                    backgroundColor:'#D9E6F2',
                    marginTop:'2px',
                    borderRadius:'100%',
                }}>
                       <Box sx={{
                        marginLeft:'10px',
                        marginTop:'10px'
                       }}>
                    <img height='90%' width='90%' src={booking} />
                    </Box>

                </Box>

                <Stack direction="column" sx={{
                    marginLeft:{xs:'10px',md:'30px'}
                }}>

                    <Typography variant="h5" sx={{
                        color:'black',
                    }}>75</Typography>

                    <Typography variant="p" sx={{
                        color:'black',
                        fontSize:"7px"
                    }}>Booking Request</Typography>

                    <Typography variant="p" sx={{
                        color:'black',
                        fontSize:"7px"
                    }}>4% (30 days)</Typography>

                </Stack>
            


            </Stack>
            
          
        </Grid>


        <Grid item xs={5} sm={5} md={2} sx={{
            height:"65px",
            borderRadius:'12px',
            
            backgroundColor:'#fff',

        }}>

            <Stack direction='row' sx={{
                marginLeft:'20px'
            }}>
                <Box sx={{
                    width:'60px',
                    height:'60px',
                    backgroundColor:'#D9E6F2',
                    marginTop:'2px',
                    borderRadius:'100%',
                }}>
                       <Box sx={{
                        marginLeft:'10px',
                        marginTop:'10px'
                       }}>
                    <img height='90%' width='90%' src={Group} />
                    </Box>

                </Box>

                <Stack direction="column" sx={{
                    marginLeft:{xs:'10px',md:'30px'}
                }}>

                    <Typography variant="h5" sx={{
                        color:'black',
                    }}>75</Typography>

                    <Typography variant="p" sx={{
                        color:'clack',
                        fontSize:"7px"
                    }}>Booking Request</Typography>

                    <Typography variant="p" sx={{
                        color:'black',
                        fontSize:"7px"
                    }}>4% (30 days)</Typography>

                </Stack>
            


            </Stack>
            
          
        </Grid>


        <Grid item xs={5} sm={5} md={2} sx={{
            height:"65px",
            borderRadius:'12px',
            
            backgroundColor:'#0155A5',

        }}>

            <Stack direction='row' sx={{
                marginLeft:'20px'
            }}>
                <Box sx={{
                    width:'60px',
                    height:'60px',
                    backgroundColor:'#D9E6F2',
                    marginTop:'2px',
                    borderRadius:'100%',
                }}>
                       <Box sx={{
                        marginLeft:'10px',
                        marginTop:'10px'
                       }}>
                    <img height='90%' width='90%' src={booking} />
                    </Box>

                </Box>

                <Stack direction="column" sx={{
                    marginLeft:{xs:'10px',md:'30px'}
                }}>

                    <Typography variant="h5" sx={{
                        color:'white',
                    }}>75</Typography>

                    <Typography variant="p" sx={{
                        color:'white',
                        fontSize:"7px"
                    }}>Booking Request</Typography>

                    <Typography variant="p" sx={{
                        color:'white',
                        fontSize:"7px"
                    }}>4% (30 days)</Typography>

                </Stack>
            


            </Stack>
            
          
        </Grid>


        <Grid item xs={5} sm={5} md={2} sx={{
            height:"65px",
            borderRadius:'12px',
            
            backgroundColor:'#fff',

        }}>

            <Stack direction='row' sx={{
                marginLeft:'20px'
            }}>
                <Box sx={{
                    width:'60px',
                    height:'60px',
                    backgroundColor:'#D9E6F2',
                    marginTop:'2px',
                    borderRadius:'100%',
                }}>
                       <Box sx={{
                        marginLeft:'10px',
                        marginTop:'10px'
                       }}>
                    <img height='90%' width='90%' src={Groupss} />
                    </Box>

                </Box>

                <Stack direction="column" sx={{
                    marginLeft:{xs:'10px',md:'30px'}
                }}>

                    <Typography variant="h5" sx={{
                        color:'black',
                    }}>75</Typography>

                    <Typography variant="p" sx={{
                        color:'black',
                        fontSize:"7px"
                    }}>Booking Request</Typography>

                    <Typography variant="p" sx={{
                        color:'black',
                        fontSize:"7px"
                    }}>4% (30 days)</Typography>

                </Stack>
            


            </Stack>
            
          
        </Grid>
        
      
    </Grid>

  );
}

export default Notification;
