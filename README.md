# Teste do leitor de feed

## Como executar
Para executar o projeto basta fazer download ou clonar o projeto usando o git.

## Download

```ssh
$ git clone https://github.com/jeanfsantos/frontend-nanodegree-feedreader.git
```

Depois basta acessar o arquivo index.html que esta na pasta que você clonou ou fez download pelo navegador e começar visualizar os feeds e os teste escrito em [Jasmine](http://jasmine.github.io/).

## Desenvolvimento

Para padronização do código foi usado [Eslint](https://eslint.org/), e para executar as tarefas o [Gulp](https://gulpjs.com/) caso tem interesse em implementar mais testes ou novas funcionalidade segue os passos:

1. Instalar dependencias

```ssh
$ npm install
```

2. Executar o lint, caso tenha um erro será mostrado no terminal a mensagem e os detalhes.

```ssh
$ npm run lint
```

## Como vou realizar esse projeto?

1. Faça o curso de testes em JavaScript
2. Baixe os recursos necessários ao projeto.
3. Analise a funcionalidade da aplicação em seu navegador.
4. Explore o HTML (./index.html), CSS (./css/style.css) e JavaScript (./js/app.js) da aplicação para entender como ela funciona.
5. Explore o arquivo de especificações do Jasmine, em ./jasmine/spec/feedreader.js, e analise sua documentação.
6. Edite a variável allFeeds, em ./js/app.js, para fazer o teste fornecido falhar e ver como o Jasmine visualiza essa falha em sua aplicação.
7. Retorne a variável allFeeds para um estado de passagem.
8. Elabore um teste que faça loop em cada feed no objeto allFeeds e garanta que ele tenha uma URL definida e não esteja vazia.
9. Elabore um teste que faça loop em cada feed no objeto allFeeds, e garanta que ele tenha um nome definido e não esteja vazio.
10. Elabore uma nova suíte de testes, denominada "O menu".
11. Elabore um teste que garanta que o elemento de menu permaneça oculto por padrão. Você precisará analisar o HTML e o CSS para determinar como ocultaremos/mostraremos o elemento de menu.
12. Elabore um teste que garanta que o menu altere a visibilidade quando alguém clica no item de menu. Esse teste deve ter duas expectativas: o menu deve ser exibido quando alguém clica nele e ocultado quando mais um clique é feito.
13. Elabore uma suíte de testes denominada "Entradas iniciais".
14. Elabore um teste que garanta que, quando a função loadFeed for chamada e concluir seu trabalho, exista pelo menos um elemento .entry no contêiner .feed.
15. Elabore uma nova suíte de testes, denominada "Nova seleção de feed".
16. Elabore um teste que garanta que, quando um novo feed for carregado pela função loadFeed, o conteúdo realmente mude.
17. Nenhum teste deve depender dos resultados de outro.
18. Callbacks devem ser usados para garantir que feeds sejam carregados antes de serem testados.
19. Implemente a resolução de erros para variáveis não definidas e o acesso de array fora do limite.
20. Ao terminar - todos os seus testes devem ser aprovados.