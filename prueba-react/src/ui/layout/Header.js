import React, {Component, Fragment} from "react"
import "../../widgets/layout.css"


class Header extends Component {
    render() {
        let { links } = this.props
        return(
                <header>
                    <h1>SPA</h1>
                    <nav>
                        {links.map((link, i) => 

                            <Fragment key={i}>
                                <div className="link">
                                    <a href="#" key={i}>{link}</a>
                                </div>
                            </Fragment>
                            
                            )}
                    </nav>
                </header>
         
        )
    }
}



export default Header;