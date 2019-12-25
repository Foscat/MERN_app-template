import React from 'react';
import { Button ,FormGroup, Label, Input } from 'reactstrap';

const EditUser = (props) => {
    return (
        <form
            className={props.className}
            action="#" //This does not need a action since submit function handles info flow
            encType="text/plain"
            method="put"
            id="edit-form"
        >

            <FormGroup className="form-group">
                <Label for="updateName">Name</Label>
                <Input type="text" name="updateName" onChange={props.handleInputChange}
                id="updateName" defaultValue={props.user.name} placeholder="Change name"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="updateUsername">User Name</Label>
                <Input type="text" name="updateUsername" onChange={props.handleInputChange}
                id="updateUsername" defaultValue={props.user.username} placeholder="Change username"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="updateEmail">Preferred Email</Label>
                <Input type="email" name="updateEmail" onChange={props.handleInputChange}
                id="updateEmail" defaultValue={props.user.email} placeholder="Change email"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="updatePassword">Password</Label>
                <Input type="password" name="updatePassword" onChange={props.handleInputChange}
                id="updatePassword" defaultValue={props.user.password} placeholder="Change password"/>
            </FormGroup>

            <FormGroup className="form-group">
                <Label for="updatePhoneNum">Phone Number</Label>
                <Input type="number" name="updatePhoneNum" onChange={props.handleInputChange}
                id="updatePhoneNum" defaultValue={props.user.phone_num} placeholder="Change phone number"/>
            </FormGroup>

            <Button className="btn btn-success" onClick={() => props.handleUpdateFormSubmit(props.user._id) }>Submit</Button>

        </form>
    )
};

export default EditUser;