import User from "./User"
import Card from "../UI/Card/Card"

import "./UsersList.css"

const UsersList = (props) => {
    const deleteUserHandler = (userId) => 
    {
        console.log(`User with id ${userId} selected to delete`);
        props.onDeleteUser(userId);
    };

    if(props.users.length === 0)
    {
        return <h2 className="users-list__fallback">No user found. Try adding one.</h2>
    }

    return (
        <Card>
            <ul className="users-list">
                {props.users.map(user => {
                    return <User key={user.id} id={user.id} username={user.username} age={user.age} onDeleteUser={deleteUserHandler} />
                })}
            </ul>
        </Card>
    )
}

export default UsersList;