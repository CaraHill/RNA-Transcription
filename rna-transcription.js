function toRna(dna) {
  let dnaArray = dna.split('');

  let newDnaArray = dnaArray.map(function(dna) {
    let rnaResult = findComplement(dna);

    if(rnaResult == 'Invalid input DNA.') {
      throw new Error(rnaResult);
    }

    return rnaResult;
  });

  return newDnaArray.join('');
}

function findComplement(dna) {
  let dna_values = {'C':'G', 'G':'C', 'A':'U', 'T':'A'};

  for(let key of Object.keys(dna_values)) {
    let value = dna_values[key];

    if(dna == key) {
      return value;
    }

    if(dna == '') {
      return '';
    }
  }

  return 'Invalid input DNA.';
}

export { toRna }
