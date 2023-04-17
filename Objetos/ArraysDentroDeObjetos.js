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
  
  cliente.enderecos.push({
    rua: "Bergamo Cilist",
    numero: 1267,
    apartamento: false,
    complemento: "casa 2"
  });
  
  //FILTRANDO APERNAS OS ENDEREÇOS QUE SÃO APARTAMENTOS.
  const listaTrueApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);
  
  console.log(listaTrueApartamentos)