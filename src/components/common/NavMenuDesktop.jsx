import React, { Component } from 'react'
import { Link } from 'react-router';

class NavMenuDesktop extends Component {
    render() {
        return (
            <div>
                <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>                  
                </Link>
            </div>
        )
    }
}

export default NavMenuDesktop
