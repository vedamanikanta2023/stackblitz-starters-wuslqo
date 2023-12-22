import { Box } from '@mui/material';
import * as React from 'react';
import LoginForm from '../../Components/Login/LoginForm';

export const LoginPage = (props): any => {
  return props.isLogin === false ? (
    <Box className="background" display="flex" flexDirection="Row">
      <Box width="50%"></Box>
      <Box
        width="50%"
        float="Right"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <LoginForm {...props} name="Vedamanikanta" />
      </Box>
    </Box>
  ) : (
    <div>Hello World!</div>
  );
};
