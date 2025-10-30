import { useLoaderData } from "react-router";

const UpdateUser = () => {
  const user = useLoaderData();

  const handleEditForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const updatedUser = { email, password };
    fetch(`http://localhost:3000/users/${user._id}`,{
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("after updated", data);
        if(data.modifiedCount){
            alert('updated successfully')
        }
      });
  };
  return (
    <div>
      <h2>Edit a user</h2>
      <form onSubmit={handleEditForm}>
        <input type="email" name="email" defaultValue={user.email} />
        <br />
        <input type="password" name="password" defaultValue={user.password} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateUser;
