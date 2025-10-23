import { Star, Eye } from "lucide-react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    image_url,
    author,
    details,
    rating,
    total_view,
    tags,
    others,
    category_id,
  } = news;

  return (
    <article className="bg-base-100 rounded-2xl shadow-md border border-gray-200 overflow-hidden">
      {/* Thumbnail */}
      <img src={image_url} alt={title} className="w-full h-72 object-cover" />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-bold leading-snug">{title}</h2>

        {/* Author & Published Info */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Details */}
        <p className="text-gray-700 leading-relaxed text-justify">{details}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-2 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <Star size={18} />
            <span>{rating?.number}</span>
            <span className="text-gray-500 text-xs bg-yellow-100 px-2 py-0.5 rounded-full ml-2">
              {rating?.badge}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <Eye size={18} />
            <span>{total_view?.toLocaleString()} views</span>
          </div>

          {/* Trending or Today’s Pick */}
          <div className="flex gap-2">
            {others?.is_today_pick && (
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                Today’s Pick
              </span>
            )}
            {others?.is_trending && (
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium">
                Trending
              </span>
            )}
          </div>
          <Link className="btn btn-primary" to={`/category/${category_id}`}>
            Back to Category
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsDetailsCard;
