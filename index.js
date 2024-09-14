// Criando comentarios !!
// Utilizando Array e objetos
let meta = {
    value: 'Ler um livro por mês',
    checked: true,
    }

let metas = [
    meta,   
    {
        value: "Caminhar todos os dias",
        checked: false,
    }
 
]

// Para veriicar o conteudo do objeto dentro das metas
console.log(metas[1].value)	

const start = () => {   
    
    while(true) {
        let opcao = "cadastrar"
         switch(opcao) {
            case "cadastrar":
                console.log("Cadastrando nova meta")
                break
            case "listar":
                console.log("Listando metas")
                break
            case "sair":
                console.log("Sair")
                return
        }
    
    }
}   

start()