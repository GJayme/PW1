var lista = [1, 2, "a", 3, 2, "a", 1];

function removeDuplicados(inp) {
  var out = [];
  for (let i = 0; i < inp.length; i++) {
    if (!out.includes(inp[i])) {
      out.push(inp[i]);
    }
  }
  return out;
}
