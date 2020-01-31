import React, { Fragment } from 'react';
import { Nav, Home, Footer } from 'components';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
