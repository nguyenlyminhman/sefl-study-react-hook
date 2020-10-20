import React from 'react';
import { Route } from 'react-router-dom';

function Router() {
    return (
        <div>
            <Route exact path="/" component={} />
            <Route exact path="/use-state" component={} />
            <Route exact path="/use-effect" component={} />
            <Route exact path="/use-context" component={} />
        </div>
    );
}

export default Router;