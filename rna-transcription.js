function toRna(dna) {
  if(dna == '') { return ''; }

  let dnaArray = dna.split('');

  let newDnaArray = dnaArray.map(function(dna) {
    let rnaResult = findComplement(dna);

    if(rnaResult == null) {
      throw new Error('Invalid input DNA.');
    }

    return rnaResult;
  });

  return newDnaArray.join('');
}

const dna_values = {'C':'G', 'G':'C', 'A':'U', 'T':'A'};

function findComplement(dna) {

  return dna_values[dna];
}

export { toRna }
