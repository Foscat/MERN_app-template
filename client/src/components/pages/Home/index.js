import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import API from '../../../utils/API';
import TextCard from '../../parts/TextCard';

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
                <TextCard 
                    title="Basic component"
                    subtitle="Heyy"
                />
            </div>
        );
    }
}

export default Home;