import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

export const UserList = () => {

    const [listOfUsers,setListOfUsers] = useState([1,2]);
    
    useEffect(()=>{
        getUsers("https://jsonplaceholder.typicode.com/users");
        },[]);

    const getUsers = (url) => {
        axios.get(url)
        .then(function (response) {
        // handle success
        setListOfUsers(response.data);
    
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }
    return (
        <div>
            {listOfUsers.map((user)=>
                <p>{user.name}</p>)}
        </div>
    )
}
export default UserList;
