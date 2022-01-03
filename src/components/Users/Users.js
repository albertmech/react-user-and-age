import UsersList from "./UsersList";

const Users = (props) => {
    const deleteUserHandler = (userId) => {
        props.onDeleteUser(userId);
    };

    return (
        <div>
            <UsersList users={props.users} onDeleteUser={deleteUserHandler}/>
        </div>
    )
}

export default Users;