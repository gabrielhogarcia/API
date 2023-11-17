//users
type users = {
    name: string
    email: string
}

//listas
type listas = {
    nome: string
    data_criacao: Date
    id: number
    
}

//itens
type itens = {
    produto: string
    quantidade: number
    valor: number
    lista_id: number
}

//membros
type membros = {
    user_id: null
    lista_id: number
    data_adicao: Date
}