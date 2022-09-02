const getInputValueById = id => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    console.log(product, quantity);
    // display product on UI
    addProductToDisplay(product, quantity);

    // set to local storage
    // simple way
    // localStorage.setItem(product, quantity);
    saveItemToLocalStorage(product, quantity);
}

const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if(savedCart){
        cart = JSON.parse(savedCart);
    } 
    return cart;
}

const saveItemToLocalStorage = (product, quantity) =>{
    const cart = getShoppingCartFromLocalStorage();
    // add product to the object as property
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);

    // save to local storage
    localStorage.setItem('cart', cartStringified);
}

const addProductToDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

const displayStoredProducts = () =>{
    const cart = getShoppingCartFromLocalStorage();
    for(const product in cart){
        const quantity = cart[product];
        console.log(product, quantity);
        addProductToDisplay(product, quantity);
    }
}

displayStoredProducts();