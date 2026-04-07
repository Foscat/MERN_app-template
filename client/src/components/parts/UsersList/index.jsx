import React from "react";
import TextCard from "../TextCard";

/**
 * @component UsersList
 * @description A component that displays a list of users in a card format. Each user card includes details and action buttons for editing or deleting the user.
 * @param {object[]} props.users - An array of user objects to be displayed.
 * @param {function} props.editUser - A function to handle editing a user.
 * @param {function} props.deleteUser - A function to handle deleting a user.
 * @returns {JSX.Element} The rendered UsersList component.
 */
const UsersList = ({ users, editUser, deleteUser }) => {
  if (!users.length) {
    return (
      <TextCard title="Users list" subtitle="Load data from your API">
        <p className="text-muted">No users loaded yet. Click "Get users" to refresh records.</p>
      </TextCard>
    );
  }

  return (
    <div className="stack users-list">
      {users.map((user) => {
        return (
          <TextCard
            key={user._id || `${user.username}-${user.email}`}
            title={user.name}
            subtitle={user.username}
          >
            <div className="user-meta-grid">
              <div className="stack user-meta">
                <div>
                  <h6 className="user-meta-label">Phone number</h6>
                  <p>{user.phone_num || "N/A"}</p>
                </div>
                <div>
                  <h6 className="user-meta-label">Email</h6>
                  <p>{user.email || "N/A"}</p>
                </div>
                <div>
                  <h6 className="user-meta-label">Password</h6>
                  <p>{user.password || "N/A"}</p>
                </div>
                <div>
                  <h6 className="user-meta-label">User since</h6>
                  <p>{user.createdAt || "N/A"}</p>
                </div>
              </div>

              <div className="stack user-actions">
                {/* Delete this user button */}
                <button type="button" className="btn btn-danger" onClick={() => deleteUser(user._id)}>
                  Delete
                </button>
                {/* Edit user button */}
                <button type="button" className="btn btn-ghost" onClick={() => editUser(user)}>
                  Edit
                </button>
              </div>
            </div>
          </TextCard>
        );
      })}
    </div>
  );
};

export default UsersList;
