const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const info in alien) {
   
    console.log(info + ":", alien[info]);
}