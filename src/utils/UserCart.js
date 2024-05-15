// UserCart.js
import React, { useState, useEffect } from 'react';
import { fakeFetchProducts } from '../api/fakeFetcher';

const UserCart = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fakeFetchProducts(5);
      setCartProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [cartProducts]);

  const handleClearCart = () => {
    setCartProducts([]);
  };

  return children({ cartProducts, totalPrice, handleClearCart });
};

export default UserCart;
