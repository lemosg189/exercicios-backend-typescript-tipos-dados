const etiquetas = (info: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  let etiqueta: string[] = [];

  for (let i = 1; i <= info.qtd; i++) {
    etiqueta.push(`${info.lote}-${info.ano}-${i.toString().padStart(3, "0")}`);
  }
  return etiqueta;
};

console.log(
  etiquetas({
    produto: "CPU Dual Core 3.0GHZ",
    lote: 321,
    ano: 2022,
    qtd: 5,
  })
);
