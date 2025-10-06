import Swal from "sweetalert2";

const getStoredBook = () => {
  const storedBooksStr = localStorage.getItem("readList");

  if (storedBooksStr) {
    const storedBookData = JSON.parse(storedBooksStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addTostoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    Swal.fire("Already Exist");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    Swal.fire("Added to wishList");
    
  }
};

export { addTostoredDB, getStoredBook };
