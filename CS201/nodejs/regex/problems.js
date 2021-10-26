const problemOne = (str) => {
  const re = /(M[rs]|Mrs|[DE]r)\. [A-Z][a-z]*/;
  return str.match(re);
};
console.log(problemOne("Tn#georgE"));
