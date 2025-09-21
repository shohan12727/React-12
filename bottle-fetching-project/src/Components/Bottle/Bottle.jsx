import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle);
    
    const {img, name, price, stock} = bottle;
  return (
    <>
    <div className="bottle-img">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>${price}</p>
      <p>Remaining{stock}</p>
      <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
    </div>
    </>
  );
};

export default Bottle;
