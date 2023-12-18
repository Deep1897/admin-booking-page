import React from 'react';
import { Grid, Typography,Button, IconButton, Stack, TextField , Badge, Box, Avatar} from '@mui/material'
import Iconhomeicon from "../assets/images/Iconhomeicon.png"
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Iconbooking from "../assets/images/Iconbooking.png"
import Iconvehicle from "../assets/images/Iconvehicle.png"
import VectorDriver from "../assets/images/VectorDriver.png"
import VectorCustomer from "../assets/images/VectorCustomer.png"
import Vectoruser from "../assets/images/Vectoruser.png"
import Vectorbell from "../assets/images/Vectorbell.png"
import placeholderSamantha from "../assets/images/placeholderSamantha.png"
import Vectormessage from "../assets/images/Vectormessage.png"
import Vectorsett from "../assets/images/Vectorsett.png"
import Filter from "../components/Filter.js"
import Notification from "../components/Notification.js"
import BookingList from "../components/BookingList.js"
import Booking from "../components/Booking.js"




function DashNav() {
  return (
    <Grid container sx={{
      margin:'auto',
      width:'100%',
      height:"auto",
      
    }}>
 {/* ---------------------------------------------------sidebar------------------------------------------------------ */}
        <Grid item xs={2} sx={{
          display:{xs:"none",sm:'none', md:"none",lg:"grid"},
          height:"500px",
          
          padding:'10px',

        }}>
          <Typography variant="h3" sx={{
            color:"#0155A5",
            fontWeight:'bold',
          }}>BPS</Typography>


          <Grid xs={10} item sx={{
            
            
            marginTop:'40px'

          }}>

            <Grid item  sx={{
              width:'100%',
              height:'auto',
              // 
            }}>    <Stack direction="column">
                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                       
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={Iconhomeicon} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                         fontSize:"12px"
                         
                          
                         }}> Dashboard</Typography>
                      </Grid>
                      
                    </Grid>

                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                      
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={Iconbooking} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                          fontSize:"12px"
                         
                          
                         }}> Manage Booking</Typography>
                      </Grid>
                      
                    </Grid>



                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                      
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={Iconvehicle} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                          fontSize:"12px"
                         
                          
                         }}> Manage Vehicle</Typography>
                      </Grid>
                      
                    </Grid>
            

                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                      
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={VectorDriver} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                          fontSize:"12px"
                         
                          
                         }}> Manage Driver</Typography>
                      </Grid>
                      
                    </Grid>


                    
                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                      
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={VectorCustomer} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                          fontSize:"12px"
                         
                          
                         }}> Manage Customer</Typography>
                      </Grid>
                      
                    </Grid>
                     

                       
                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                      
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={Vectoruser} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                          fontSize:"12px"
                         
                          
                         }}> Manage User</Typography>
                      </Grid>
                      
                    </Grid>


                    <Grid container sx={{
                      width:'100%',
                      height:'30px',
                      
                      justifyContent:'space-around',
                      '&:hover':{
                        backgroundColor:'#D8ECFF',
                        color:'#0155A5',
                        fontWeight:'bold',
                      }
                    }}>
                      <Grid item xs={2} sx={{
                       justifyContent:'center',
                       padding:'3px'
                      
                      }}>
                         <img src={Vectoruser} />
                      </Grid>

                      <Grid item xs={9} sx={{
                       justifyContent:'center',
                       
                       
                      }}>
                         <Typography variant="" sx={{
                          
                          fontSize:"12px"
                          
                         }}> Report</Typography>
                      </Grid>
                      
                    </Grid>
                 

                  </Stack>
            </Grid>

            
          </Grid>
             
          <Grid xs={12} item sx={{
            marginTop:"100px",
            height:'150px',
            
            borderRadius:"10px",
            backgroundColor:'#0155A5',
            padding:'20px',
          }} >
            <Stack>
            <Typography variant="p" sx={{
              color:'white',
              fontSize:"12px",
            }}>Organize your bookings through button bellow!</Typography>

            <Button variant='contained' sx={{
              width:'100px',
              fontSize:'8px',
              marginTop:'40px',
            }}>
            +Add Booking
            </Button>
            </Stack>
          </Grid>
          
          
        </Grid>









{/* ---------------------------------------------------header------------------------------------------------------------         */}
        <Grid item xs={12} sm={12} md={12} lg={10} sx={{
          width:"30%",
          height:"auto",
          backgroundColor:'#F3F2F7',
          padding:'20px',
          
        }}>

          <Grid container sx={{
            width:{md:"68%",lg:'100%'},
            boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
           
            


          }}>

            <Grid  item  xs={6} sx={{
              height:'60px',
            }}>
                   <TextField size='medium' placeholder="Search here" sx={{
                    width:"100%"
                   }}></TextField>
              
            </Grid>

            <Grid  container  xs={5} sx={{
              height:'60px',
              paddingTop:'5px',
              justifyContent:'space-around',
              marginLeft:"auto",
            }}>

              <Badge badgeContent={10} color="primary" sx={{
                display:{xs:"none",sm:'none',md:'none',lg:'grid'},
              }}>

                <Box sx={{
                  display:{xs:"none",sm:'none',md:'grid'},
                   width:'25px',
                   height:'25px',
                   borderRadius:'12px',
                   backgroundColor:'#D8ECFF',
                  padding:'10px',
                  alignItem:'center',
                  marginTop:"5px"
                }}>
                  <Box sx={{
                      
                  }}>
                  <img src={Vectorbell} /> 
                  </Box>
                  
                </Box>

                 

                
               </Badge>


               <Badge badgeContent={50} color="primary" sx={{
                display:{xs:"none",sm:'none',md:'grid'},
              }}>

                <Box sx={{
                  display:{xs:"none",sm:'none',md:'grid'},
                   width:'25px',
                   height:'25px',
                   borderRadius:'12px',
                  padding:'10px',
                  backgroundColor:'#D8ECFF',
                  alignItem:'center',
                  marginTop:"5px"
                }}>
                  <Box sx={{
                      
                  }}>
                  <img src={Vectormessage} /> 
                  </Box>
                  
                </Box>

                 

                
               </Badge>


               <Badge badgeContent={4} color="error" sx={{
                display:{xs:"none",sm:'none',md:'grid'},
              }}>

                <Box sx={{
                  display:{xs:"none",sm:'none',md:'grid'},
                   width:'25px',
                   height:'25px',
                   borderRadius:'12px',
                   backgroundColor:'#D8ECFF',
                  padding:'10px',
                  alignItem:'center',
                  marginTop:"5px"
                }}>
                  <Box sx={{
                      
                  }}>
                  <img src={Vectorsett} /> 
                  </Box>
                  
                </Box>

                 

                
               </Badge>


               <Grid item xs={12} sm={12} md={6}  sx={{
                height:'70%',
                alignItem:'center',
                textAlign:'center',
                justifyConent:'center',

               }}>
                <Box sx={{
                  height:'40px',
                  borderLeft:{md:"2px solid black"},
                }}>
                <Stack direction='row' sx={{
                  marginTop:'7px',
                  marginLeft:{md:'70px',xs:'-20px'}
                }}>
                   <Typography variant="p" color="initial" sx={{
                    marginTop:'5px'
                   }}>Hello,</Typography>
                   <Typography variant="p" color="initial" sx={{
                    fontWeight:'bold',
                    marginTop:'5px'
                   }}>Samantha</Typography>

                    <Avatar alt="Remy Sharp" src={placeholderSamantha} sx={{
                      marginLeft:'10px'
                    }} />
                </Stack>
                </Box>
                 
               </Grid>
              
              
            </Grid>


            






            
          </Grid>
{/* -------------------------------------------------------------------------------------------------------------------------------- */}
       <Filter/>
       <Notification/>
       <BookingList/>
       <Booking/>
         



        </Grid>
      
      
    </Grid>
  );
}

export default DashNav;
