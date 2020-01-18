import React, { Fragment } from 'react';
import { Nav } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle, theme } from 'styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav />
      </Router>
    </Fragment>
  );
}

export default App;
