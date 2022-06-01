import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    let value = 0;

    cart.map((item) => {
      value = value + item.price;
      return value;
    });

    setTotalValue(value);
  }, [cart]);

  function add(name, price, image) {
    const pokemon = {
      name: name,
      price: price,
      image: image,
    };

    const newCart = cart;
    newCart.push(pokemon);

    localStorage.setItem("cart", JSON.stringify([...newCart]));
    setCart([...newCart], localStorage.cart);
    console.log(localStorage.cart);
    console.log(state);
  }

  function remove(name, price, image) {
    const pokemon = {
      name: name,
      price: price,
      image: image,
    };

    const newCart = cart;
    newCart.pop(pokemon);

    setCart([...newCart]);
  }

  function checkout() {
    setTotalValue([]);
    setCart([]);
  }

  const store = {
    add,
    remove,
    checkout,
    cart,
    totalValue,
  };

  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  const { cart, add, remove, checkout, totalValue } = context;

  return {
    cart,
    add,
    remove,
    checkout,
    totalValue,
  };
}
