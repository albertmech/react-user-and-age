import { useState } from 'react';
import NewUserForm from './components/NewUser/NewUserForm';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [users, setUsers] = useState(
    []);

  const saveNewUserHandler = (newUserData) => {
    console.log(newUserData);
    setUsers((prevUsers)=>[
      ...prevUsers,
      newUserData,
    ]);
  };

  const deleteUserHandler = (userId) => {
    console.log(`Deleting user with id ${userId}`);
    setUsers(users.filter(user => user.id != userId));
  };

  return (
    <div>
      <NewUserForm onSaveNewUser={saveNewUserHandler} />
      <UsersList users={users} onDeleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;
