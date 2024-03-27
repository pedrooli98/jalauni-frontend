# jalauni-frontend

## Problema:

Criarando uma variavel global em projetos react

1. Acessando o objeto window: Isso envolve adicionar uma propriedade ao objeto window, como window.pokemons = pokemons, para criar uma variável global. Essa solução funcionou para todos os três projetos.
2. Criando uma variável usando var: Colocar uma declaração de variável com var na raiz do index.js não adicionou a variável ao objeto window global. Isso ocorre porque os Módulos ES não adicionam automaticamente variáveis ao contexto global. Tentativas de remover o modo estrito para usar o hoisting foram malsucedidas devido à natureza dos Módulos ES.
3. Criando uma variável sem let, var, ou const: Tentar confiar no hoisting para o contexto global falhou devido à inclusão automática do modo estrito. Remover o modo estrito por meio de vários plugins e configurações não funcionou bem com os Módulos ES.
