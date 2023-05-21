const myDiv$$ = document.querySelectorAll(".fn-insert-here");

for (const myDivP$$ of myDiv$$) {
    
    const myP$$ = document.createElement("p");
    
    myP$$.textContent = "Voy dentro!";
    
    myDivP$$.appendChild(myP$$);   
    
}

 