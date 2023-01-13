import * as React from 'react';
import Grid from '@mui/material/Grid';
import './Home.css';
import Typography from '@mui/material/Typography';
import Footwears from './Footwears';



export default function Home() {
    return(
        <>
        <div className='topdiv'>
        <Grid container>
        <Grid item xs={3}> 
        <img className='topdiv1' src="./images/pic2.jpg" alt=''/>
        </Grid>
        <Grid item xs={3}> 
        <img className='topdiv1' src="./images/pic4.jpg" alt=''/>
        </Grid>
        <Grid item xs={3}> 
        <img className='topdiv1' src="./images/pic6.jpg" alt=''/>
        </Grid>
        <Grid item xs={3}> 
        <img className='topdiv1' src="./images/pic7.jpg" alt=''/>
        </Grid>
        </Grid>
        </div>
        <Typography className="center" variant="h4" component="h2">
  Footwears
</Typography>
        <hr></hr>
        <Footwears/>
        </>
    );
}