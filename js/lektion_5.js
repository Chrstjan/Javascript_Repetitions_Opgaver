let L5_1 = document.querySelector("#L5_1");
let L5_2 = document.querySelector("#L5_2");
let L5_3 = document.querySelector("#L5_3");
let L5_4 = document.querySelector("#L5_4");
let L5_5 = document.querySelector("#L5_5");

//Opgave 1 & Opgave 4
const fetchData = async (endpoint, options = {}) => {
    let response = "";

    try {
        response = await fetch(endpoint, options);
        console.log(response);
        if (response.ok) {
            const json = await response.json();
            return json;
        }
    }
    catch (error) {
        console.error(`Error in fetch: ${error}`);
    }
}

//Opgave 2
const getDummyData = async () => {
    const endpoint = 'https://dummyjson.com/products?limit=7';
    const data = await fetchData(endpoint);
    receivedProducts(data);
}

getDummyData();

const receivedProducts = async (products) => {
    let allProducts = products.products;
    buildProducts(allProducts);
}

const buildProducts = async (products) => {
    console.log(products);
    products.map((product) => {
        let products = `
            <figure class="product-figure">
                <img src="${product.thumbnail}" alt="product image"/>
                <h3>${product.title}</h3>
            </figure>`;

            L5_1.innerHTML += products;
    })
}

//Opgave 3
const addNewProduct = async () => {
    const endpoint = `https://dummyjson.com/products/add`;
    const data = await fetchData(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Figma',
          price: '1 Billion $'
        })
    });
    buildNewProduct(data);
}

const buildNewProduct = async (madeProduct) => {
    console.log(madeProduct);
    let newProduct = `
        <figure>
            <h2>${madeProduct.title}</h2>
            <p>ID: ${madeProduct.id}</p>
            <p>Price: ${madeProduct.price}</p>
        </figure>`;
        L5_2.innerHTML += newProduct;
}

addNewProduct();