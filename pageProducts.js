const data =[];
let id = 0;

const list=()=>{
    return data
}

const findOne =(id)=>{
    return data.find((product)=> product.id === id)
}

const add = (name ,price, img)=>{
    const product = {id: ++id, name, price, img}
    data.push(product)
    return product
}

const findAllProduct =(name)=>{
    const newArr = data.filter((product)=>product.name===name)
    return newArr
}

const remove =(id)=>{
    data.forEach((product, i) =>{
        if (product.id === id) data.splice(i, 1)
    });
}

const update =(id, newPrice)=>{
    const product = findOne(id);
    product.price = newPrice
}

module.exports= {add, findOne, findAllProduct, update, remove, list}

let products = [
    {
        name: "peras",
        price:40,
        img:"https://res.cloudinary.com/riqra/image/upload/v1595008844/sellers/companyname/products/knhcmuwpfqe7e2ug86bl.jpg",

    },
    {
        name: "manzanas",
        price:20,
        img:"https://i.blogs.es/e44dc0/manzana/450_1000.webp",
    },
    {
        name: "mandarinas",
        price:70,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8Ikk4nfc5r6myF26Uus3XVUNr28ufRohzLoIUYwN9yTlsgEnBfpUuSA4zpPLmpprClc&usqp=CAU",
    },
    {
        name: "bananas",
        price:64,
        img:"https://image.shutterstock.com/image-photo/one-banana-yellow-isolated-on-260nw-1932710246.jpg",
    },
    {
        name: "naranjas",
        price:65,
        img:"https://i0.wp.com/pastofruver.com/wp-content/uploads/2020/03/Naranjas-Pastofruver-1.jpg?fit=800%2C800&ssl=1",
    },
]

for (let i=0; i<products.length; i++){
    module.exports.add(products[i].name, products[i].price, products[i].img)
}