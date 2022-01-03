import { useState } from 'react';
import NewUser from './components/NewUser/NewUser';
import Users from './components/Users/Users';

const App = () => {
  const [users, setUsers] = useState(
    [
      {
        id: "user1",
        username: "User1",
        age: 10,
      },
      {
        id: "user2",
        username: "User2",
        age: 20,
      },
    ]);

  const saveNewUserHandler = (newUserData) => {
    console.log(newUserData);
    setUsers((prevUsers)=>[
      newUserData,
      ...prevUsers,
    ]);
  };

  const deleteUserHandler = (userId) => {
    console.log(`Deleting user with id ${userId}`);
    setUsers(users.filter(user => user.id != userId));
  };

  return (
    <div>
      <NewUser onSaveNewUser={saveNewUserHandler} />
      <Users users={users} onDeleteUser={deleteUserHandler}/>
    </div>
  );
}

export default App;
