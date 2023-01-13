import { React, useEffect }from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import './footer.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    return (
      <div className='colorBackground'
        >
          <br></br>
           <Grid container>
            <Grid item xs={0.5}>
              </Grid>
             <Grid item xs={2.5}>
              <Typography className="whitetext" variant='h6'>Company</Typography>
              <br />
                <Link
                  underline="none"
                  component="button"
                  variant="body2"
                  onClick={() => navigate('/')}
                >
                  <div className='whitetext'> Home</div>
                </Link>
            
            <br />
            <Link
                  underline="none"
                  component="button"
                  variant="body2"
                  onClick={() => navigate('about')}
                >
                  <div className='whitetext'> About us</div>
                </Link>
          <br />
          <Link
                  underline="none"
                  component="button"
                  variant="body2"
                  onClick={() => navigate('contact')}
                >
                  <div className='whitetext'> Contact us</div>
                </Link>
          <br />
          <Link
                  underline="none"
                  component="button"
                  variant="body2"
                  onClick={() => navigate('search', { state: {searchItem: '' } })}
                >
                  <div className='whitetext'> Search</div>
                </Link>
          <br />
            </Grid>
            <Grid item xs={2.5}>
            <Typography className='whitetext' variant='h6'>Account</Typography>
            <br />
            <Link
                  underline="none"
                  component="button"
                  variant="body2"
                  onClick={() => navigate('login')}
                >
                  <div className='whitetext'> Login</div>
                </Link>
          <br />
          <Link
                  underline="none"
                  component="button"
                  variant="body2"
                  onClick={() => navigate('register')}
                >
                  <div className='whitetext'> Register</div>
                </Link>
          <br />
          </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <div>
            
            <Typography className='whitetext' variant="body2">
                <b>Email</b>
                </Typography>
                <Typography className='whitetext' variant="body2">
                shoe_store@gmail.com
                </Typography>
                <br></br>
                <Typography className='whitetext' variant="body2">
                <b>Contact No</b>
                </Typography>
                <Typography className='whitetext' variant="body2">
               (051) 111 111 111
                </Typography>
                <br></br>
                </div>
                </Grid>
          </Grid>
        <br />
          <div className='centertexttt'> Copyright &copy; 2022 - All right reserved</div>
      </div>
    );
}