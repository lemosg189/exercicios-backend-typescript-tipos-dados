const tabuadas = (numeros: number[]): string => {
  let resultado: string = "";
  let n = 1;

  for (const n of numeros) {
    for (let i = 0; i < 11; i++) {
      resultado += `${n} X ${i} = ${n * i} \n`;

      if (i === 10) {
        resultado += "-------------------------\n";
      }
    }
  }

  return resultado;
};

console.log(tabuadas([1, 4, 9, 7, 11]));
