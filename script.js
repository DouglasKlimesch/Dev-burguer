
const list = document.querySelector('ul')
const buttonMenu = document.querySelector('.cardapio')
const buttondDescount = document.querySelector('.mascote')
const buttoncarrinnho = document.querySelector('.carrinho')
const buttonfilter = document.querySelector('.filtros')
let myli = ``

function formatCurrency(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRl' });
}

function menu(productsArray) {
    myli = ''
    productsArray.forEach(menu => {
        myli += `<li>
            <img src="${menu.src}">
            <h4>${menu.name}</h4>
            <p>${formatCurrency(menu.price)}</p>
        </li>`


    });
    list.innerHTML = myli
}


function mapAllItens() {

    const newPrice = menuOptions.map((products) => ({
        ...products,
        price: products.price * 0.9,
    }))


    menu(newPrice)


}

function sumAllItens() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)


    list.innerHTML = `<li>
            <h4> Valor total dos itens </h4> <br>
            <p>  ${formatCurrency(totalValue)}  </p>
            <p>+ 10% de desconto</p>
            
        </li>`

}

function filterItens() {

    const filterJustvegan = menuOptions.filter((product) => product.vegan)

    menu(filterJustvegan)
}


buttonMenu.addEventListener('click', () => menu(menuOptions))
buttondDescount.addEventListener('click', mapAllItens)
buttoncarrinnho.addEventListener('click', sumAllItens)
buttonfilter.addEventListener('click', filterItens)
