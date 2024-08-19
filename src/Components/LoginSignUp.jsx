import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';

const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Typography>
          </Grid>

          {!isLogin && (
            <Grid item xs={12}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Grid>

          {!isLogin && (
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center">
              {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
              <Button onClick={toggleForm} color="secondary">
                {isLogin ? 'Sign Up' : 'Sign In'}
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default LoginSignUp;
