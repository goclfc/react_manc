import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Header from './Components/header_footer/Header';
import Footer from './Components/header_footer/Footer';
import Home from './Components/Home/Home';
import Signin from './Components/Signin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Dashboard from './Components/Admin/Dashboard';
import AuthGuard from './Hoc/AuthGuard';
const App= ({user})=> {
  
  return (
    <BrowserRouter>
      <Header user={user}/>
      <Switch >
        <Route path='/dashboard' exact component ={AuthGuard(Dashboard)}/>
        <Route path='/sign_in' exact component ={ 
          props => (<Signin {...props}  user = {user} />) 
          }/>
        <Route path='/' exact component ={Home}/>

       
      </Switch>
      <ToastContainer 
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
