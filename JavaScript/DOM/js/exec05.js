function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(`O usuário ${usuario.nome}, possui as seguintes habildiades: ${usuario.habilidade}`)
    // console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", "));
  }
}

let usuarios = [
  {
    nome: "Bruno",
    habilidade: ["JavaScript", " ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidade: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

exibeHabilidades(usuarios);