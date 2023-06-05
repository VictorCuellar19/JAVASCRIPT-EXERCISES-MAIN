const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
    return prompt(description)
}

function father(description, callback){
    userAnwsers.push(callback(description));
}

father("¿Estás de acuerdo?", confirmExample);
father("Ingresa tu nombre:", promptExample);
father("¿Quieres continuar?", confirmExample);

console.log(userAnswers);
