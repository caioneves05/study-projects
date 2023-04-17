const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1198977986798"],
  };
  
  console.log(cliente["telefone"]);

  
  //OBJETOS ANINHADOS 


  const cliente2 = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente2.endereco = {
    rua: "Rua Josef Climber",
    numero: 1430,
    apto: true,
    complemento: "apto 97"
  };
  
  console.log(cliente2["endereco"]["numero"])