const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (const country of countries) {
    
    const myDiv$$ = document.createElement("div");
    myDiv$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
}

document.appendChild(myDiv$$);

const myButton$$ = document.querySelector("button");

    myButton$$.addEventListener("click", function(){
    
    const myDivList$$ = document.querySelectorAll("div");
    myDivList$$[myDivList$$.length - 1].remove()
        
    }
        
)