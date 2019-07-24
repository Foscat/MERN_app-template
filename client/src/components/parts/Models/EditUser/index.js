import React from 'react';
import { Button ,FormGroup, Label, Input } from 'reactstrap';

const EditUser = (props) => {
    return (
        <div>
            <form
              className="m-2"
              action="#" //This does not need a action since submit function handles info flow
              encType="text/plain"
              method="put"
              id="edit-form"
            >

                <FormGroup className="form-group">
                    <Label for="updateFirstName">First Name</Label>
                    <Input type="text" name="updateFirstName" onChange={props.handleInputChange}
                    id="updateFirstName" defaultValue={props.user.first_name} placeholder="Enter first name"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="updateLastName">Last Name</Label>
                    <Input type="text" name="updateLastName" onChange={props.handleInputChange}
                    id="updateLastName" defaultValue={props.user.last_name} placeholder="Enter last name"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="updateEmail">Preferred Email</Label>
                    <Input type="email" name="updateEmail" onChange={props.handleInputChange}
                    id="updateEmail" defaultValue={props.user.email} placeholder="Enter email"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="updatePassword">Password</Label>
                    <Input type="password" name="updatePassword" onChange={props.handleInputChange}
                    id="updatePassword" defaultValue={props.user.password} placeholder="Enter password"/>
                </FormGroup>

                <FormGroup className="form-group">
                    <Label for="updatePhoneNum">Phone Number</Label>
                    <Input type="number" name="updatePhoneNum" onChange={props.handleInputChange}
                    id="updatePhoneNum" defaultValue={props.user.phone_num} placeholder="Enter phone number"/>
                </FormGroup>

                <Button className="btn btn-success" onClick={() => props.handleUpdateFormSubmit(props.user._id) }>Submit</Button>

            </form>
        </div>
    )
};

export default EditUser;