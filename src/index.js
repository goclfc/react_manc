import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Resources/css/app.css'
import {firebase} from './Components/firebase';
const Route = (props)=> {
  return (
    <App {...props}/>
  )
}

firebase.auth().onAuthStateChanged((user)=>{
  console.log(user)
  ReactDOM.render(
    <React.StrictMode>
      <Route user={user}/>
    </React.StrictMode>,
    document.getElementById('root')
  );

})