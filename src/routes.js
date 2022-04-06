import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from './Hoc/Auth';

import Header from './Components/Header_footer/Header';
import Footer from './Components/Header_footer/Footer';
import Home from './Components/Home';
import SignIn from './Components/Signin';
import Dashboard from './Components/Admin/Dashboard';
import MatchesHome from './Components/Home/matches';
import MeetPlayers from './Components/Home/meetPlayers';
import { Devider } from './Components/Utils/tools';
import AdminPlayers from './Components/Admin/players';
import AdminLayout from './Hoc/AdminLayout';
const Routes = ({ user }) => {
    return ( 
        <BrowserRouter >
        <Header user = { user }/>  
        <Switch >
        <Route path = "/dashboard"
        exact component = { AuthGuard(Dashboard) }
        />  
        <Route path = "/sign_in"
            exact component = {
                props => ( 
                < SignIn {...props }
                    user = { user }
                    />
                    ) 
                }
        />  
        <Route path = "/the_matches"
            exact component = {
                props => ( 
                    <> 
                <Devider />
                < MatchesHome {...props }
                    user = { user }
                    />
                    </>
                    ) 
                }
        /> 

        <Route path = "/admin_players"
            exact component = {
                AuthGuard(AdminPlayers)
                }
        /> 
        <Route path = "/"
            exact component = { Home }
        />  
        </Switch >  
        <ToastContainer />
        <Footer />
        </BrowserRouter>
    );

}

export default Routes;