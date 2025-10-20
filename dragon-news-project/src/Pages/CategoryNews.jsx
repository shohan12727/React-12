import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

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

  return <div>Total {categoryNews.length} news found</div>;
};

export default CategoryNews;
