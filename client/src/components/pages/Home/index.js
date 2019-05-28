import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import API from '../../../utils/API';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        console.log("Mount State: " , this.state)
    }

    componentDidUpdate(){
        console.log("Updated State: ", this.state);
    }

    render() {
        return (
            <div>
                <h1>This is the Home page.</h1>
            </div>
        );
    }
}

export default Home;