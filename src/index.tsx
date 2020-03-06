import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import Dropdown from './components/app/Sample'
import * as serviceWorker from './serviceWorker';
import { ProjectsList } from './components/app/project';
import ParentComponent from './components/app/parent';
import Bar from './components/app/inheritance';
import Appmodel from './components/app/Appmodels'

let dat:Appmodel[] =[];

/* ReactDOM.render(<Bar arr= {dat}/>, document.getElementById('landingPage')); */
ReactDOM.render(<ParentComponent />, document.getElementById('dropDown'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
