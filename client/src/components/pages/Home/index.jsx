import React, { Component } from "react";
import { Modal } from "rsuite";
import UserForm from "../../parts/UserForm";
import TextCard from "../../parts/TextCard";
import API from "../../../utils/API";
import UsersList from "../../parts/UsersList";

/**
 * @component Home
 * @description Home page component, contains user form and users list, also a generic modal for edit user form
 */
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // User api data pool
      userPool: [],
      // Modal attributes
      show: false,
      title: "Editor",
      text: null
    };
  }

  componentDidUpdate() {
    console.log("Home component update", this.state);
  }

  getUsers = () => {
    API.getUsers()
      .then((res) => this.setState({ userPool: res.data }))
      .catch((err) => console.error("Get users error", err));
  };

  editUser = (user) => {
    this.setState({
      show: true,
      title: "Edit info",
      text: (
        <UserForm
          type="edit"
          user={user}
          hide={() => this.setState({ show: false })}
        />
      )
    });
  };

  deleteUser = (id) => {
    API.deleteUser(id)
      .then((res) => {
        console.log("Delete user res", res);
        this.getUsers();
      })
      .catch((err) => console.error("Delete user error", err));
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { show, title, text, userPool } = this.state;

    return (
      <>
        {/* Generic modal waiting for function to show and fill it */}
        <Modal className="app-modal" open={show} onClose={this.closeModal} size="sm">
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="app-modal-body">{text}</div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-primary" onClick={this.closeModal}>
              Close
            </button>
          </Modal.Footer>
        </Modal>

        <section className="container section stack home-page">
          <div className="row home-toolbar">
            <h1 className="home-title">Users Dashboard</h1>
            <button type="button" className="btn btn-accent" onClick={this.getUsers}>
              Get users
            </button>
          </div>

          <div className="home-grid">
            <TextCard
              title="Create user form"
              subtitle="Fill out info to add user to the database"
            >
              <UserForm type="create" />
            </TextCard>

            <UsersList
              users={userPool}
              editUser={this.editUser}
              deleteUser={this.deleteUser}
            />
          </div>
        </section>
      </>
    );
  }
};

export default Home;
