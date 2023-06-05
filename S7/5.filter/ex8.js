const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const pickUpText = (event) => {
    
    const myInput$$ = document.querySelector('[data-function="toFilterStreamers"]');
    
    console.log(event);
    
    const findStreamer = streamers.filter(streamer => streamer.name.toLowerCase().includes(myInput$$.value.toLowerCase()));
    
    console.log(findStreamer);
}
const myButton$$ = document.querySelector("button");

myButton$$.addEventListener("click" , pickUpText);