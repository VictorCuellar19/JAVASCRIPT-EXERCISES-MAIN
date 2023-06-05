// Declaro el inicio el proceso de obtención de pedidos
init();

// Usamos async para indicar que la funcion es asincrona
async function init() {

// Llamo a la función getOrders() para la obtencion de pedidos.
// La palabra clave await se utiliza para esperar a que la función getOrders() se complete y devuelva el resultado.
// El resultado se asigna a la variable orders.
const orders = await getOrders();

// Se llama a la función sortByDate(orders) para ordenar los pedidos por fecha.
// El resultado ordenado se pasa a la función completeProductsInfo().
completeProductsInfo(sortByDate(orders))
}

// Genero las funciones getOrders() y getProduct(id)
async function getOrders() {
    const resOrders = await fetch("http://localhost:3000/orders");
    return resOrders.json();
}
// **En getOrders(), no hay ningún parámetro id porque obtiene todos los pedidos de la tienda
async function getProduct(id) {
    const resProduct = await fetch("http://localhost:3000/products/" + id);
    return await resProduct.json();
}
// **En getProduct(id), el parámetro id se utiliza para indicar el identificador único del producto que se desea obtener.

// Genero la funcion sortByDate para ordenar los pedidos
function sortByDate(array) {
    return array.sort((a, b) => new Date(a.date) - new Date(b.date))
}
// **En este caso, "array"[opcional] podria ser sustituida por "myArray", no tiene significado propio

// Declaramos la función completeProductsInfo(orders) 
async function completeProductsInfo(orders) {
// La función completeProductsInfo(orders) recibe como parámetro la lista de pedidos (orders[opcional]).
    for (const order of orders) {

        for (let index = 0; index < order.products.length; index++) {
            const product = order.products[index];
            const resProduct = await fetch("http://localhost:3000/products/" + product.productId);
            const productDetail = await resProduct.json();
            order.products[index] = {...product, ...productDetail};
        }
        printOrder(order)}}
// **Tener cuidado a la hora de entrar en arrays y objetos, para un objeto necesitamos usar "order.products", y no "products"

// Por ultimo declaramos la funcion printOrder
function printOrder(order) {
    const div$$ = document.createElement("div");
    div$$.innerHTML = `<h2>${order.date}</h2>`

    for (let index = 0; index < order.products.length; index++) {
        const product = order.products[index];
        div$$.innerHTML += `<p>${product.quantity} ${product.name}</p>`
    }
    document.body.appendChild(div$$)
    }

