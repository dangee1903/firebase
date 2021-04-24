import React, { useState, useEffect } from 'react';
import Title from './Title'
import Menu from './Menu'
import RouteConfig from './../route-config'
import Notifier from './Notifier'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App(props) {
  const [state, setState] = useState('');

  useEffect(() => {
    return () => {
    }
  }, []);

  return (
    <Router>
    <Notifier />
    <div className="root">
      <div className="container">
          <Title />
        <div className="row">
          <Menu />
        <Switch>
          { RouteConfig.map((data,index)=> (
            <Route key={index} path={data.path} exact={data.exact} component={data.main} />
          ))}
        </Switch>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App;