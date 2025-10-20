import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCatagoryNews] = useState([]);

  const { id } = useParams();
  const newsData = useLoaderData();
  // console.log(newsData)

  useEffect(() => {
    if (id == "0") {
      setCatagoryNews(newsData);
      return;
    } else if (id == "1") {
      const filteredBreakingData = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCatagoryNews(filteredBreakingData);
    } else {
      const filteredData = newsData.filter((news) => news.category_id == id);
      setCatagoryNews(filteredData);
    }
  }, [newsData, id]);

  return (
    <div>
      <h2 className="font-bold mb-5">
        {" "}
        <span className="text-secondary">Total {categoryNews.length}</span> news
        found
      </h2>
      <div className="grid grid-cols-1 gap-5 mx-2">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
