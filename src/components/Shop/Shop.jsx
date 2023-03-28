import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json()).then(data => setproducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-cntainer'> 
            <div className='product-container'>
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <h4>Order Summery</h4>
                <p>Selecet Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;