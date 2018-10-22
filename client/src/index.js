import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar'
import All from './components/All';
import One from './components/One'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route } from 'react-router-dom'

const Welcome = (props)=>(
    <h1 className="main">Welcome to Creditap</h1>
  );
const routes =(
<BrowserRouter>
<div>
  <Route  path="/" component={Topbar} />
  <Route  path="/" component={Sidebar} />
  <Route exact path="/" component={Welcome} />
  <Route exact path="/add" component={App} />
  <Route exact path="/all" component={All} />
  <Route exact path="/one/:id" component={One} />

  </div>

</BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
