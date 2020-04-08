import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';

export default function Routes(){
    return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/incidents" component={NewIncident} />
        <Route path="/profile" component={Profile} />
    </Switch>
    
    </BrowserRouter>
    );
}