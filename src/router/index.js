import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../module/home';
import UseStateHook from '../module/use-state';
import UseEffectHook from '../module/use-effect';
import UseContextHook from '../module/use-context';

import UseReducerHook from '../module/use-reducer';
import UseCallbackHook from '../module/use-callback';
import UseMemoHook from '../module/use-memo';
import UseRefHook from '../module/use-ref';
import UseImperativeHandleHook from '../module/use-imperative-handle';
import UseLayoutEffectHook from '../module/use-layout-effect';
import UseDebugValueHook from '../module/use-debug-value';

function RouterHook() {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/use-state" component={UseStateHook} />
            <Route exact path="/use-effect" component={UseEffectHook} /> 
            <Route exact path="/use-context" component={UseContextHook} />
            <Route exact path="/use-reducer" component={UseReducerHook} />
            <Route exact path="/use-callback" component={UseCallbackHook} />
            <Route exact path="/use-memo" component={UseMemoHook} />
            <Route exact path="/use-ref" component={UseRefHook} /> 
            <Route exact path="/use-imperative-handle" component={UseImperativeHandleHook} />
            <Route exact path="/use-layout-effect" component={UseLayoutEffectHook} />
            <Route exact path="/use-debug-value" component={UseDebugValueHook} />
        </div>
    );
}

export default RouterHook;