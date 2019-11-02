import React, { Component } from 'react';
import {NavLink} from "reactstrap";

class NavBar extends Component  {
    constructor(props){
        super(props);

        this.state = {
            navbarOpen: false
        }
    }

    toggleNavbar = () => {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        return (
            <div style={styles.margin}>

                <nav style={styles.body} className="navbar navbar-expand-lg fixed-top navbar-light">
                    <strong>
                        {/* // eslint-disable-next-line */}
                        <a className="navbar-brand" href="/" style={styles.brand}>
                            MERN App Template
                        </a>
                    </strong>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink style={styles.link} href="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={styles.link} href="/workbench">Workbench</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }

}

const styles = {
    body: {
        backgroundColor: "#d4d7dd"
    },
    link: {
        color: "#0D1521",
        fontWeight: "bold",
        fontFamily: "Georgia, serif"
    },
    brand: {
        color: "#0D1521",
        fontWeight: "bold",
        fontFamily: "Georgia, serif"
    },
    margin: {
        marginBottom: "3rem"
    }
}

export default NavBar