const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  for(chave in cliente){
  
    if(typeof cliente[chave] !== "object" && typeof cliente[chave] !== "function") {
      console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }