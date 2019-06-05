import React, { Component } from 'react';
import { Container, Row, Col, Button ,FormGroup, Label, Input } from 'reactstrap';
import API from '../../../utils/API';
import TextCard from '../../parts/TextCard';
import CustomerSignUp from '../../parts/CustomerSignUp';
import SweetAlert from "react-bootstrap-sweetalert";

export class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            userPool: [],
            addCustName1: "",
            addCustName2: "",
            addCustEmail: "",
            addCustPass: "",
            addCustPhone: 0,
            show: false,
            title: "Sweetie",
            text: null,
            updateFirstName: "",
            updateLastName: "",
            updateEmail: "",
            updatePassword: "",
            updatePhoneNum: ""



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
            phone_num: s.addCustPhone
        })
        .then(() => this.getUsers())
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


    contactModal = user => {
        
        let text = (
          <div>
            Phone number: {user.phone_num}
            <br />
            <form
              className="m-2"
              action="#" //This is where my update function call should go. In theroy 
              encType="text/plain"
              method="put"
              id="update-form"
            >

                    <FormGroup className="form-group">
                        <Label for="updateFirstName">First Name</Label>
                        <Input type="text" name="updateFirstName" onChange={this.handleInputChange}
                        id="updateFirstName" value={this.state.updateFirstName}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label for="updateLastName">Last Name</Label>
                        <Input type="text" name="updateLastName" onChange={this.handleInputChange}
                        id="updateLastName" value={this.state.updateLastName}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label for="updateEmail">Preferred Email</Label>
                        <Input type="email" name="updateEmail" onChange={this.handleInputChange}
                        id="updateEmail" value={this.state.updateEmail}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label for="updatePassword">Password</Label>
                        <Input type="password" name="updatePassword" onChange={this.handleInputChange}
                        id="updatePassword" value={this.state.updatePassword}/>
                    </FormGroup>

                    <FormGroup className="form-group">
                        <Label for="updatePhoneNum">Phone Number</Label>
                        <Input type="number" name="updatePhoneNum" onChange={this.handleInputChange}
                        id="updatePhoneNum" value={this.state.updatePhoneNum}/>
                    </FormGroup>

                    <Button className="btn btn-success" onClick={() => this.readyState().then(this.handleUpdateFormSubmit(user._id)) }>Submit</Button>
            </form>
          </div>
        )
        this.setState({
          title: `${user.first_name} ${user.last_name}`,
          text: text,
          show: true
        })
    }

    handleUpdateFormSubmit = (id) => {
        //data validation
        if (
          !this.state.updateFirstName ||
          !this.state.updateLastName ||
          !this.state.updateEmail ||
          !this.state.updatePassword ||
          !this.state.updatePhoneNum
        ) {
          //if failed show alert
          this.setState({
            title: "Error",
            text: "Please fill out all fields before submitting your survey",
            show: true
          });
          return;
        }

        API.updateUser(id, {
            first_name: this.state.updateFirstName,
            last_name: this.state.updateLastName,
            email: this.state.updateEmail,
            password: this.state.updatePassword,
            phone_num: this.state.updatePhoneNum
        })
    }

    render() {
        
        return (
            <div>
                <Container className="container">

                <SweetAlert
                    show={this.state.show}
                    title={this.state.title}
                    onConfirm={() => this.setState({ show: false })}
                    style={{ minWidth: "35%" }}
                >
                    <div style={{ maxHeight: "50vh", minWidth: "35%", overflow: "auto" }}>
                        {this.state.text}
                    </div>
                </SweetAlert>

                    <Row className="row">

                        {/* Add user form */}
                        <Col className="col">
                            <TextCard 
                                title="Basic component"
                                subtitle="DB test form">
                                    <Button className="btn btn-info" onClick={() => this.getUsers()}>
                                        Get all users in DB
                                    </Button>
                                    <CustomerSignUp 
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.signUpUser}
                                    />
                            </TextCard>

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
                                                <Button onClick={() =>  this.contactModal(user)}>Edit</Button>
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