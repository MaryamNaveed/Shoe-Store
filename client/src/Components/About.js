import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './About.css';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Divider } from '@mui/material';


const styles = {
    paperContainerr: {

        width: `100%`,
        height: `100%`,
        textAlign: `center`,

    }
};




export default function About() {

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


                                    <Card sx={{ backgroundColor: 'whitesmoke'}}>
                                    <div className='divincenter1'>
                                        
                                    <Typography sx={{color: 'Blue', marginTop: '19px'}} variant="h3">
                                        
                                        <b>About Us</b>
                                    </Typography>
                                    </div>

                                        <CardContent>
                                            <Paper elevation={3}>
                                                <br></br>
                                            <Typography variant="h5" component="h4">
                                                Our Mission
                                            </Typography>
                                            <br></br>
                                            <Typography sx={{mx:'9px'}} className="aligned-text" variant="body2">
                                                Our mission is to make it easy to do business anywhere in the era of the digital economy and deliver quality products to customer.
                                            </Typography>
                                            <br></br>
                                            <Typography variant="h5" component="h4">
                                                Our Company
                                            </Typography>
                                            <br></br>
                                            <Typography sx={{mx:'9px'}} className="aligned-text" variant="body2" >
                                                Our company is one of the most respected organization of the country with rich heritage spanning over half a century. Today our comapny is Pakistan's largerst footwear manufacturer and exporter with interest in wholesale and retail sectors. With a growing porfolio of brands and a nationwide network that touches millions of lives everyday, our company isone of theforemost brands in the country. Setup in 1958, the group is the largest footwear manufacturer, retailer and exporter operating in the country and has overall sales of more than PKR 25 billion. It currently employs close to 1000 people.
                                            </Typography>
                                            <br></br>
                                            <Typography variant="body2">
                                                <b>Specialities</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Footwears
                                            </Typography>
                                            <br></br>
                                            <Typography variant="body2">
                                                <b>Headquarters</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Islamabad
                                            </Typography>
                                            <br></br>
                                            <Typography variant="body2">
                                                <b>Company Size</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                5001 - 10000
                                            </Typography>
                                            <br></br>
                                            <Typography variant="body2" >
                                                <b>Industry</b>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Manufactoring
                                            </Typography>
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
// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import './About.css';
// import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { Divider } from '@mui/material';


// const styles = {
//     paperContainerr: {

//         width: `100%`,
//         height: `100%`,
//         textAlign: `center`,

//     }
// };




// export default function About() {

//     return (
//         <div>
//             <Paper style={styles.paperContainerr} className="backgroundPaper">
//                 <Grid container>
//                     <Grid item xs={3}>
//                     </Grid>
//                     <Grid item xs={6}>

//                         <br></br>
//                         <Paper elevation={3} >
//                             <Grid container>
//                                 <Grid item xs={3} sx={{ backgroundColor: 'lightskyblue' }}>
//                                     <div className='divincenter1'>
//                                     <Typography variant="h2" style={{
//                                         writingMode: 'vertical-rl',
                                        
//                                         transform: 'rotate(180deg)',
                                    
//                                     }}>
//                                         About Us
//                                     </Typography>
//                                     </div>
//                                 </Grid>
//                                 <Divider orientation='vertical' flexItem></Divider>
//                                 <Grid item xs>


//                                     <Card sx={{ backgroundColor: 'whitesmoke'}}>
//                                         <CardMedia
//                                             component="img"
//                                             height="300"
//                                             image='./images/pic5.jpg'
//                                             alt=""
//                                         />

//                                         <CardContent>
//                                             <Typography variant="h5" component="h4">
//                                                 Our Mission
//                                             </Typography>
//                                             <br></br>
//                                             <Typography className="aligned-text" variant="body2">
//                                                 Our mission is to make it easy to do business anywhere in the era of the digital economy and deliver quality products to customer.
//                                             </Typography>
//                                             <br></br>
//                                             <Typography variant="h5" component="h4">
//                                                 Our Company
//                                             </Typography>
//                                             <br></br>
//                                             <Typography className="aligned-text" variant="body2" >
//                                                 Our company is one of the most respected organization of the country with rich heritage spanning over half a century. Today our comapny is Pakistan's largerst footwear manufacturer and exporter with interest in wholesale and retail sectors. With a growing porfolio of brands and a nationwide network that touches millions of lives everyday, our company isone of theforemost brands in the country. Setup in 1958, the group is the largest footwear manufacturer, retailer and exporter operating in the country and has overall sales of more than PKR 25 billion. It currently employs close to 1000 people.
//                                             </Typography>
//                                             <br></br>
//                                             <Typography variant="body2">
//                                                 <b>Specialities</b>
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 Footwears
//                                             </Typography>
//                                             <br></br>
//                                             <Typography variant="body2">
//                                                 <b>Headquarters</b>
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 Islamabad
//                                             </Typography>
//                                             <br></br>
//                                             <Typography variant="body2">
//                                                 <b>Company Size</b>
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 5001 - 10000
//                                             </Typography>
//                                             <br></br>
//                                             <Typography variant="body2" >
//                                                 <b>Industry</b>
//                                             </Typography>
//                                             <Typography variant="body2" color="text.secondary">
//                                                 Manufactoring
//                                             </Typography>
//                                             <br></br>
//                                         </CardContent>

//                                     </Card>
//                                 </Grid>
//                             </Grid>
//                         </Paper>
//                     </Grid>
//                 </Grid>


//                 <div className="smallheighted1"></div>
//             </Paper>

//         </div>
//     );
// }