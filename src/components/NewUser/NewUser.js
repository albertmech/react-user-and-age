import NewUserForm from "./NewUserForm";

const NewUser = (props) => {
    const saveNewUserHandler = (newUser) => {
        const newUserData = {
            id: Math.random().toString(),
            ...newUser,
        };

        console.log(newUserData);
        props.onSaveNewUser(newUserData);
    }

    return (
        <div>
            <NewUserForm onSaveNewUser={saveNewUserHandler} />
        </div>
    )
}

export default NewUser;