import "./User.css"

const User = (props) => {
    const clickHandler = () => {
        console.log(props.id);
        props.onDeleteUser(props.id);
    };

    return (
        <li className="user" onClick={clickHandler}>
            {props.username} (age: {props.age})
        </li>
    )
}

export default User;