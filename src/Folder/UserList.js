import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const UserList = () => {
    const [users, setUsers] = useState([])
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((amin) => {setUsers(amin.data)})
    
      
   }, [])
    return (
        <div  className="d-flex justify-content-around flex-wrap">
            {users.map((user)=> 
                <Cards user={user} key={user.id} />
            )}
        </div>
    )
}

export default UserList
