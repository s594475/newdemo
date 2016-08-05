import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import routes from './routes.js';
import {Router,hashHistory} from 'react-router';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import GithubAccount from './GithubAccount/GithubAccount';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();




render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
