import { AppBar, Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
} from 'react-router-dom';
import { LoginPage } from './Components/Login/LoginPage';
import './style.css';
import useStyles from './AppStyles';
import { ThemeProvider, useTheme, makeStyles } from '@mui/styles';

export const App: React.FC<{ name: string }> = ({ name }) => {
  const theme = useTheme();

  const [isLogin, setLogin] = React.useState(false);
  const classes = useStyles();
  console.log(isLogin ? 'user logged in' : 'user not logged in');

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <div>Hello world!</div>,
  //   },
  // ]);

  return (
    <div style={{ height: '100%', width: '100%', margin: '0px' }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppBar
            style={{
              display: 'flex',
              alignItems: 'end',
              height: '30px',
            }}
            height="40px"
          >
            <LogoutIcon onClick={() => setLogin(false)} />
          </AppBar>
          {/* <Button
            className={classes.logoutButton}
            onClick={() => setLogin(false)}
          >
            
          </Button> */}

          {/* <RouterProvider router={router} /> */}
          <Routes>
            <Route
              exact
              path="/"
              element={<LoginPage isLogin={isLogin} setLogin={setLogin} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
