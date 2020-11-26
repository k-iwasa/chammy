import React from "react"
import {Redirect} from "react-router-dom"

import User from "./User"

export default function Auth ({children}){
        
    return (User.isLoggedIn() ? children : <Redirect to={'/Login'}/>);

}
