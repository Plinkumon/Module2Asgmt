

const productList= document.getElementById('productList')
const container= document.getElementById('container')
const Itemlist= document.getElementById('Itemlist')
const grids= document.getElementById('grids')
async function Products() {
    
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        console.log(data);
       
        displayProducts(data)
}
Products()
        function displayProducts(data)
        {
            data.forEach(product => {
                const dataDiv=document.createElement('div')
                dataDiv.classList.add('card')
                const productImage=document.createElement('img')
                productImage.src = product.image
                productImage.classList.add('card-img-top')
                dataDiv.appendChild(productImage)
                const cardBodyDiv=document.createElement('div')
                cardBodyDiv.classList.add('card-body')
                dataDiv.appendChild(cardBodyDiv)
                const productTitleH5= document.createElement('h5')
                productTitleH5.classList.add('card-title')
                cardBodyDiv.appendChild(productTitleH5)
               cardBodyDiv.innerHTML=`
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

        
    



