//1.1
const historicoMensagens = [
    {id: 1, usuário: "Fabricio", texto: "Olá mundo"},
    {id:2, usuário: "Carlos", texto: "Bom dia a todos!"}
]

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);

console.log(conteudoSalvar);
console.log('Tipo da variável:', typeof conteudoSalvar);

//1.2
const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';

const objetoValido = JSON.parse(jsonValido);

console.log("Texto recuperado:", objetoValido[0].texto);

const jsonQuebrado = '[{ id: 10, quebrado: sim ';

try {
  const resultado = JSON.parse(jsonQuebrado);
  console.log(resultado);
} catch (erro) {
  console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}