function toRna(dna) {
  if(dna.length == 0) {
    return dna;
  }

}

function complement(dna) {
  if(dna == "C") {
    return "G";
  }

  if(dna == "G") {
    return "C";
  }

  if(dna == "A") {
    return "U";
  }

  if(dna == "T") {
    return "A";
  }

  // javascript hash give key return value
}

export { toRna }

// dna.split = array
// array.map
// value.complement
// new_array.join
