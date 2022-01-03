import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./NewUserForm.module.css"

const NewUserForm = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [isValidUserName, setIsValidUserName] = useState(true);
    const [isValidAge, setIsValidAge] = useState(true);

    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        console.log(event.target.value);
        if (event.target.value.trim().length > 0) {
            setIsValidUserName(true);
            setError(null);
        }

        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        console.log(event.target.value);
        if (event.target.value.trim().length > 0) {
            setIsValidAge(true);
            setError(null);
        }

        setEnteredAge(event.target.value);
    };

    const userSubmitHandler = (event) => {
        event.preventDefault();
        let foundInvalid = false;
        if (enteredUsername.trim().length === 0) {
            setIsValidUserName(false);
            foundInvalid = true;

            setError({
                title: "Invalid username",
                message: "Enter a valid username.",
            });
        }

        if (enteredAge.trim().length === 0) {
            setIsValidAge(false);
            if (foundInvalid) {
                setError({
                    title: "Invalid input",
                    message: "Enter a valid username and age."
                });
            }
            else {
                foundInvalid = true;
                setError({
                    title: "Invalid age",
                    message: "Enter a valid age."
                });
            }
        }
        else {
            if (+enteredAge < 0) {
                setIsValidAge(false);
                if (foundInvalid) {
                    setError({
                        title: "Invalid input",
                        message: "Enter a valid username and age."
                    });
                }
                else {
                    foundInvalid = true;
                    setError({
                        title: "Invalid age",
                        message: "Age cannot be negative."
                    });
                }
            }
        }

        if (foundInvalid) {
            //alert("Username or age cannot be empty. Please re-enter.")
            return;
        }

        const newUser = {
            username: enteredUsername,
            age: enteredAge,
            id: Math.random().toString(),
        }

        console.log(newUser);
        { props.onSaveNewUser(newUser) };

        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card>
                <form onSubmit={userSubmitHandler}>
                    <div>
                        <div className={`${styles['form-control']} ${!isValidUserName && styles.invalid}`} >
                            <label>Username</label>
                            <input
                                type='text'
                                value={enteredUsername}
                                onChange={usernameChangeHandler}
                            />
                        </div>
                        <div className={`${styles['form-control']} ${!isValidAge && styles.invalid}`}>
                            <label>Age</label>
                            <input
                                type='number'
                                value={enteredAge}
                                onChange={ageChangeHandler}
                            />
                        </div>
                    </div>
                    <div>
                        <Button type='submit'>Add new user</Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default NewUserForm;