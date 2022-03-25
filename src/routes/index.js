import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Loadable from 'react-loadable';

// import Store from '../pages/store';
// import About from '../pages/About';
// import NotFound from '../pages/NotFound';
// import Cart from "../pages/cart";

const AsyncStore = Loadable({
  loader: () => import(/* webpackChunkName: "Store" */ '../pages/store'),
  loading: () => <div>loading...</div>,
  modules: ['Store'],
});

const AsyncAbout = Loadable({
  loader: () => import(/* webpackChunkName: "About" */ '../pages/About'),
  loading: () => <div>loading about page...</div>,
  modules: ['About'],
});

const AsyncNotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound'),
  loading: () => <div>loading not found page...</div>,
  modules: ['NotFound'],
});

const AsyncCart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ '../pages/cart'),
  loading: () => <div>loading not cart page...</div>,
  modules: ['Cart'],
});

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route path="/about" component={AsyncAbout} />
          <Route exact path="/" component={AsyncStore}/>
          <Route path="/cart" component={AsyncCart} />
          <Route path="*" component={AsyncNotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;