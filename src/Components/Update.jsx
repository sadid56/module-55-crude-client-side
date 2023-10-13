import { useLoaderData } from "react-router-dom";

const Update = () => {
    const usersLoaded = useLoaderData()
    const handleUpdate = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const UpdatedUser = {name, email}

        fetch(`http://localhost:5000/users/${usersLoaded._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedUser)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Update successful')
            }
        })
    }
    return ( 
        <div>
            <h2> Update data: {usersLoaded.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={usersLoaded?.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={usersLoaded?.email}/>
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
     );
}
 
export default Update;