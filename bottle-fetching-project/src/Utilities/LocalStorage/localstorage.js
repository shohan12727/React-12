// to get something from local storage . i will get in as a string
// convert it into js object/array

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  } else {
    return [];
  }
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];
  // saveCartToLocalStorage
  saveCartToLocalStorage(newCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToLocalStorage as addToStoredCart,
};
