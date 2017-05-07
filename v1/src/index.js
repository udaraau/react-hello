import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const user = {
  firstName : 'Anishka',
  secondName : 'Udara'
}

const e1 = (<h1> Hello, {getName(user)}</h1>);
const e2 = (getGreeting(null));

function getName(user) {
  return user.firstName + " " + user.secondName;
}

function getGreeting(user) {
  if(user) {
    return (<h1> Hello, {getName(user)}</h1>);
  }
  return <h1> Hello, Stranger </h1>;
}

ReactDOM.render(
  e2,
  document.getElementById('root')
);
