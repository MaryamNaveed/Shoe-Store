import React, { useState, useEffect } from 'react';
import CartItem from './CartItem'
import { useLocation, useNavigate } from 'react-router-dom';
import './Footwears.css';
import { Button } from '@mui/material';
import './Cart.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { Alert } from '@mui/material';




export default function Cart() {
    const navigate = useNavigate();
    const location = useLocation();

    const taxes = 18;

    var p = null;
    var q = 0;

    if (location.state == null) {
    }
    else {
        p = location.state.item;
        q = location.state.quantity;
    }




    const [totalamount, setTotalamount] = useState("");

    const [products, setProducts] = useState([]);


    const [error, setError]=useState({
        status:false,
        msg: '',
        type: ''
    });


 
    useEffect(() => {
        //total=getTotal();
        getCartItems();
        //setTotalamount(total);

    }, [products]);

    
    var done=false;


    async function getCartItems() {



            const currentcust = JSON.parse(localStorage.getItem('user_login'));


            const req=await fetch('http://localhost:8000/getcartitems/'+currentcust._id,{
                

            })
            const d=await req.json();

            


            if(d.status=='ok'){

                

                setProducts(d.products);


                done=true;

                let total = 0;
                for(var a=0; a<products.length; a++){
                    total=total+(products[a].product.price*products[a].quantity)
                }

                setTotalamount(total);

                

            }

        

    


    }

    var rows = [];
    var i = 0;


    const DeleteItem = (item) => {
        
    }

    async function placeOrder(){

        
        const currentcust = JSON.parse(localStorage.getItem('user_login'));

        const response = await fetch("http://localhost:8000/order",{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              taxes,
              totalamount,
              currentcust
            
            }),
          });
          const data=await response.json();
          if(data.status==='ok'){

            setError({status:true, type: 'success', msg: 'Succesfully placed Order'});
            
            const req=await fetch('http://localhost:8000/deletecartitems/'+ currentcust._id,{
                method: 'DELETE',
                
            })
            const d=await req.json();

            navigate('../orderdetail', { state: {Orderdetail: data.orders }});
          }
          else{

            setError({status:true, type: 'error', msg: data.msg});

          }
    }

 
    return (
        <div>

{error.status && (
                <div>

                <Alert severity={error.type}>{error.msg}</Alert>
                </div>


                )}



            <div className='smallheight1'></div>
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Grid container>

                        <Grid item xs={2.5}>



                        </Grid>

                        <Grid item xs={2}>

                            <Typography className="textincenter" gutterBottom variant="h6" component="div">
                                <b>  Product </b>
                            </Typography>

                        </Grid>


                        <Grid item xs={1.5}>

                            <Typography className="textincenter" gutterBottom variant="h6" component="div">
                                <b>  Price </b>
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>

                            <Typography className="textincenter" gutterBottom variant="h6" component="div">
                                <b>  Quantity </b>
                            </Typography>

                        </Grid>

                        <Grid item xs={1.5}>
                            <Typography className="textincenter" gutterBottom variant="h6" component="div">
                                <b>  Total </b>
                            </Typography>


                        </Grid>

                        <Grid item xs={2.5}>
                            <Typography className="textincenter" gutterBottom variant="h6" component="div">
                                <b>  Remove </b>
                            </Typography>


                        </Grid>


                    </Grid>
                    <hr></hr>
                </Grid>
            </Grid>

            <div className='smallheight1'></div>

            {
                products?.length!==0 ?
                    <div>
                        
                        {
                        products.map(product1 => (
                            <div>
                                
                                <CartItem key={7} message={{ product: product1, DeleteItem: DeleteItem, Total: product1.product.price*product1.product.quantity }} />
                                <div className='smallheight1'></div>

                            </div>
                        ))
                    }
                        <div className='smallheight1'></div>
                        <Button sx={{ marginLeft: '35%' }} variant="contained" className="midbutton" onClick={placeOrder}>Place Order</Button>

                    </div> :
                    <div></div>
            }
            {/* {rows} */}
            <Grid container>
                <Grid item xs={2}></Grid>

                <Grid item xs={8}>
                    <Card>
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  SubTotal </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Rs. {totalamount} </b>
                                </Typography>
                            </Grid>

                        </Grid>

                    </Card>
                </Grid>
            </Grid>
            <div className='smallheight1'></div>

            <Grid container>
                <Grid item xs={2}></Grid>

                <Grid item xs={8}>
                    <Card>
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Taxes </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Rs. {taxes} </b>
                                </Typography>
                            </Grid>

                        </Grid>

                    </Card>
                    <div className='smallheight1'></div>
                    <hr></hr>
                </Grid>
            </Grid>

            <div className='smallheight1'></div>
            <div className='smallheight1'></div>

            <Grid container>
                <Grid item xs={2}></Grid>

                <Grid item xs={8}>
                    <Paper elevation={1}>
                        <Grid container>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b>  Total </b>
                                </Typography>
                            </Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2}>
                                <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="div">
                                    <b> Rs. {totalamount + taxes} </b>
                                </Typography>
                            </Grid>

                        </Grid>

                    </Paper>
                </Grid>
            </Grid>
            <br></br>
            {/* {btn} */}
            <div className='heighteddiv'></div>
        </div>
    );
}
