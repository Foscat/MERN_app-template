import React, { Component } from 'react';
import { Row, Col, Button } from "reactstrap";
import SweetAlert from "react-bootstrap-sweetalert";
import UserForm from '../../parts/UserForm';
import TextCard from '../../parts/TextCard';
import API from '../../../utils/API';
import UsersList from '../../parts/UsersList';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
             // User api data pool
             userPool: [],
             // Modal attributes
             show: false,
             title: "Sweetie",
             text: null,
        };
    };

    componentDidUpdate(){
        console.log("Home component updtate", this.state);
    }

    getUsers = () => {
        API.getUsers()
        .then(res=>this.setState({ userPool:res.data }))
        .catch(err=>console.error("Get users error",err));
    };

    editUser = user => {
        this.setState({ 
            show:true, 
            title:"Edit info", 
            text:<UserForm 
                type="edit" 
                user={user} 
                hide={()=>this.setState({ show:false })} /> 
        });
        this.getUsers();
    }

    deleteUser = id => {
        API.deleteUser(id)
        .then(res=>console.log("Delete user res",res))
        .catch(err=>console.error("Delete user error",err));
        this.getUsers();
    }

    render() {
        const { show, title, text, userPool } = this.state;
        return (
            <Row>
                {/* Generic model waiting for function to show and fill it */}
                <SweetAlert
                    show={show}
                    title={title}
                    onConfirm={() => this.setState({ show: false })}
                    style={styles.center}
                >
                    <div style={styles.sweetBox}>
                        {text}
                    </div>
                </SweetAlert>

                <Col>
                    <Button className="m-3" color="info" onClick={()=> this.getUsers()}>Get users</Button>
                    <TextCard
                        title="Create user form"
                        subtitle="Fill out info to add user to the DB">
                        <UserForm type="create"/>
                    </TextCard>
                </Col>

                <Col>
                    <UsersList users={userPool} editUser={this.editUser} deleteUser={this.deleteUser} />
                </Col>
                
            </Row>
        );
    };
};

const styles = {
    center: { 
        justifyContent: "center" 
    },
    sweetBox:{ 
        maxHeight: "50vh", 
        minWidth: "50%", 
        overflow: "auto" 
    }
};

export default Home;