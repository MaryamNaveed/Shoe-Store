import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footwears.css';
import { Alert } from '@mui/material';
import './Cart.css';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';




export default function OrderDetail() {
    const location = useLocation();

    const [order, setOrder]=useState();

    const [error, setError]=useState({
        status:false,
        msg: '',
        type: ''
    });

    useEffect(() => {
        getOrder();

    }, [order]);

  

    
    async function getOrder() {

        

        if(location.state!==null){
            setError({status:true, type: 'success', msg: 'Succesfully placed Order'});

           
            const req=await fetch('http://localhost:8000/getorders/'+location.state.Orderdetail._id,{
            

            })
            const d=await req.json();

        if(d.status=='ok'){
            console.log(d.orders.orderitems);
            setOrder(d.orders);     
               

        }
        else{
            console.log('errors');
        }

        }



      


}

    return(
        <div>
            
            {error.status && order && (
                <div>
                <Alert severity={error.type}>{error.msg}</Alert>
                

                <br></br>

                {
                order?.orderitems?.length!==0 ?
                    <div>

<Grid container>
                <Grid item xs={3}></Grid>

                <Grid item xs={6}>
                    
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Name </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={2}>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Quantity </b>
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={3}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b> Total </b>
                                </Typography>
                            </Grid>

                            

                        </Grid>
                    
                        <hr></hr>
                    
                </Grid>
            </Grid>

            
                        
                    {
                        order.orderitems.map(product1 => (
                            <div>

<Grid container>
                <Grid item xs={3}></Grid>

                <Grid item xs={6}>
                    
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  {product1.product.name} </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={2}>
                            <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  {product1.quantity} </b>
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={3}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b> Rs. {product1.product.price*product1.quantity } </b>
                                </Typography>
                            </Grid>

                        </Grid>

                   
                </Grid>
            </Grid>
            <div className='smallheight1'></div>

                            </div>
                        
                        ))
                        
                    }

                    </div>
                    :<div></div>
                }

<br></br>
                

                <Grid container>
                <Grid item xs={3}></Grid>

                <Grid item xs={6}>
                <hr></hr>
                    
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  SubTotal </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Rs. {order.subtotal} </b>
                                </Typography>
                            </Grid>

                        </Grid>

                </Grid>
            </Grid>
            <div className='smallheight1'></div>

            <Grid container>
                <Grid item xs={3}></Grid>

                <Grid item xs={6}>
                   
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Taxes </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Rs. {order.taxes} </b>
                                </Typography>
                            </Grid>

                        </Grid>

                    
                    <div className='smallheight1'></div>
                    
                </Grid>
            </Grid>

            <div className='smallheight1'></div>
            

            <Grid container>
                <Grid item xs={3}></Grid>

                <Grid item xs={6}>
                    
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Total </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b> Rs. {order.subtotal+order.taxes} </b>
                                </Typography>
                            </Grid>

                        </Grid>

                    
                </Grid>
            </Grid>

                </div>
            )}

        </div>
    )

}