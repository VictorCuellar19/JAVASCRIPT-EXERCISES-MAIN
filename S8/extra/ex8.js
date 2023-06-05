const myButton = document.querySelector("[data-fn='callACat']");

myButton.addEventListener("click", getACat);

function getACat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((FirstResponse) => FirstResponse.json())
    .then(printCat);
}

function printCat(cat) {
  const myDiv = document.createElement("div");

  myDiv.addEventListener("click", () => {expandCat(myDiv)})
  
  const myButton = document.createElement("button");
  
  myButton.textContent = "Remove";

  myButton.addEventListener("click", () => {
    removeCat(myDiv);
  });

  myDiv.innerHTML = `<img width="300" src="${cat[0].url}"/>`;
  myDiv.appendChild(myButton);

  document.body.appendChild(myDiv);
}

function removeCat(myDiv) {
  myDiv.remove();
}

function expandCat(myDiv){
    const myImg = myDiv.querySelector("img");

    if(myImg.getAttribute("width") === "100%"){
        myImg.setAttribute("width", "300");
    } else{
        myImg.setAttribute("width", "100%");
    }
}