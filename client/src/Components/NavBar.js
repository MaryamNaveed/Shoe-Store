import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './NavBar.css';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));





export default function NavBar() {
const [search,setSearch]=useState("");
const navigate = useNavigate();
const location=useLocation();
const userlogout = ()=>{
  localStorage.removeItem("user_login");
  navigate("/");
}

function navigateTo(path){
  if(location.state==null){
      navigate(path);
      
  }
  else{
      navigate(path, { state: location.state })
  }
}

const navigateTocart = () => {
  if(localStorage.getItem('user_login')){
    navigate('cart');
  }
  else{
    navigate('login', { state: {to:'../cart', item: null, quantity: 0 } });
  }
}

const navigateTosearch = () => {
  navigate('search', { state: {searchItem: search }});
  console.log('navigated to');
}

let button=[];
    if (localStorage.getItem('user_login')) {
      button.push(<div>
        <Button color="inherit" onClick={userlogout}>LogOut</Button>
        
      </div>); 
    } else {
      button.push(<div>
          <Button color="inherit" onClick={() => navigateTo('login')}>Login</Button>
          <Button color="inherit" onClick={() => navigateTo('register')}>Register</Button>
      </div>);
    }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className="hoverpointer" onClick={() => navigate('/')} marginLeft="4px" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shoe Store
          </Typography>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('about')}>About Us</Button>
          
          <Button color="inherit" onClick={() => navigate('contact')}>Contact us</Button>

          <Button disabled color="inherit">|</Button>
        
          {button}
        
          <Button disabled color="inherit">|</Button>
          <IconButton color="inherit" aria-label="add to shopping cart" onClick={navigateTocart}>
            <AddShoppingCartIcon />
        </IconButton>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Search>
          
          <Button color="inherit" onClick={navigateTosearch}>Search</Button>
        </Toolbar>
      </AppBar>
      </>
  
  );
}
