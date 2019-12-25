import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// Seperate form for easy changing of form aspects or can be replaced with preferred form component

const CustomerSignUpForm = (props) => {
    return(
        <Form target="/" style={props.style}>

            <FormGroup className="form-group">
                <Label for="addName">Name</Label>
                <Input type="text" name="addName" onChange={props.handleInputChange}
                    id="addName" placeholder="Joe Buddy"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="addUsername">User Name</Label>
                <Input type="text" name="addUsername" onChange={props.handleInputChange}
                    id="addUsername" placeholder="JoeIzSooKewl"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="email">Preferred Email</Label>
                <Input type="email" name="addEmail" onChange={props.handleInputChange}
                    id="email" placeholder="joeBuddy@aol.com"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="password">Password</Label>
                <Input type="password" name="addPassword" onChange={props.handleInputChange}
                    id="password" placeholder="password2019"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="phoneNum">Phone Number</Label>
                <Input type="tel" name="addPhoneNum" onChange={props.handleInputChange}
                    id="phoneNum" placeholder="0123456789"/>
            </FormGroup>

            <Button className="btn btn-success" onClick={props.handleFormSubmit}>Submit</Button>
        </Form>
    )
}

export default CustomerSignUpForm;