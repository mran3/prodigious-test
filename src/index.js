import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import ProdigiousTest from './ProdigiousTest'
import 'whatwg-fetch';


// document.getElementById('navBar').addEventListener('click', (e)=>{
//     ReactDOM.render(<NavBar />, document.getElementById('root'));
//     e.preventDefault()
// })

//ReactDOM.render(<ProdigiousTest />, document.getElementById('widget1'));
//ReactDOM.render(<UserProfile />, document.getElementById('widget2'));

fetch('http://www.mocky.io/v2/597a69cd11000045089edeb9')
    .then(function(response) { 
      return response.json()
    }).then(function(json) {
        ReactDOM.render(<ProdigiousTest dict={json} />, document.getElementById('widget1'));
        //this.setState({dict: json})
        //console.log('parsed json', json)
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })



