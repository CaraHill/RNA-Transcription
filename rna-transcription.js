function toRna(dna) {
  if(dna.length == 0) {
    return dna;
  }

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
}


export { toRna }
