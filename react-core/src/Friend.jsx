export default function Friend({ friend }) {
  // console.log(friend);

  const { name, email } = friend;
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
}
