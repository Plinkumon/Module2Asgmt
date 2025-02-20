

const productList = document.getElementById('productList')
const container = document.getElementById('container')
const Itemlist = document.getElementById('Itemlist')
const grids = document.getElementById('grids')
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productContainer = document.getElementById('productContainer');
async function Products() {

    const response = await fetch(`https://fakestoreapi.com/products/`);
    const data = await response.json();
    console.log(data);

    displayProducts(data)
}
Products()
function displayProducts(items) {

    items.forEach(product => {
        const dataDiv = document.createElement('div')
        dataDiv.classList.add('card')
        const productImage = document.createElement('img')
        productImage.src = product.image
        productImage.classList.add('card-img-top')
        dataDiv.appendChild(productImage)
        const cardBodyDiv = document.createElement('div')
        cardBodyDiv.classList.add('card-body')
        dataDiv.appendChild(cardBodyDiv)
        const productTitleH5 = document.createElement('h5')
        productTitleH5.classList.add('card-title')
        cardBodyDiv.appendChild(productTitleH5)
        cardBodyDiv.innerHTML = `
               <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">$ ${product.price}</p>
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                ADD TO CART
                              </button>`


                              dataDiv.appendChild(cardBodyDiv)
                              productList.appendChild(dataDiv)
                              grids.appendChild(productList)
                              container.appendChild(grids)
                              Itemlist.appendChild(container)
    });
}
async function searchProduct(event) {
    event.preventDefault();
    const searchQuery = searchInput.value.trim().toLowerCase();
    console.log(searchQuery)
    if (!searchQuery) {
        productContainer.innerHTML = "<p>Please enter a search query.</p>";
        return;  // Exit the function if the input is empty
    }


    console.log(searchQuery)
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );
        if (filteredProducts.length > 0) {
            console.log(filteredProducts)
            displayResults(filteredProducts)
            
        }

        else {
            console.log('No products found');
            productContainer.innerHTML = "<p>No products found matching your search.</p>";
        }
    }
    catch (error) {

        console.error(error);
    }

}

function displayResults(products) {
productContainer.innerHTML = '';  // Clear previous results
      products.forEach(product => {   

         const productElement = document.createElement('div');
         productElement.classList.add('product');
        productElement.innerHTML = `
                       <img src="${product.image}" alt="${product.title}" />
                      <h5 class="card-title">${product.title}</h5>
  <p>${product.description}</p>
                 <p class="card-text">$ ${product.price}</p>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                      ADD TO CART
                   </button>`
          productContainer.appendChild(productElement);
      });
  }



searchButton.addEventListener('click', searchProduct);
