import React, { useEffect, useState } from "react";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const saveCart = [];
    // step 1: get the id
    for (const id in storedCart) {
      // step 2: get the product using product id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3 add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the save cart
        saveCart.push(addedProduct);
      }
    }
    // step 5: set the cart
    setCart(saveCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
// if exist update quantity by 1

    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  const handleClearCart = () =>{
    setCart([]);
    deleteShoppingCart();
}

  return (
    <div className="shop-cntainer">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="card-container">
        <Cart 
        cart={cart}
        handleClearCart={handleClearCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
