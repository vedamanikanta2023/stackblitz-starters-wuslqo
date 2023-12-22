import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { App } from './App';
// import { createTheme } from '@mui/material';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
      <App name="Vedamanikanta" />
  </StrictMode>
);
