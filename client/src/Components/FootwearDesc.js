import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import './Footwears.css';
import ErrorAlert from './ErrorAlert';

export default function FootwearDesc() {
    const location = useLocation();
    const navigate = useNavigate();
    var product=location.state.product;
    const [quantity,setQuantity]=useState(1);
    const [isShown, setIsShown] = useState(false);

    

    async function GoToCart() {
      
      if(quantity<=0){
        // navigate('../errorAlert', { state: {alertMsg: "Quantity should be greater than 0" } });
        setIsShown(true);
        
      }
      else{
        if(localStorage.getItem('user_login')){

        

          const currentcust = JSON.parse(localStorage.getItem('user_login'));

            console.log(currentcust);

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

          navigate('../cart', { state: {item: product, quantity: quantity } });
        }
        else{
          navigate('../login', { state: {to:'../cart', item: product, quantity: quantity } });
        }
        
        
      }
      
    }
    
    return(
        <>
        {isShown && (
    <div>
      <ErrorAlert key={1} message={"Quantity should be grater than 0"}/>
    </div>
  )}
       <div className='smallheight'></div>
       <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={7}>
        <Paper className="paperclass" elevation={3} >
        <Card >
<Grid container>
<Grid item xs={5}>
<div className='divincenter'>
<CardMedia
component="img"
height="200"
image={product.image}
alt=""
/>
</div>
</Grid>
<Grid item xs={7}>
<CardContent>
<Typography gutterBottom variant="h6" component="div">
<b>  {product.name} </b>
</Typography>
<Typography variant="body2" color="text.secondary">
  {product.description}
</Typography>
<br></br>
<Typography sx={{color: 'blue'}} variant="h6">
<b>Rs. {product.price} </b>
</Typography>
<br></br>
<br></br>
<TextField
  defaultValue={1}
        sx={{width: '35%'}}
          id="quantity"
          label="Quantity"
          type="number"
          inputProps={{ min: 1 }}
          value={quantity}
          onChange= {e => setQuantity(e.target.value)}
          />

</CardContent>
<CardActions>
<Button className="buttonbutton" size="small" onClick = {GoToCart}>Add to cart</Button>
<Button className="buttonbutton" size="small" onClick = { ()=> navigate(-1) }>Back</Button>
</CardActions>
</Grid>
</Grid>
</Card>
</Paper>
</Grid>
</Grid>
<div style={{height: '190px'}}></div>
        </>
    );
}