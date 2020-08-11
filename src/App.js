import React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import Home from './components';
import Education from './components/education';
import Portfolio from './components/portfolio';
import Contacts from './components/contacts';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00AAAA',
      fontSize: '30px'
    }
  }
});

function App() {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/education" component={Education} />
        <Route path="/portfolio" component={Portfolio} />
      </MuiThemeProvider>
    </>
  );
}

export default App;
