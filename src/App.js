import React, { Fragment } from 'react';
import { Nav } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle, theme } from 'styles';
import logo from 'components/icons/logo.svg';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav logo={logo}/>
        <img src={logo} className='App-logo' alt='logo' />
      </Router>
    </Fragment>
  );
}

export default App;
