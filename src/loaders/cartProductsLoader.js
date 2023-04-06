import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async ()=>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in the database, we have to use async awit
    const storedCart = getShoppingCart();
    console.log(storedCart);
    const saveCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }

    // if you need to send two things
    // return [saveCart, products];
    // another way to send two thing
    // return {saveCart, products}
    console.log(saveCart);
    return saveCart;
}

export default cartProductLoader;