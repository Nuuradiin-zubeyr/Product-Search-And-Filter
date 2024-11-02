let list = document.getElementById('list');
let filter = document.querySelector('.filter');
let count = document.getElementById('count');
let listProducts = [
    {
        id: 1,
        name: 'Name product white-black',
        price: 205600,
        quantity: 0,
        image: 'img1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 2,
        name: 'Name product white-black-grey',
        price: 300000,
        quantiy: 30,
        image: 'img2.jpg',
        nature: {
            color: ['white', 'black', 'grey'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 3,
        name: 'Name product black',
        price: 200000,
        quantiy: 30,
        image: 'img3.jpg',
        nature: {
            color: ['black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 4,
        name: 'Name product blue-black',
        price: 400000,
        quantiy: 30,
        image: 'img4.jpg',
        nature: {
            color: ['black', 'blue'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 5,
        name: 'Name product brown',
        price: 320000,
        quantiy: 30,
        image: 'img5.jpg',
        nature: {
            color: ['brown'],
            size: ['S', 'M', 'L'],
            type: 'Polo'
        }
    },
    {
        id: 6,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'img6.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },

    {
        id: 7,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'img3.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },
    {
        id: 8,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'img5.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },
    {
        id: 9,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'img1.jpg',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'Shirt'
        }
    },

    {
        id: 10,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'image-7.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 11,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'image-8.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },

    {
        id: 12,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'image-9.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 12,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'image-10.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'shirt'
        }
    },

    {
        id: 13,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'image-11.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },
    {
        id: 14,
        name: 'Name product white-black',
        price: 100000,
        quantiy: 30,
        image: 'image-12.png',
        nature: {
            color: ['white', 'black'],
            size: ['S', 'M', 'L'],
            type: 'T-shirt'
        }
    },




];
let productFilter = listProducts;
showProduct(productFilter);
function showProduct(productFilter){
    count.innerText = productFilter.length;
    list.innerHTML = '';
    productFilter.forEach(item => {
        let newItem = document.createElement('div');
        newItem.classList.add('item');

        // create image
        let newImage = new Image();
        newImage.src = item.image;
        newItem.appendChild(newImage);
        // create name product
        let newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.innerText = item.name;
        newItem.appendChild(newTitle);
        // create price
        let newPrice = document.createElement('div');
        newPrice.classList.add('price');
        newPrice.innerText = item.price.toLocaleString() + ' đ';
        newItem.appendChild(newPrice);

        list.appendChild(newItem);
    });
}
filter.addEventListener('submit', function(event){
    event.preventDefault();
    let valueFilter = event.target.elements;
    productFilter = listProducts.filter(item => {
        // check category
        if(valueFilter.category.value != ''){
            if(item.nature.type != valueFilter.category.value){
                return false;
            }
        }
        // check color
        if(valueFilter.color.value != ''){
            if(!item.nature.color.includes(valueFilter.color.value)){
                return false;
            }
        }
        // check name
        if(valueFilter.name.value != ''){
            if(!item.name.includes(valueFilter.name.value)){
                return false;
            }
        }
        // check min price
        if(valueFilter.minPrice.value != ''){
            if(item.price < valueFilter.minPrice.value){
                return false;
            }
        }
        //  check max price
        if(valueFilter.maxPrice.value != ''){
            if(item.price > valueFilter.maxPrice.value){
                return false;
            }
        }


        return true;
    })
    showProduct(productFilter);
})