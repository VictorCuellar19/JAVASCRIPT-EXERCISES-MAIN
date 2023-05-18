const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

//El operador += suma el valor de su derecha a la variable o propiedad de su izquierda y asigna el resultado a la variable o propiedad de su izquierda
// ++ incremento de la variable en +1 por cada vuelta, al final de un array, será el número de veces que lo cuenta.

const volumeInfo = { totalVolume: 0, totalCount: 0 };

for (const user of users) {

    for (const key in user.favoritesSounds) {
        
            const favouriteSound = user.favoritesSounds[key];
            volumeInfo.totalVolume += favouriteSound.volume;
            volumeInfo.totalCount++;
            
        }
    }
    
console.log(volumeInfo.totalVolume/volumeInfo.totalCount)