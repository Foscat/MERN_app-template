import React from 'react';
import { Row, Col, Button } from "reactstrap";
import TextCard from '../TextCard';


const UsersList = ({ users, editUser, deleteUser }) => {
    return(
        <div>
            {users.length ? (
                users.map((user,i)=>{
                    return(
                        <TextCard
                            key={i}
                            title={user.name}
                            subtitle={user.username}>
                            <Row>
                                <Col sm="10">
                                <span><h6>Phone number:</h6> <p>{user.phone_num}</p></span>
                                <span><h6>Email:</h6> <p>{user.email}</p></span>
                                <span><h6>Password:</h6> <p>{user.password}</p></span>
                                <span><h6>User since:</h6> <p>{user.createdAt}</p></span>
                                </Col>

                                <Col sm="10">
                                    {/* Delete this user button */}
                                    <Button color="danger" onClick={() => deleteUser(user._id)}>
                                        X
                                    </Button>
                                    {/* Edit user button   */}
                                    <Button color="info" onClick={() =>  editUser(user)}>
                                        Edit
                                    </Button>
                                </Col>
                            </Row>
                        </TextCard>
                    )
                })
                ): null
            }
        </div>
    )
}

export default UsersList;