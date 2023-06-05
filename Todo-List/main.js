// Primero recupero todos los elementos de mi HTML

const myInput$$ = document.querySelector("input");

const myButtonAdd = document.querySelector(".btn-add");

const myUl = document.querySelector("ul");

const empty = document.querySelector(".empty")

// Doy funcionalidad al boton de añadir

myButtonAdd.addEventListener("click", (e) => {
    e.preventDefault();

    // Creo una variable que recoja el valor del imput

    const myTask = myInput$$.value;

    // Creo mi li y su p (indicando cual va a ser su texto)

    const myLi = document.createElement("li");
    
    const myP = document.createElement("p");
    
    myP.textContent = myTask;

    // Introduzco al HTML mi li , mi p y mi boton de borrado ("-")

    myLi.appendChild(myP);
    myLi.appendChild(myButtonDelete());
    myUl.appendChild(myLi);

    // Limpio el imput despues de recoger el valor con un string vacio
    
    myInput$$.value = "";

    empty.style.display = "none";
})  

// Creo una funcion para crear el boton de borrar 

    function myButtonDelete () {

        const myButtonDelete = document.createElement("button");

        myButtonDelete.textContent ="-";
        
        myButtonDelete.className = "btn-delete"

// Creo mi escuchador de eventos y una variable para recoger

    myButtonDelete.addEventListener ("click", borrarTarea => {

// Para eliminar el texto del DOM tenemos que hacerlo desde su padre, no se puede directamente            
        
    const insideOfParent = borrarTarea.target.parentElement;
    myUl.removeChild(insideOfParent);

    const tasks = document.querySelectorAll("li");
        
        if(tasks.length === 0) {

        empty.style.display = "block";
        }
    });
    return myButtonDelete;
    }
