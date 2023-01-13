import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import './CartItem.css';


const CartItem = (props) => {

    const navigate = useNavigate();
   

    var product = props.message.product.product;
    var Quantityitem = props.message.product.quantity;
 //    console.log("PPPPPPPP", product);
//    console.log("QQQQQQQQQQQ",props.message.product.quantity)
    var DeleteItem = props.message.DeleteItem;
    var Total = props.message.Total;
    const [quantity, setQuantity] = useState(props.message.product.quantity);

    useEffect(()=>{
        
        setQuantity(props.message.product.quantity);
        
        // console.log(product, Quantityitem, quantity);
    },[props])

    async function deleteItem(){
        console.log(props.message.product._id);
        const req=await fetch('http://localhost:8000/cartitems/'+ props.message.product._id,{
          method: 'DELETE',
          
        })
        const data=await req.json();
       
        
      }

  

    async function handleChange(e) {

        var q=e.target.value;
        console.log(q);
        
        setQuantity(e.target.value);

        const currentcust = JSON.parse(localStorage.getItem('user_login'));

        const response = await fetch("http://localhost:8000/updatecartitemquantity", {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    currentcust,
                    product,
                    q
                }),
            });

           

            const d = await response.json();

            console.log('uuu', product, q);

            console.log('UpdatedProduct: ', d);

            

            setQuantity(q);

            console.log('UpdatedQuantity: ',  q)



        //Total();
    }

    return (
        <>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Paper sx={{ height: '200px' }} elevation={3}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            minHeight="100%"
                        >
                            <Grid container >

                                <Grid item xs={2.5}>

                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.image}
                                        alt=""
                                    />

                                </Grid>

                                <Grid item xs={2}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <Typography className='divcenter1' gutterBottom variant="h6" component="div">
                                            <b>  {product.name} </b>
                                        </Typography>
                                    </Box>
                                </Grid>








                                <Grid item xs={1.5}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <Typography className='divcenter1' gutterBottom variant="h6" component="div">
                                            <b>Rs.  {product.price} </b>
                                        </Typography>

                                    </Box>

                                </Grid>

                                <Grid item xs={2}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <TextField

                                            sx={{ width: '50%' }}
                                            id="quantity"
                                            label="Quantity"
                                            type="number"
                                            inputProps={{ min: 1 }}
                                            value={quantity}
                                            onChange={handleChange}
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={1.5}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <Typography className='divcenter1' gutterBottom variant="h6" component="div">
                                            <b>Rs.  {product.price * quantity} </b>
                                        </Typography>

                                    </Box>

                                </Grid>

                                <Grid item xs={2.5}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        minHeight="100%"
                                    >
                                        <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteItem }>Delete</Button>
                                    </Box>
                                </Grid>


                            </Grid>

                        </Box>
                    </Paper>

                    <hr></hr>
                </Grid>
            </Grid>





        </>
    );
}
export default CartItem;