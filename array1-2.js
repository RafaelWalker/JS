    const usuario  =  {
        nome: 'Rafael' ,
        empresa: {
            nome: "Walker" ,
            cor: "roxo" ,
            foco: "Programação" ,
            endereco: {
                rua: "Mario Rego Magalhaes" ,
                numero: 260

            }
        }
    }

console.log (`A Empresa ${usuario.empresa.nome} está localizada na rua ${usuario.empresa.endereco.rua} ${usuario.empresa.endereco.numero}`)
