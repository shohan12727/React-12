import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import LoadingPage from "../Components/Loading";

const Root = () => {
  // const items = useNavigate();
  // console.log(items);
  
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <section className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </section>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {/* {
            (state = "loading" ? (
              <LoadingPage></LoadingPage>
            ) : ( */}
              <Outlet></Outlet>
          
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Root;
