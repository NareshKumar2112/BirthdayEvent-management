import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material';
import toy from "../assets/images/toy.jpg"
import toy1 from "../assets/images/toy2.jpg"
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import Radio from '@mui/material/Radio';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import "../assets/css/Signup.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
const theme = createTheme();

const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPasssword]=useState("");
  const [role,setRole]=useState("admin");
  
  return (
    <div className='mmm'>
      <ThemeProvider theme={theme} >
      <div className='main' >
      <h1 style={{fontFamily:"cursive",textAlign:"center",fontSize:"1.5cm",marginLeft:"4cm"}}>Signup</h1>
      </div>
      <div className='form'id='bx' style={{height:"16cm"}}>
      <Container className='container' component="main" maxWidth="xs">
      <img style={{marginLeft:"-15cm",height:"18cm",marginTop:"-2cm"}} src={toy1}></img> 
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <div className='signupContainer'>
          <Box component="form" noValidate  sx={{ mt: 3 }} >
          <form id='signup-form'style={{marginLeft:"5cm",marginTop:"-17cm"}} >
            <Grid container spacing={2} >
              <Grid item xs={12}>
                    <TextField
                      style={{marginLeft:"-1cm",width:"12.5cm"}}
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                    InputLabelProps={{ 
                      style: {
                        fontFamily: 'cursive', 
                        color:'black',
                        fontSize:'17px'
                      },
                    }}
                      required
                      fullWidth
                      name="Full Name"
                      label="Full Name"
                      type="text"
                    />
                    </Grid>
                    <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive', 
                    color:'black',
                    fontSize:'17px'
                  },
                }}
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                   onChange={ (e) => setEmail(e.target.value)}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                  },
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive', 
                    color:'black',
                        fontSize:'17px'
                  },
                }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                 onChange={ (e) => setPassword(e.target.value)}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 style={{marginLeft:"-1cm",width:"12.5cm"}}
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '2px solid blue!important',
                    },
                    
                  },
                  
                }}
                InputLabelProps={{ 
                  style: {
                    fontFamily: 'cursive', 
                    color:'black',
                        fontSize:'17px'
                  },
                }}
                  required
                  fullWidth
                  name="conform password"
                  label="Confirm Password"
                  type="password"
                  onChange={ (e) => setCPassword(e.target.value)}
                  />
              </Grid>

                  <Grid item xs={12}>
                    <TextField
                     style={{marginLeft:"-1cm",width:"12.5cm"}}
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid blue!important',
                        },
                      },
                    }}
                    InputLabelProps={{ 
                      style: {
                        fontFamily: 'cursive', 
                        color:'black',
                        fontSize:'17px'
                      },
                    }}
                      required
                      fullWidth
                      name="Mobile Number"
                      label="Mobile Number"
                      type="number"
                      onChange={ (e) => setDOB(e.target.value)}
                    />
                    </Grid>
                    
             
              <Grid item xs={12}>
                <FormControlLabel
                
                 style={{marginLeft:"-1cm"}}
                  control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                  label={<span style={{fontFamily:"cursive",fontSize:"17px",color:"blue"}}>Accept Terms and Conditions.</span>}
                   />
              </Grid>
            </Grid>
            <Button type="submit"
             style={{marginLeft:"-1cm",width:"12.5cm",fontFamily:"cursive",fontSize:"20px",fontWeight:"1000"}}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
                </form>
              <Link to="/Login">  <button  style={{marginLeft:"6cm"}}>Already have an account? Login</button></Link>
                </Box>
                </div>
                </Box>
                </Container>
                </div>
                </ThemeProvider>
    
    </div>
  )
}

export default Signup;