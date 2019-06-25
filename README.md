# Servidor express basico com autentificação JWT

1 - Clone o projeto:

`git clone https://github.com/girvX/jwt/edit/master/README.md`

2 - Na pasta raíz, crie o arquivo .env com as variáveis de ambiente:

`HOST=link_de_conexao_com_o_banco_de_dados 
SECRET=chave_secreta_jwt`

3 - Baixe alguma plataforma REST para testes: INSOMNIA, POSTMAN, etc.

# Rotas

www.localhost:3000/createuser: cria usuario no corpo da requisição.

Parâmentros: `{"email": "","senha": "",}`
Retorno: `{"id": ,"email": "","senha": "",}`

www.localhost:3000/auth: autentifica usuario no corpo da requisição, ao se conectar, um token JWT é retornado .

Parâmentros: `{"email": "","senha": ""}`
Retorno: `{"email": "","senha": "", "token": }`

www.localhost:3000/finduser: reotorna todos os usuarios. É necessário a chave de autentificação para ter acesso utilizando o
campo authorization no header da requisiçao

Retorno: `{"email": "","senha": ""}`

www.localhost:3000/finduser/:id: retorna um usuário pelo id, basta indicar o id na query :id. É necessário a chave de autentificação para ter acesso utilizando ocampo authorization no header da requisiçao
.

Retorno: `{"email": "","senha": ""}`

www.localhost:3000/painel: apenas retorna um mensagem simulando alguma página, apenas para testar se o JWT esta ok. É necessário a chave de autentificação para ter acesso utilizando o campo authorization no header da requisiçao

