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
    alert("Vai ei id already exist");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("readList", data);
    console.log(storedBookData);
  }
};

export { addTostoredDB };
