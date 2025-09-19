import { use } from "react";
import Friend from "./Friend";
export default function Friends({ friendsPro }) {
  const friends = use(friendsPro);
  // console.log(friends);

  return (
    <div className="card">
      <h3>Friends: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}
