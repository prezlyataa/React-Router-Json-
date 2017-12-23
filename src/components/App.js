import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Body from './Body';
import Header from './Header';

export class App extends Component  {
  render() {
    return (
        <Router>
           <div>

               <ul>
                   <li><Link to={'/'}>Header</Link></li>
                   <li><Link to={'/Body'}>Body</Link></li>
               </ul>

               <hr />

               <Switch>
                   <Route exact path='/' component={Header} />
                   <Route exact path='/Body' component={Body} />
               </Switch>

           </div>
        </Router>
    );
  }
}

