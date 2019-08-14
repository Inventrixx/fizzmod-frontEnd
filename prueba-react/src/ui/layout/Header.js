import React, { Component, Fragment } from "react"
import "./widgets/layout.css"
import { connect } from "react-redux"
import { NavLink}  from "react-router-dom"

class Header extends Component {
    render() {
        let { links } = this.props
        console.log(this.props)
        return(
                <header>
                    <h1>SPA</h1>
                    <nav>
                        {links.map((link, i) => 

                            <NavLink to={`/${link}`} key={i}>{link}</NavLink>
                            
                            )}
                    </nav>
                </header>
         
        )
    }
}



export default connect(store=>({
    links: store.links
})

)(Header);