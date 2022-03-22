import './App.css';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import React, { useEffect, useState } from 'react';
import axios from 'axios'


function App() {

      useEffect(()=>{
        getUsers()
      },[])

      
      const [users, setUsers] = useState(null)
      const [userSelect, setUserSelect] =useState(null)

      const [isTrue, setIsTrue]= useState(false)

      
    const getUsers = () =>{
      axios.get("https://users-crud1.herokuapp.com/users/")
      .then(r =>{ setUsers((r.data))})
    }


    //dentro de addUser ejecutamos una peticion post para agregar un user
    const addUsers =(user)=>{
      axios.post("https://users-crud1.herokuapp.com/users/", user)
      .then(()=> getUsers())


      //* Funciona de manera local:
      // setUsers( [...users, user])
    }
    

    const deleteUsers = id =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(()=> getUsers())
    }


    //seteamos UserSelect con el usuario proveniente del List
    const SelectUsers = user =>{
      setUserSelect(user);
      setIsTrue(true);
    }
    
    const UpdateUsers = user => {
      console.log(user.id)
      axios.put(`https://users-crud1.herokuapp.com/users/${user.id}/`, user)
      .then(()=>{        
        getUsers()
      } )
    }
  

  return (
    <div className="App">
      <UsersForm addUsers={addUsers} userSelect={userSelect}  UpdateUsers={UpdateUsers} setUserSelect={setUserSelect} isTrue={isTrue} setIsTrue={setIsTrue}/>
      <UsersList  users={users} deleteUsers={deleteUsers} SelectUsers={SelectUsers} />
    </div>
  );
}

export default App;
