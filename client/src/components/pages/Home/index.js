import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import API from '../../../utils/API';
import TextCard from '../../parts/TextCard';
import CustomerSignUp from '../../parts/CustomerSignUp';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            userPool: [],
            addCustName1: "",
            addCustName2: "",
            addCustEmail: "",
            addCustPass: "",
            addCustPhone: 0
        }
    }

    componentDidMount(){
        console.log("Mount State: " , this.state)
    }

    componentDidUpdate(){
        console.log("Updated State: ", this.state);
    }

    // General handler for inputs thats value is to change the state on the DOM
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    // function that handles adding a customer to the db
    signUpUser = async () => {
        console.log("Add user state: ", this.state);
        const s = this.state;

        API.addUser({
            first_name: s.addCustName1,
            last_name: s.addCustName2,
            email: s.addCustEmail,
            password: s.addCustPass,
            phone_num: s.addCustPhone,
        })
    };

    // Grabs all users in db and displays them on the DOM
    getUsers= async () => {
        console.log("Get users: ", this.state);
        // When users are pulled from the db the are put into an array. That array when it contains info loops and makes cards for each user
        API.getUsers().then(res => this.setState({ userPool: res.data  }))
        .catch(() => {
            this.setState({ 
                userPool: ["Didn't work"]
            });
        })
    }

    // Function that handles the deleting of a single item from the db
    // tied to a button that is rendered with each item in inventory table
    deleteUser = id => {
        console.log("Delete function started");
        alert("You are deleting someting from the db!");
        API.deleteUser(id).then(res => this.getUsers()).then(() => this.getUsers())
    }

    render() {
        return (
            <div>
                <Container className="container">

                    <Row className="row">

                        {/* Add user form */}
                        <Col className="col">
                            <TextCard 
                                title="Basic component"
                                subtitle="DB test form">
                                    <CustomerSignUp 
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.signUpUser}
                                    />
                            </TextCard>

                            <Button className="btn btn-info" onClick={() => this.getUsers()}>
                                Get all users in DB
                            </Button>
                        </Col>
                        

                        {/* See users in db */}
                        <Col className="col">
                            {this.state.userPool.length ? (
                                <div className="bg-info">
                                    {this.state.userPool.map((user) => {
                                        return(
                                            <TextCard
                                            key={user._id}
                                            title={user.first_name}
                                            subtitle={user.last_name}
                                            >
                                                <p>Phone number: {user.phone_num}</p>
                                                <p>Email: {user.email}</p>
                                                <p>Password: {user.password}</p>
                                                {/* Delete this user button */}
                                                <Button type="button" className="btn btn-danger" onClick={() => this.deleteUser(user._id)}>
                                                    Delete
                                                </Button>
                                            </TextCard>
                                        )
                                    })}
                                </div>
                            ) : (<p>Nothing Here</p>)}
                        </Col>

                    </Row>

                </Container>
                

                
            </div>
        );
    }
}

export default Home;