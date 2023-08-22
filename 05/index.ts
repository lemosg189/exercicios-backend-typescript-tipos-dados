const soletrar = (palavra: string) => {
  let palavraSoletrada = "";
  for (const letra of palavra) {
    palavraSoletrada += letra;

    if (letra !== palavra[palavra.length - 1]) {
      palavraSoletrada += "-";
    }
  }
  return palavraSoletrada;
};
console.log(soletrar("prédio"));
