const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

const newCities = cities.map(city => city.isVisited === true ? city.name + "(alreadyVisited)": city.name);

console.log(newCities);