import { useLoaderData, useParams } from "react-router";
import { addTostoredDB } from "../../../Utilities/AddToDb";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook;

  const handleMarksAsRead = (id) => {
     
    // store with id
    // where to store (local store)
    // array or like a collection
    // if book already then show a alert
    // if book not exist then push in the collection or in the array
    addTostoredDB(id);
   
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Section */}
            <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 flex items-center justify-center">
              <img
                src={image}
                alt={bookName}
                className="w-full max-w-sm rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4 self-start">
                Featured Book
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {bookName}
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
              <p className="text-gray-600 mb-6">
                Discover this amazing book and immerse yourself in its
                captivating story.
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleMarksAsRead(id)}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Mark as Read
                </button>
                <button className="flex-1 bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
