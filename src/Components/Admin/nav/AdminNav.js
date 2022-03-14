import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { logOutHandler } from "../../Utils/Utilities";


const AdminNav = (props) => { 

    const links = [
        {
            title:'Matches',
            linkTo:'/admin_matches'

        },
        {
            title:'Players',
            linkTo:'/admin_players'
        }

    ]
    const renderItems = () => (
        links.map(item =>(
            <Link to={item.linkTo} key={item.title}>
                <ListItem button className="admin_nav_link">
                    {item.title}
                </ListItem>
            </Link>
        ))
    )
    return (
        <>
         {renderItems()}
         <ListItem button className="admin_nav_link" 
            onClick={()=> logOutHandler()}
         > 
            Log out
        </ListItem>
        </>
    )

}

export default withRouter(AdminNav) 