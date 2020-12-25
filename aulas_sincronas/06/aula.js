let json = '{"nome": "IFSP", "local": "São Carlos", "cursos": 9}';
let convertido = JSON.parse(json); // Converte STRING para OBJETO

console.log(convertido, json);

console.log(convertido.cursos);

convertido.cursos = 18;

console.log(convertido);

convertido.numAlunos = 1129;

console.log(convertido);

let convertidoString = JSON.stringify(convertido); // Converte OBJETO para STRING
console.log(convertidoString);