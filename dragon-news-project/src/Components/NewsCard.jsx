import React from "react";
import { Bookmark, Share2, Star, Eye } from "lucide-react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const published = new Date(news.author.published_date)

  return (
    <article className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Top bar: author + icons */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-11 h-11 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-medium text-gray-900">{news.author.name}</div>
            <div className="text-xs text-gray-500">{published.toDateString()}</div>
          </div>
        </div>

        {/* Save and Share icons */}
        <div className="flex items-center gap-3 text-gray-500">
          <button
            aria-label="Save"
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Save"
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <button
            aria-label="Share"
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title="Share"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Title */}
      <header className="px-5 pb-4">
        <h1 className="text-gray-900 text-xl md:text-2xl font-extrabold leading-tight">
          {news.title}
        </h1>
      </header>

      {/* Main image */}
      <div className="px-5">
        <img
          src={news.image_url || news.thumbnail_url}
          alt={news.title}
          className="w-full h-64 md:h-72 object-cover rounded-lg"
        />
      </div>

      {/* Description + Read more */}
      <div className="px-5 py-4">
        <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-4">
          {news.details}
        </p>

        <Link to={`/news-details/${news.id}`} className="text-orange-500 font-semibold hover:underline">
          Read More
        </Link>
      </div>

      {/* Footer: rating & views */}
      <footer className="px-5 pb-5 pt-2">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            {/* Stars: show 5 stars filled up to rating.number */}
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i <= news.rating.number ? "text-orange-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="font-semibold text-gray-800">{news.rating.number}</span>
            {news.rating.badge && (
              <span className="ml-2 text-xs uppercase text-orange-500 font-semibold">
                {news.rating.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-700">{news.total_view}</span>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default NewsCard;
