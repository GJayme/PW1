// Utilizando as funcionalidades vistas até agora, crie duas funções
// (reverterModificar e reverterSemModificar) que, dado um array de
// entrada, imprime no console o array invertido.

// reverterModificar – Reverte o array de entrada MODIFICANDO o array
// original

// reverterSemModificar – Reverte o array de entrada SEM alterar o array
// original

function invertSemModificar(lista) {
  var listaInvertidaSemModificar = [];
  var listaOriginal = lista.slice();
  tamLista = lista.length - 1;

  for (tamLista; tamLista >= 0; tamLista--) {
    listaInvertidaSemModificar.push(lista.pop());
  }
  return (
    console.log(listaInvertidaSemModificar, "Lista Invertida"),
    console.log(listaOriginal, "Lista Original"),
    console.log("\n")
  );
}

function inverteModifica(lista) {
  var listaInvertidaModificada = [];
  tamLista = lista.length;

  for (tamLista; tamLista > 0; tamLista--) {
    listaInvertidaModificada.push(lista.pop());
  }
  return (
    console.log(listaInvertidaModificada, "Lista invertida"),
    console.log(lista, "Lista Original"),
    console.log("\n")
  );
}

inverteModifica([1, 2, 3, 4, 5]);
invertSemModificar([1, 2, 3, 4, 5]);
