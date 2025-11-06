import { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBids(data);
        });
    }
  }, [user.email]);

  return (
    <div>
      <h2>My bids: {bids.length}</h2>
    </div>
  );
};

export default MyBids;
