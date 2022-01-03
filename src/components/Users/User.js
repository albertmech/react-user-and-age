import Card from "../UI/Card/Card";
import "./User.css"

const User = (props) => {
    const clickHandler = () => {
        console.log(props.id);
        props.onDeleteUser(props.id);
    };

    return (
        <li>
            <Card className="user" onClick={clickHandler}>
                {props.username} (age: {props.age})
            </Card>
        </li>
    )
}

export default User;