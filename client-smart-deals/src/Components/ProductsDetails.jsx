import { use, useRef } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const { _id: productId } = useLoaderData();
  const { user } = use(AuthContext);
  const bidModalRef = useRef(null);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  const handleBidForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log(productId, name, email, bid);
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Bid has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      {/* product info  */}
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
            I want to Buy this Products
          </button>
          {/* modal      */}
          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <p className="py-4">Give Seller Your Offered Price</p>
              <form onSubmit={handleBidForm}>
                <fieldset className="fieldset">
                  {/* name  */}
                  <label className="label">Name</label>
                  <input
                    name="name"
                    type="text"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input"
                  />
                  {/* email  */}
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    defaultValue={user?.email}
                    readOnly
                  />
                  {/* bid */}
                  <label className="label">Your Bid</label>
                  <input
                    name="bid"
                    type="text"
                    className="input"
                    placeholder="place your bid"
                  />

                  <button className="btn btn-primary mt-4">
                    Place your Bid
                  </button>
                </fieldset>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bid for this products  */}
    </div>
  );
};

export default ProductsDetails;
