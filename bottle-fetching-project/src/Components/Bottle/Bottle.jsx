import './Bottle.css'
const Bottle = ({ bottle }) => {
    console.log(bottle);
    
    const {img, name, price, stock} = bottle;
  return (
    <>
    <div className="bottle-img">
      <img src={img} alt="" />
      <p>{name}</p>
      <p>${price}</p>
      <p>Remaining{stock}</p>
      <button>Buy Now</button>
    </div>
    </>
  );
};

export default Bottle;
