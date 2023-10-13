import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const usersLoaded = useLoaderData();
    // console.log(users);
    const [users, setUsers] = useState(usersLoaded)

    const handleDelet = id =>{
        fetch( `http://localhost:5000/users/${id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        if(data.deletedCount > 0){
            alert('deleted succes');
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining)
        }
        })
    }

    return ( 
        <div>
            <h2>Total users: {users.length}</h2>
            <ol>
                {
                    users.map(user => <li key={user._id}>{user.name} : {user.email}
                    <Link to={`/update/${user._id}`}>Update</Link>
                     <button onClick={()=>handleDelet(user._id)}>X</button></li>)
                }
            </ol>
        </div>
     );
}
 
export default Users;