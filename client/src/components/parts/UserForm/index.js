import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import API from "../../../utils/API";

class UserForm extends Component {
    constructor(props){
        super(props);
        this.state={
            [`${this.props.type}Name`]: "",
            [`${this.props.type}Username`]: "",
            [`${this.props.type}Email`]: "",
            [`${this.props.type}Password`]: "",
            [`${this.props.type}PhoneNum`]: "",
        };
    };

    componentDidMount(){
        if(this.props.type === "edit"){
            this.setForEdit(this.props.user);
        }
    }

    componentDidUpdate(){
        console.log("User form update state",this.state);
    }

    setForEdit = user=> {
        this.setState({ 
            editName: user.name,
            editUsername: user.username,
            editEmail: user.email,
            editPassword: user.password,
            editPhoneNum: user.phone_num
         });
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        let s = this.state;
        if(this.props.type === "create"){
            API.addUser({
                name: s.createName,
                username: s.createUsername,
                email: s.createEmail,
                password: s.createPassword,
                phone_num: s.createPhoneNum
            })
            .then(res=>{
                console.log("Add user res",res);
                this.setState({ 
                    createName: "",
                    createUsername:"",
                    createEmail: "",
                    createPassword: "",
                    createPhoneNum: ""
                });
            })
            .catch(err=>console.error("Add user error", err));
        }
        else if(this.props.type === "edit" && this.props.user._id){
            API.updateUser(this.props.user._id,{
                name: s.editName,
                username: s.editUsername,
                email: s.editEmail,
                password: s.editPassword,
                phone_num: s.editPhoneNum
            })
            .then(res=>{
                console.log("Edit user res",res);
                this.setState({ 
                    editName: "",
                    editUsername:"",
                    editEmail: "",
                    editPassword: "",
                    editPhoneNum: ""
                });
                this.props.hide();
            })
            .catch(err=>console.error("Edit user err",err));
        }
        else console.error("Handle submit hit an error");
    };

    render() {
        const { type } = this.props;
        return (
            <Form>
                <FormGroup className="form-group">
                    <Label for={`${type}Name`}>Name</Label>
                    <Input value={`${this.state[`${type}Name`]}`} type="text" name={`${type}Name`} 
                        onChange={this.handleInputChange} id={`${type}Name`} placeholder="Joe Buddy"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for={`${type}Username`}>User Name</Label>
                    <Input value={`${this.state[`${type}Username`]}`} type="text" name={`${type}Username`} 
                        onChange={this.handleInputChange} id={`${type}Username`} placeholder="JoeIzSooKewl"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for={`${type}Email`}>Preferred Email</Label>
                    <Input value={`${this.state[`${type}Email`]}`} type="email" name={`${type}Email`} 
                        onChange={this.handleInputChange} id={`${type}Email`} placeholder="joeBuddy@aol.com"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for={`${type}Password`}>Password</Label>
                    <Input value={`${this.state[`${type}Password`]}`} type="password" name={`${type}Password`} 
                        onChange={this.handleInputChange} id={`${type}Password`} placeholder="password2019"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for={`${type}PhoneNum`}>Phone Number</Label>
                    <Input value={`${this.state[`${type}PhoneNum`]}`} type="tel" name={`${type}PhoneNum`} 
                        onChange={this.handleInputChange} id={`${type}PhoneNum`} placeholder="0123456789"/>
                </FormGroup>

                <Button onClick={this.handleSubmit} color="success">Submit</Button>
            </Form>
        )
    };
};


export default UserForm;