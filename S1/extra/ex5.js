const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

const sellsInfo = {totalSells: 0, totalCount: 0}

for (let index = 0; index < products.length; index++) {
    const product = products[index];
    
    sellsInfo.totalSells += product.sellCount;
    sellsInfo.totalCount++;
}
   
console.log(sellsInfo.totalSells/sellsInfo.totalCount)
    
