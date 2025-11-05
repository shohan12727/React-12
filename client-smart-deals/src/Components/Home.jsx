import LatestProducts from "./LatestProducts";

const latestproductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <LatestProducts
        latestproductsPromise={latestproductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
