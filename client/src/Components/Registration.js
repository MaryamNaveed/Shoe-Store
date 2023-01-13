import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Login.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';



const styles = {
    paperContainerr: {

        width: `100%`,
        height: `100%`,
        textAlign: `center`,

    }
};




export default function Login() {
      const navigate = useNavigate();
      const location=useLocation();
      const [error, setError]=useState({
        status:false,
        msg: '',
        type: ''
    });
    const data=[];
    const [name,setName]=useState("");
    // const [lastName,setLastName]=useState("");
    // const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const handleSubmit = async (e)=> {
      e.preventDefault();
      if(name && email && password){
          if(password===confirmPassword){
            //console.log(email, password);
           
            // localStorage.setItem("userofStore",JSON.stringify([...data,{name: name, email: email, password:password}]));
            // localStorage.setItem("user_login", JSON.stringify({name: name, email: email, password:password}));
            // if(location.state==null){
            //     navigate('../');
            // }
            // else{
            //     navigate(location.state.to, { state: {item: location.state.item, quantity: location.state.quantity } })
            // }

            const response = await fetch("http://localhost:8000/register",{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
              },
              body:JSON.stringify({
                name,
                email,
                password,
              
              }),
            });
            const data=await response.json();
            if(data.status==='ok'){
              setError({status: true, msg: 'Registration Successful', type:'success'});
              console.log(data.customer);
              
              localStorage.setItem("user_login", JSON.stringify(data.customer));
              //localStorage.setItem("user_login", JSON.stringify({name: name, email: email, password:password}));
              if(location.state==null){
                  navigate('../');
              }
              else{
                
                if(location.state.to==='../cart' && location.state.item){
                  const currentcust = JSON.parse(localStorage.getItem('user_login'));

                  const product=location.state.item;
                  const quantity=location.state.quantity;


                  const response = await fetch("http://localhost:8000/cartitems", {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                          currentcust,
                          product,
                          quantity
                      }),
                  });




                  const d = await response.json();

                  console.log('Exis', d.existed);
                  navigate(location.state.to, { state: {item: location.state.item, quantity: location.state.quantity } })
              }
             else{
              navigate(location.state.to );
             }
                
              }
                 
              }
            
            else{
              setError({status: true, msg: 'Email already exist', type:'error'});
            }
          }
          else{
            setError({status: true, msg: 'Password and Confirm password are not same', type:'error'});
          }
      }
      else if(!name){
        setError({status: true, msg: 'Name is required', type:'error'});
      }
      else if(!email){
          setError({status: true, msg: 'Email is required', type:'error'});
      }
      else if(!password){
          setError({status: true, msg: 'Password is required', type:'error'});
      }
      
  }
  function navigateTo(path){
    if(location.state==null){
        navigate(path);
    }
    else{
        navigate(path, { state: location.state })
    }
}
    return (
        <div>
            <Paper style={styles.paperContainerr} className="backgroundPaper">
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>

                        <br></br>
                        <Paper elevation={3} >
                            <Grid container>
                                <Grid item xs={5.5} sx={{ backgroundColor: 'lightskyblue' }}>
                                    <CardMedia
                                            component="img"
                                            height="100%"
                                            image='./images/pic5.jpg'
                                            alt=""
                                        />
                                   
                                </Grid>
                                <Divider orientation='vertical' flexItem></Divider>
                                <Grid item xs>


                                    <Card sx={{ backgroundColor: 'whitesmoke'}}>
                                        

                                        <CardContent>
                                          <Paper elevation={3}>
                                          {error.status && (
    <div>
      <Alert severity={error.type}>{error.msg}</Alert>
    </div>
  )}
       <br></br>                                   
 <Typography className='center' variant="h4" component="h2">
   <i>Register</i>
 </Typography>
 <br></br>
 <Box component='form' noValidate id="login-form" onSubmit={handleSubmit}>
     <TextField
     sx={{width:'60%'}}
         required
         id="outlined-name-input"
         label="Name"
         variant="standard"
         size="small"
         value={name}
         onChange={e => setName(e.target.value)}
         
       />
    {/* <br></br>
    <br></br>
<TextField
sx={{width:'60%'}}
         required
         id="outlined-lastName-input"
         label="Last Name"
         variant="standard"
         size="small"
         value={lastName}
         onChange={e => setLastName(e.target.value)}
         
       /> */}
       
    <br></br>
        <br></br>
    {/* <TextField
         required
         id="outlined-phone-input"
         label="Phone No"
         variant="standard"
         size="small"
         value={phone}
         onChange={e => setPhone(e.target.value)}
         
       /> */}
        <TextField
        sx={{width:'60%'}}
         required
          id="outlined-email-input"
          label="Email"
          autoComplete=""
          variant="standard"
          size="small"
          value={email}
          onChange={e => setEmail(e.target.value)}
          
        />

<br></br>
        <br></br>

        <TextField
        sx={{width:'60%'}}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          size="small"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
<br></br>
        <br></br>
<TextField
sx={{width:'60%'}}
          required
          id="outlined-confirmpassword-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          size="small"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <div className='childcenterdiv'>
        <Button type='submit' className="roundbutton1" variant="contained">Register</Button>
        </div>
        <br></br>
        
        <Typography className="center" variant="body" >
  Already Registered?<Button onClick={() => navigateTo('../login')}>Login</Button> 
</Typography>
                                          
        
      
<br></br>
<br></br>

        <Grid container>
        <Grid item xs={2.5}></Grid>
        <Grid item xs={3}>
          <hr></hr>
        </Grid>
        <Grid item xs={1}>
        <Typography className="center" variant="body2" >OR</Typography> 
        
        </Grid>
        <Grid item xs={3}>
          <hr></hr>
          <br></br>
        
        </Grid>
      </Grid>
      <div className='childcenterdiv'>
         <Button variant="contained" className="roundbutton1" onClick={() => navigateTo('../googleLogin')}>Login with Google</Button>
       </div>
                                            
                                            <br></br>
                                            <br></br>
                                            </Box>
                                            </Paper>
                                        </CardContent>

                                    </Card>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>


                <div className="smallheighted1"></div>
            </Paper>

        </div>
    );
}
   

// import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import './Registration.css';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(./images/login1.jpg)`,
//         backgroundRepeat: `no-repeat`,
//         backgroundAttachment: `fixed`,
//         backgroundSize: `100% 100%`,
//     }
// };


// export default function Registration() {
//     const navigate = useNavigate()
//     const [firstName,setFirstName]=useState("");
//     const [lastName,setLastName]=useState("");
//     // const [phone,setPhone]=useState("");
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [confirmPassword,setConfirmPassword]=useState("");

//     return(
//         <Paper style={styles.paperContainer}>
// <div className='centerdiv1'>
//       <Stack
//       component="form"
//       className="borderdiv1"
//       sx={{
//         width: '45ch',
//       }}
//       spacing={2}
//       noValidate
//       autoComplete="off"
//     >

// <Typography className='center' variant="h4" component="h2">
//   <i>Register</i>
// </Typography>
// <Grid container>
//             <Grid item xs={5.5}> 
//     <TextField
//          required
//          id="outlined-firstName-input"
//          label="First Name"
//          variant="standard"
//          size="small"
//          value={firstName}
//          onChange={e => setFirstName(e.target.value)}
         
//        />
//     </Grid>
//     <Grid item xs={1}>
//       </Grid> 
//     <Grid item xs={5.5}> 
// <TextField
//          required
//          id="outlined-lastName-input"
//          label="Last Name"
//          variant="standard"
//          size="small"
//          value={lastName}
//          onChange={e => setLastName(e.target.value)}
         
//        />
//        </Grid>
//     </Grid>
//     {/* <TextField
//          required
//          id="outlined-phone-input"
//          label="Phone No"
//          variant="standard"
//          size="small"
//          value={phone}
//          onChange={e => setPhone(e.target.value)}
         
//        /> */}
//         <TextField
//          required
//           id="outlined-email-input"
//           label="Email"
//           autoComplete=""
//           variant="standard"
//           size="small"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
          
//         />

        

//         <TextField
//           required
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//           size="small"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//         />

// <TextField
//           required
//           id="outlined-confirmpassword-input"
//           label="Confirm Password"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//           size="small"
//           value={confirmPassword}
//           onChange={e => setConfirmPassword(e.target.value)}
//         />
//         <br></br>
//         <div className='childcenterdiv'>
//         <Button className="roundbutton1" variant="contained">Register</Button>
//         </div>
        
//         <Typography className="center" variant="body" >
//   Already Registered?<Button onClick={() => navigate('../login')}>Login</Button> 
// </Typography>


//         <Grid container>
//         <Grid item xs={5}>
//           <hr></hr>
//         </Grid>
//         <Grid item xs={2}>
//         <Typography className="center" variant="body2" >OR</Typography> 
//         </Grid>
//         <Grid item xs={5}>
//           <hr></hr>
//         </Grid>
//       </Grid>
//       <div className='childcenterdiv'>
//         <Button variant="contained" className="roundbutton1" onClick={() => navigate('../googleLogin')}>Login with Google</Button>
//       </div>
//         </Stack>
      
//       </div>
//       </Paper>
//     );
// }