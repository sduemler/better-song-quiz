import React from 'react';
import Button from '@mui/material/Button';

function Login() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button variant="contained" color="success" size="large" href='/auth/login'>
          Login with Spotify
        </Button>
      </header>
    </div>
  );
}

export default Login;
