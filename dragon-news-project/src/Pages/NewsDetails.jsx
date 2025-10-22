import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams()
    // console.log(data, id);
    const [news, setNews] = useState([]);



    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails); 
    },[data, id])
    // console.log(news);
    
  return (
    <div>
      <header>
        {" "}
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className=" col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
