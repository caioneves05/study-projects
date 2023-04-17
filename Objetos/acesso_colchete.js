const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(
    `O nome do cliente é ${cliente['idade']} e essa pessoa tem ${cliente.idade} anos.`
  );
  
  console.log(`Os 3 primeiros digitos do CPF são ${cliente['cpf'].substring(0, 3)}`);
  
  //código omitido
  
  const chaves = ["nome", "idade", "cpf", "email"];
  
  chaves.forEach((chave)=>{
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  });