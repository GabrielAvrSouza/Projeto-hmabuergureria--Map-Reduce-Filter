
let list = ''
let listdescont = ''
let listvegan = ''



function menu() {
    const burguers = document.querySelector(".list-burguers")

    menuOptions.forEach(products => {
    
        burguers.innerHTML = list = list + 
      ` <li>
            <img src=${products.src}>
            <p>${products.name}</p>
            <p>R$${products.price}</p>
        </li>`
    });
}

function Descont() {
    menuOptions.map(function (item) {
        const desconto = item.price / 10
        const burguers = document.querySelector(".list-burguers")
        burguers.innerHTML = listdescont = listdescont + 
        `<li>
            <img src=${item.src}>
            <p>${item.name}</p>
            
            <p>R$${item.price - desconto}</p>
        </li>`
    })
}

function TotalMenu() {
    const burguers = document.querySelector(".list-burguers")
    const soma = menuOptions.reduce(function (acc, products) {
        return acc + products.price

    }, 0)
    burguers.innerHTML = 
    ` <li>
       <p>A soma do menu ficou em R$${soma}</p>
      </li> `
}

function vegansBurguer(){
    const burguers = document.querySelector(".list-burguers")
 menuOptions.filter(function(Veganos){
    
    if(Veganos.vegan === true)
    {    burguers.innerHTML = listvegan = listvegan + ` <li>
        <img src=${Veganos.src}>
        <p>${Veganos.name}</p>
        <p>R$${Veganos.price}</p>
    </li>`
    }
 })
}



