const usuarios = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filterUsers = (
  usuarios: { nome: string; idade: number; status: boolean }[],
  usuario: string
): { nome: string; idade: number; status: boolean }[] => {
  let usuarioEncontrado = usuarios.filter((user) => {
    return user.nome.toLowerCase().includes(usuario.toLowerCase());
  });

  return usuarioEncontrado;
};

console.log(filterUsers(usuarios, "jo"));
