import React from 'react'
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Header from './Components/header_footer/Header';
import Footer from './Components/header_footer/Footer';
import Home from './Components/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch >
        <Route path='/' exact component ={Home}/>

       
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
