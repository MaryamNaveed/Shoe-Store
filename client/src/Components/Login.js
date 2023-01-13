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
const location = useLocation();

const [error, setError]=useState({
    status:false,
    msg: '',
    type: ''
});
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        
       if(email && password){
            
            
            
          
                // setError({status: true, msg: 'Login Successful', type:'success'});

                // localStorage.setItem("user_login", JSON.stringify(userlogin));

                
                // if(location.state==null){
                //     navigate('../');
                // }
                // else{
                //     navigate(location.state.to, { state: {item: location.state.item, quantity: location.state.quantity } })
                // }

                const response = await fetch("http://localhost:8000/login",{
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        email,
                        password,
                    }),
                    });
                    const data=await response.json();
                    if(data.status=='ok'){
                        setError({status: true, msg: 'Login Successful', type:'success'});

                        localStorage.setItem("user_login", JSON.stringify(data.customer));

                        //localStorage.setItem("user_login", JSON.stringify({name: data, email: email, password:password}));

                        if(location.state==null){
                            navigate('../');
                        }
                        else{
                            console.log(location.state.to, location.state);
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
                        setError({status: true, msg: 'Incorrect Email or Password', type:'error'});
                    }

                
            
          

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
                                <Grid item xs={5.6} sx={{ backgroundColor: 'lightskyblue' }}>
                                    <CardMedia
                                            component="img"
                                            height="100%"
                                            image='./images/pic5.jpg'
                                            alt=""
                                        />
                                   
                                </Grid>
                                <Divider orientation='vertical' flexItem></Divider>
                                <Grid item xs>


                                    <Card  sx={{ backgroundColor: 'whitesmoke'}}>
                                        

                                        <CardContent>
                                            <Paper elevation={3}>
                                            {error.status && (
    <div>
      <Alert severity={error.type}>{error.msg}</Alert>
    </div>
  )}
  
                                            <br></br>
                                            <Typography variant="h4" component="h2">
                                                Login
                                            </Typography>
                                            <br></br>
                                            <Box component='form' noValidate id="login-form" onSubmit={handleSubmit}>
                                            
         <TextField
         sx={{width: '60%'}}
          required
          id="outlined-email-input"
          label="Email"
          variant="standard"
          autoComplete=""
          size="small"
          value={email}
          onChange={e => setEmail(e.target.value)}
          
        />

        <br></br>
        <br></br>

        <TextField
        sx={{width: '60%'}}
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
        
        <div className='childcenterdiv'>
        <Button type='submit' className="roundbutton" variant="contained">Login</Button>
        </div>
        <br></br>
        <Typography className="center" variant="body" >
  Not Registered?<Button onClick={() => navigateTo('../register')}>Register Now</Button> 
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
        <Button variant="contained" className="roundbutton" onClick={() => navigateTo('../googleLogin')}>Login with Google</Button>
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
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import './Login.css';

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(./images/login1.jpg)`,
//         backgroundRepeat: `no-repeat`,
//         backgroundAttachment: `fixed`,
//         backgroundSize: `100% 100%`,
        
//     }
// };


// export default function Login() {
    
// const navigate = useNavigate();
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     return(
        
//         <Paper style={styles.paperContainer}>
// <div className='centerdiv'>
//       <Stack
//       component="form"
//       className="borderdiv"
//       sx={{
//         width: '45ch',

//       }}
//       spacing={2}
//       noValidate
//       autoComplete="off"
//     >

// <Typography className='centerheading' variant="h4" component="h2">
//   <i>Login</i>
// </Typography>


//         <TextField
//           required
//           id="outlined-email-input"
//           label="Email"
//           variant="standard"
//           autoComplete=""
//           size="small"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
          
//         />

//         <br></br>

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
//         <br></br>
//         <div className='childcenterdiv'>
//         <Button className="roundbutton" variant="contained">Login</Button>
//         </div>
//         <Typography className="center" variant="body" >
//   Not Registered?<Button onClick={() => navigate('../register')}>Register Now</Button> 
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
//         <Button variant="contained" className="roundbutton" onClick={() => navigate('../googleLogin')}>Login with Google</Button>
//       </div>
//         </Stack>
      
      
      
//       </div>
//       </Paper>
//     );
// }