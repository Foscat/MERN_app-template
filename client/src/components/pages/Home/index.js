import React, { Component } from 'react';
import { Row, Col, Button  } from 'reactstrap';
import moment from "moment";
import API from '../../../utils/API';
import TextCard from '../../parts/TextCard';
import CustomerSignUp from '../../parts/CustomerSignUp';
import SweetAlert from 'react-bootstrap-sweetalert';
import EditUser from '../../parts/Models/EditUser';

class Home extends Component{
    constructor(props){
        super(props);

        // These are base state aspects that makes this page work
        this.state = {

            // User api data pool
            userPool: [],

            // Add user form
            addFirstName: "",
            addLastName: "",
            addEmail: "",
            addPassword: "",
            addPhoneNum: 0,

            // Model attrs
            show: false,
            title: "Sweetie",
            text: null,

            // Update user info form
            updateFirstName: "",
            updateLastName: "",
            updateEmail: "",
            updatePassword: "",
            updatePhoneNum: "",
        }
    }

    // When page loads see inital state value
    componentDidMount(){
        console.log("Mount State: " , this.state);
        this.getUsers();
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

        if (
            !s.addFirstName ||
            !s.addLastName ||
            !s.addEmail ||
            !s.addPassword ||
            !s.addPhoneNum
        ) {
        // If failed block submit and show alert
        this.setState({
            title: "Error",
            text: "Please fill out all fields before creating your profile",
            show: true
        });
        return;
        }

        // Sends info of to util api call
        API.addUser({
            first_name: s.addFirstName,
            last_name: s.addLastName,
            email: s.addEmail,
            password: s.addPassword,
            phone_num: s.addPhoneNum,
            createdAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        })
        .catch(err=>console.error("You hit an error: ",err))
        .then(res => {
            console.log("Add user res:", res.data);
            window.location.reload(false);
        })
    };

    // Grabs all users in db and displays them on the DOM
    getUsers= async () => {
        console.log("Get users: ", this.state);
        // When users are pulled from the db the are put into an array. That array when it contains info loops and makes cards for each user
        API.getUsers().then(res => this.setState({ userPool: res.data }))
        .catch(err => console.error(err));
    }

    // Function that handles the deleting of a single user from the db
    // This will be tied to a button that is tied to a specific user
    deleteUser = id => {
        console.log("Delete function started");
        alert("You are deleting someting from the db!");
        // Send request to util api call
        API.deleteUser(id).then(res => {
            console.log("Delete response:", res);
            this.getUsers()
        })
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
        let s = this.state
        // If one of the form fields has no value block submit
        if (
          !s.updateFirstName ||
          !s.updateLastName ||
          !s.updateEmail ||
          !s.updatePassword ||
          !s.updatePhoneNum
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
            first_name: s.updateFirstName,
            last_name: s.updateLastName,
            email: s.updateEmail,
            password: s.updatePassword,
            phone_num: s.updatePhoneNum,
            updatedAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        })
        // After form submits call function to get all users to see updated info and close model
        .then(() => {
            this.getUsers();
            this.setState({ show : false});
        })
    }

    render() {
        
        return (
            <div className="pt-4">


                {/* Generic model waiting for function to show and fill it */}
                <SweetAlert
                    show={this.state.show}
                    title={this.state.title}
                    onConfirm={() => this.setState({ show: false })}
                    style={{ minWidth: "35%" }}
                >
                    <div style={styles.sweetBox}>
                        {this.state.text}
                    </div>
                </SweetAlert>

                <Row className="mx-auto">

                    {/* Add user form */}
                    <Col lg="6" className="mx-auto">
                        <TextCard 
                            title="Basic component"
                            subtitle="DB test form">
                                <Button color="info" onClick={() => this.getUsers()}>
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
                    <Col lg="6" className="mx-auto">
                        {this.state.userPool.length ? (
                            <div>
                                {this.state.userPool.map((user) => {
                                    return(
                                        <TextCard
                                        key={user._id}
                                        title={user.first_name}
                                        subtitle={user.last_name}
                                        >
                                            {/* Show other user information as children */}
                                            <span><h6>Phone number:</h6> <p>{user.phone_num}</p></span>
                                            <span><h6>Email:</h6> <p>{user.email}</p></span>
                                            <span><h6>Password:</h6> <p>{user.password}</p></span>
                                            {/* Delete this user button */}
                                            <Button color="danger" onClick={() => this.deleteUser(user._id)}>
                                                Delete
                                            </Button>
                                            {/* Edit user button */}
                                            <Button color="info" onClick={() =>  this.editUserModal(user)}>
                                                Edit
                                            </Button>
                                        </TextCard>
                                    )
                                })}
                            </div>
                            // If nothing is in array display empty p tag
                        ) : (<p></p>)}
                    </Col>

                </Row>
                
                
            </div>
        );
    }
}

const styles = {
    sweetBox:{ 
        maxHeight: "50vh", 
        minWidth: "35%", 
        overflow: "auto" 
    }
}

export default Home;