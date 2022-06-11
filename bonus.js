let array = [
    { nome: 'Lean', idade: 27 },
    { nome: 'Eze', idade: 49 },
];

function propriedadeUnica(array, propriedade) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        novoArray[i] = {};
        novoArray[i][propriedade] = array[i][propriedade];
    }
    console.log(novoArray);
    return novoArray;
}

propriedadeUnica(array, 'idade');
// deve retornar [ { idade: 27 }, { idade: 49 } ]
propriedadeUnica(array, 'nome');
// deve retornar [ { nome: "Lean"}, { nome: "Eze" } ]

// ------------------------------------
