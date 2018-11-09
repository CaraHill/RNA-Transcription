function toRna(dna) {
  let dnaArray = dna.split("");

  let newDnaArray = dnaArray.map(function(dna) {
    return findComplement(dna);
  });

  return newDnaArray.join("");
}

function findComplement(dna) {
  let dna_values = {'C':'G', 'G':'C', 'A':'U', 'T':'A'};

  for(let key of Object.keys(dna_values)) {
    let value = dna_values[key]

    if(dna == key) {
      return value;
    }

    return "";
  }
}

export { toRna }
