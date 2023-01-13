import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const  ErrorAlert = (props) => {
   
    var msg=props.message;
  
    
    
    return(
        <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">{msg}</Alert>
      
    </Stack>
    );
}
export default ErrorAlert;