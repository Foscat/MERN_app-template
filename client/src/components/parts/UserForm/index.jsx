import React, { Component } from "react";
import { Form, Input } from "rsuite";
import API from "../../../utils/API";

/**
 * @component UserForm
 * @description A form component for creating or editing a user. It handles input changes and form submission.
 *              Depending on the 'type' prop, it can either create a new user or edit an existing user.
 * @param {string} props.type - The type of form, either "create" or "edit".
 * @param {object} [props.user] - The user object to edit (required if type is "edit").
 * @param {function} [props.hide] - A function to hide the form (optional, used in edit mode).
 * @returns {JSX.Element} The rendered UserForm component.
 */
class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [`${this.props.type}Name`]: "",
      [`${this.props.type}Username`]: "",
      [`${this.props.type}Email`]: "",
      [`${this.props.type}Password`]: "",
      [`${this.props.type}PhoneNum`]: ""
    };
  }

  // If this is an edit form, set the state with the user data when the component mounts
  componentDidMount() {
    if (this.props.type === "edit") {
      this.setForEdit(this.props.user);
    }
  }

  componentDidUpdate() {
    console.log("User form update state", this.state);
  }

  setForEdit = (user) => {
    this.setState({
      editName: user.name,
      editUsername: user.username,
      editEmail: user.email,
      editPassword: user.password,
      editPhoneNum: user.phone_num
    });
  };

  handleInputChange = (name, value) => {
    this.setState({ [name]: value });
  };

  /**
   * @method handleSubmit
   * @description Handles the form submission for both creating and editing a user. It sends the appropriate API request based on the form type and updates the state accordingly. For "create" type, it sends a POST request to add a new user. For "edit" type, it sends a PUT request to update the existing user. After a successful operation, it resets the form fields and hides the form if it's in edit mode.
     * @returns {void}
   */
  handleSubmit = () => {
    const s = this.state;

    // If this is a create form, send a POST request to add a new user
    if (this.props.type === "create") {
      API.addUser({
        name: s.createName,
        username: s.createUsername,
        email: s.createEmail,
        password: s.createPassword,
        phone_num: s.createPhoneNum
      })
        .then((res) => {
          console.log("Add user res", res);
          this.setState({
            createName: "",
            createUsername: "",
            createEmail: "",
            createPassword: "",
            createPhoneNum: ""
          });
        })
        .catch((err) => console.error("Add user error", err));
    }
    // If this is an edit form, send a PUT request to update the existing user 
    else if (this.props.type === "edit" && this.props.user._id) {
      API.updateUser(this.props.user._id, {
        name: s.editName,
        username: s.editUsername,
        email: s.editEmail,
        password: s.editPassword,
        phone_num: s.editPhoneNum
      })
        .then((res) => {
          console.log("Edit user res", res);
          this.setState({
            editName: "",
            editUsername: "",
            editEmail: "",
            editPassword: "",
            editPhoneNum: ""
          });
          this.props.hide();
        })
        .catch((err) => console.error("Edit user err", err));
    } else {
      console.error("Handle submit hit an error");
    }
  };

  render() {
    const { type } = this.props;

    return (
      <Form fluid className="stack app-user-form">
        <Form.Group className="app-form-group" controlId={`${type}Name`}>
          <Form.ControlLabel className="app-form-label">Name</Form.ControlLabel>
          <Input
            className="themed-input"
            value={this.state[`${type}Name`]}
            name={`${type}Name`}
            onChange={(value) => this.handleInputChange(`${type}Name`, value)}
            id={`${type}Name`}
            placeholder="Joe Buddy"
          />
        </Form.Group>

        <Form.Group className="app-form-group" controlId={`${type}Username`}>
          <Form.ControlLabel className="app-form-label">User Name</Form.ControlLabel>
          <Input
            className="themed-input"
            value={this.state[`${type}Username`]}
            name={`${type}Username`}
            onChange={(value) =>
              this.handleInputChange(`${type}Username`, value)
            }
            id={`${type}Username`}
            placeholder="JoeIzSooKewl"
          />
        </Form.Group>

        <Form.Group className="app-form-group" controlId={`${type}Email`}>
          <Form.ControlLabel className="app-form-label">Preferred Email</Form.ControlLabel>
          <Input
            className="themed-input"
            value={this.state[`${type}Email`]}
            name={`${type}Email`}
            onChange={(value) => this.handleInputChange(`${type}Email`, value)}
            id={`${type}Email`}
            placeholder="joeBuddy@aol.com"
          />
        </Form.Group>

        <Form.Group className="app-form-group" controlId={`${type}Password`}>
          <Form.ControlLabel className="app-form-label">Password</Form.ControlLabel>
          <Input
            className="themed-input"
            value={this.state[`${type}Password`]}
            name={`${type}Password`}
            onChange={(value) =>
              this.handleInputChange(`${type}Password`, value)
            }
            id={`${type}Password`}
            type="password"
            placeholder="password2019"
          />
        </Form.Group>

        <Form.Group className="app-form-group" controlId={`${type}PhoneNum`}>
          <Form.ControlLabel className="app-form-label">Phone Number</Form.ControlLabel>
          <Input
            className="themed-input"
            value={this.state[`${type}PhoneNum`]}
            name={`${type}PhoneNum`}
            onChange={(value) =>
              this.handleInputChange(`${type}PhoneNum`, value)
            }
            id={`${type}PhoneNum`}
            placeholder="0123456789"
          />
        </Form.Group>

        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>
          Submit
        </button>
      </Form>
    );
  }
}

export default UserForm;
