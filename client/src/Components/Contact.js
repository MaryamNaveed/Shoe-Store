import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './Contact.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';
import { Alert } from '@mui/material';

const styles = {
    paperContainerr: {

        width: `100%`,
        height: `100%`,
        textAlign: `center`,

    }
};




export default function Contact() {
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [message,setMessage]=useState("");

    const [error, setError]=useState({
        status:false,
        msg: '',
        type: ''
    });

    async function contactus(){

        if(fullName && email && phone && message){

            setError({status: true, msg: 'Loading...', type:'success'});

        const response = await fetch("http://localhost:8000/contactus", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    phone,
                  message
                }),
            });




            const d = await response.json();

            setEmail('');
            setPhone('');
            setFullName('');
            setMessage('');

            console.log(d);

            if(d.status==='ok'){
                setError({status: true, msg: 'Message has been recorded and a mail has been sent', type:'success'});
            }
            else{
                setError({status: true, msg: 'Error', type:'error'});
            }

        }
        else if(!fullName){
            setError({status: true, msg: 'Name is required', type:'error'});

        }
        else if(!email){
            setError({status: true, msg: 'Email is required', type:'error'});

        }
        else if(!phone){
            setError({status: true, msg: 'Phone is required', type:'error'});

        }
        else if(!message){
            setError({status: true, msg: 'Message is required', type:'error'});

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
                                <Grid item xs={6} sx={{ backgroundColor: 'lightskyblue' }}>
                                    <CardMedia
                                            component="img"
                                            height="100%"
                                            image='./images/contact.jpg'
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
 <Typography className='centered' variant="h4" component="h2">
   <i>Contact Us</i>
 </Typography>
 <br></br>
 <br></br>

     <TextField
     sx={{width: '60%'}}
          required
         id="outlined-fullName-input"
         label="Full Name"
         variant="standard"
         size="small"
         value={fullName}
         onChange={e => setFullName(e.target.value)}
         
       />

      <br></br>
      <br></br>

        <TextField
        sx={{width: '60%'}}
          required
          id="outlined-email-input"
          label="Email"
          variant="standard"
          size="small"
          value={email}
          onChange={e => setEmail(e.target.value)}
          
        />

 <br></br>
      <br></br>

<TextField
sx={{width: '60%'}}
         required
         id="outlined-phone-input"
         label="Phone No"
         variant="standard"
         size="small"
         value={phone}
         onChange={e => setPhone(e.target.value)}
         
       />

<br></br>
      <br></br>

<TextField
  sx={{width: '60%'}}
         required
         id="outlined-message-input"
         label="Message"
         variant="standard"
         multiline
          rows={4}
         value={message}
         onChange={e => setMessage(e.target.value)}
         
       />

        <br></br>
        <br></br>
      <br></br>
        <div className='childcentereddiv'>
        <Button className="roundedbutton" variant="contained" onClick={contactus}>Contact Us</Button>
        </div>
        <br></br>
        <br></br>
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
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Paper from '@mui/material/Paper';
// import './Contact.css';
 

// const styles = {
//     paperContainer: {
//         backgroundImage: `url(./images/contact.jpg)`,
//         backgroundRepeat: `no-repeat`,
//         backgroundAttachment: `fixed`,
//         backgroundSize: `100% 100%`,
//     }
// };




// export default function Contact() {
//     const [fullName,setFullName]=useState("");
//     const [email,setEmail]=useState("");
//     const [phone,setPhone]=useState("");
//     const [message,setMessage]=useState("");

//     return(
//         <Paper style={styles.paperContainer}>
// <div className='centereddiv'>
//       <Stack
//       component="form"
//       className='bordereddiv'
//       sx={{
//         width: '45ch',       
        
//       }}
//       spacing={2}
//       noValidate
//       autoComplete="off"
//     >

// <Typography className='centered' variant="h4" component="h2">
//   <i>Contact Us</i>
// </Typography>

//     <TextField
//          required
//          id="outlined-fullName-input"
//          label="Full Name"
//          variant="standard"
//          size="small"
//          value={fullName}
//          onChange={e => setFullName(e.target.value)}
         
//        />



//         <TextField
//           required
//           id="outlined-email-input"
//           label="Email"
//           variant="standard"
//           size="small"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
          
//         />

// <TextField
//          required
//          id="outlined-phone-input"
//          label="Phone No"
//          variant="standard"
//          size="small"
//          value={phone}
//          onChange={e => setPhone(e.target.value)}
         
//        />

// <TextField
//          required
//          id="outlined-message-input"
//          label="Message"
//          variant="standard"
//          multiline
//           rows={4}
//          value={message}
//          onChange={e => setMessage(e.target.value)}
         
//        />

//         <br></br>
//         <div className='childcentereddiv'>
//         <Button className="roundedbutton" variant="contained">Contact Us</Button>
//         </div>
        
//         </Stack>
      
//       </div>
//       </Paper>
//     );
// }