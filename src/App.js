import React, { Fragment } from 'react';
import { Nav, Home, Footer } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'styles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          {/* <Route exact path='/projects' component={Project} />
          <Route exact path='/contact' component={Contact} /> */}
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
