import React, { Component } from 'react';
import { Container, Row, Col, Button  } from 'reactstrap';
import API from '../../../utils/API';
import TextCard from '../../parts/TextCard';
import CustomerSignUp from '../../parts/CustomerSignUp';
import SweetAlert from 'react-bootstrap-sweetalert';
import EditUser from '../../parts/Models/EditUser';
import NavBar from '../../parts/NavBar';

export class Home extends Component{
    constructor(props){
        super(props);

        // These are base state aspects that makes this page work
        this.state = {

            // User api data pool
            userPool: [],

            // Add user form
            addCustName1: "",
            addCustName2: "",
            addCustEmail: "",
            addCustPass: "",
            addCustPhone: 0,

            // Model attrs
            show: false,
            title: "Sweetie",
            text: null,

            // Update user info form
            updateFirstName: "",
            updateLastName: "",
            updateEmail: "",
            updatePassword: "",
            updatePhoneNum: ""



        }
    }

    // When page loads see inital state value
    componentDidMount(){
        console.log("Mount State: " , this.state);
    }

    // Every time state changes this function fires to give you a update all changes and thier values
    componentDidUpdate(){
        console.log("Updated State: ", this.state);
    }

    // General handler for inputs thats value is to change the state
    // If state does not exsist it makes a state field with its name
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    // Function that handles adding a customer to the db
    signUpUser = async () => {
        console.log("Add user state: ", this.state);
        const s = this.state;

        // Sends info of to util api call
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
        API.getUsers().then(res => this.setState({ userPool: res.data }))
        .catch(() => {
            this.setState({ 
                userPool: ["Didn't work"]
            });
        })
    }

    // Function that handles the deleting of a single user from the db
    // This will be tied to a button that is tied to a specific user
    deleteUser = id => {
        console.log("Delete function started");
        alert("You are deleting someting from the db!");
        // Send request to util api call
        API.deleteUser(id).then(res => this.getUsers()).then(() => this.getUsers())
    }

    // Sweet alert model that contains form for PUT operations 
    editUserModal = user => {

        this.setState({ 
            updateFirstName: user.first_name,
            updateLastName: user.last_name,
            updateEmail: user.email,
            updatePassword: user.password,
            updatePhoneNum: user.phone_num
        });
        
        let text = (
          <div>
            <EditUser 
                handleInputChange={this.handleInputChange}
                handleUpdateFormSubmit={this.handleUpdateFormSubmit}
                user={user}
            />
          </div>
        )
        // Update state to show model
        this.setState({
          title: `${user.first_name} ${user.last_name}`,
          text: text,
          show: true
        })
    }

    // When the update form on the model is submitted this function fires
    handleUpdateFormSubmit = (id) => {
        // If one of the form fields has no value block submit
        if (
          !this.state.updateFirstName ||
          !this.state.updateLastName ||
          !this.state.updateEmail ||
          !this.state.updatePassword ||
          !this.state.updatePhoneNum
        ) {
          // If failed block submit and show alert
          this.setState({
            title: "Error",
            text: "Please fill out all fields before submitting your survey",
            show: true
          });
          return;
        }
        // Send field info to db using utils api call
        API.updateUser(id, {
            first_name: this.state.updateFirstName,
            last_name: this.state.updateLastName,
            email: this.state.updateEmail,
            password: this.state.updatePassword,
            phone_num: this.state.updatePhoneNum
        })
        // After form submits call function to get all users to see updated info and close model
        .then(() => {
            this.getUsers();
            this.setState({ show : false});
        })
    }

    render() {
        
        return (
            <div>
                
                <NavBar />

                <Container className="container">

                    {/* Generic model waiting for function to show and fill it */}
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
                                    {/* Sign up component holds the actual form inside of another component files kept nested to 
                                     help with organization  */}
                                    <CustomerSignUp 
                                        handleInputChange={this.handleInputChange}
                                        handleFormSubmit={this.signUpUser}
                                    />
                            </TextCard>

                        </Col>
                        

                        {/* See all users in db */}
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
                                                {/* Show other user information as children */}
                                                <p>Phone number: {user.phone_num}</p>
                                                <p>Email: {user.email}</p>
                                                <p>Password: {user.password}</p>
                                                {/* Delete this user button */}
                                                <Button type="button" className="btn btn-danger" onClick={() => this.deleteUser(user._id)}>
                                                    Delete
                                                </Button>
                                                {/* Edit user button */}
                                                <Button onClick={() =>  this.editUserModal(user)}>
                                                    Edit
                                                </Button>
                                            </TextCard>
                                        )
                                    })}
                                </div>
                                // If nothing is in array display this text
                            ) : (<p>Nothing Here</p>)}
                        </Col>

                    </Row>

                </Container>
                

                
            </div>
        );
    }
}


export default Home;