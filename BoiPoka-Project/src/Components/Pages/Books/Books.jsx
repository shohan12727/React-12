// import React, { Suspense, useEffect, useState } from 'react';
import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //    fetch("/booksData.json")
  //    .then(res => res.json())
  //    .then( data => {
  //     console.log(data)
  //      setAllBooks(data);
  //    })
  // },[])

  // const bookPromise = fetch("/booksData.json").then(res => res.json())

  return (
    <div>
      {/* <Suspense fallback={<span>Loading......</span>}>
                   <Book bookPromise={bookPromise}></Book>
            </Suspense> */}
      <Suspense fallback={<span>Loading.................</span>}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((singleBook) => (
            <Book singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
