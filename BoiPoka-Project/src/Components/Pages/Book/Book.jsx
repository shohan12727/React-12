// import React, { use } from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const bookData = use(bookPromise);
  // console.log(bookData);
  console.log(singleBook);

  const {
    bookName,
    image,
    bookId,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singleBook;

  return (
    <Link to={`bookDetails/${bookId}`}>
      <div className="card bg-base-100  shadow-sm p-6 rounded-md border">
        <figure className="p-3 ">
          <img className="h-[200px] mx-auto w-2/3" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10">
            {tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
