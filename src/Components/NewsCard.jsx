import React from "react";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="card w-full bg-base-100 shadow-md rounded-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1">
      {/* Author Section */}
      <div className="flex justify-between items-center bg-base-200 p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className="text-gray-500 cursor-pointer hover:text-primary flex gap-1 items-center">
          <FaShareAlt />
          <CiBookmark size={20} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-3 leading-tight">
          {title}
        </h3>

        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="rounded-lg w-full object-cover mb-3"
        />

        <p className="text-gray-600 text-sm mb-3">
          {details.slice(0, 150)}...
          <span className="text-primary font-semibold cursor-pointer">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="text-xs text-gray-500 mb-3">
          <span className="font-semibold">Tags:</span> {tags.join(", ")}
        </div>

        {/* Rating & Views */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1 text-warning">
            {Array.from({ length: rating.number }, (_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="ml-1 text-gray-700 font-medium">
              {rating.number.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500">
            <FaRegEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
