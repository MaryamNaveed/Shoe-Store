
import * as React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import './Footwears.css';

const Footwear = (props) => {
  const navigate=useNavigate();
    var product=props.message;
    return(
        <>
       
        <Paper className="paperclass" elevation={3} >
        <Card onClick={() => navigate('../footwearDesc', { state: {product: product } })}>
<CardMedia
component="img"
height="140"
image={product?.image}
alt=""
/>
<CardContent>

<Typography gutterBottom variant="h6" component="div">
<b>  {product?.name} </b>
</Typography>
{/* <Typography className="equalheight" variant="body2" color="text.secondary">
  {product.description}
</Typography> */}
<br></br>
<Typography variant="body2" color="text.secondary">
<b>Rs. {product?.price} </b>
</Typography>

</CardContent>
<CardActions>
<Button className="buttonbutton" size="small" onClick={() => navigate('../footwearDesc', { state: {product: product } })}>Add to cart</Button>
</CardActions>
</Card>
</Paper>
        </>
    );
}
export default Footwear;