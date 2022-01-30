# História e Conceitos
React é uma **biblioteca** JavaScript para criar interfaces de usuário. Não é um framework!!

- Linguagem declarativa
- Pode ser utilizado em qualquer lugar (front-end, back-end, mobile, etc)
- Baseado em components


## O que é JSX

```Javascript
const element = <h1>Hello, World</h1>
```
Nem HTML e nem uma string!

React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes. Não é obrigatória a utilização do JSX

O browser não interpreta o JSX, para isso é necessário um transpilador para que a aplicação possa entender o código. O mais utilizado é o Babel

# Configuração
- React Create App
- React Scripts
- Task Runners e Bundler Sizers

```bash
npm init
npm install react react-dom react-scripts 
``` 

# Renderização
- Renderização de Elementos
- React DOM
- Nós Raiz

React "pensa" em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros

# Components e Props
- Função e Classe
- Props
- Composição de componentes
- Extração de componentes

# Estado e Ciclo de Vida

- Inicialização
- Montagem
- Atualização
- Desmontagem

![](./readme_imgs/estado-e-ciclo-de-vida.png)

Nenhum componente pai ou filho devem saber se outro componente possui estado ou não

O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro então é via props

# Ecossistema
- React Router
- Redux
- Material UI
- Ant-Design
- Storybook
- Gatsby
- Jest
- React i18n Next

---
---
---

# WebPack

## O que é webpack?
É um **module bundler** (um empacotador de módulos para aplicações JS)

Gerar bundler que será utilizado no HTML, em ES5

[Link Oficial](https://webpack.js.org)

Suporte:
- Fontes
- CSS
- Imagens
- HTML
- Javascript
- Plugins

## Configuração

### Principais conceitos do Webpack:
- Entry - Utilizando grafo, o webpack precisa de um ponto de entrada para buscar todos os módulos e dependências.
- Output - É para determinar quais são os bundlers que o webpack irá emitir
- Loaders - É para permitir que o webpack gerencie arquivos que não são javascript
- Plugins - Plugins podem ser utilizados para otimização de pacotes, minificação, injeção de scripts e muito mais
- Mode - Utilizados para abordagem de configuração zero. É possível configurar módulos como **production**, **development** ou **none**

    **Production** trás optimizações internas
    
    **Development** é executado com três grandes plugins: UgliflyJsPlugin, ModuleConcatenationPlugin e NoEmitOnErrorsPlugin

### Criação do arquivo webpack.config.js
``` JS
npm i -D webpack webpack-cli
"build": "webpack --mode production" //colocar dentro do package.json.scripts
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
```

### Exemplo arquivo webpack.config.js
```JS
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ks|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}
```

### Exemplo arquivo .babelrc
```JSON
{
    "presets": [
        "@babel/preset-env",
        "@babel/present-react"
    ]
}
```
---
# ESLint
Configuração
```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
```

### .eslintrc
Onde todas as regras de boas práticas são colocadas

Para rodar o eslint em todos os arquivos js, basta rodar o comando `eslint ./diretorio/*.js`. Também é possível colocar no package.json como script `scripts: {"eslint": "eslint ./src/*.js"}`

---
---
---
# Conceitos aplicados aos tipos de dados e condições da biblioteca

## Renderização Condicional
Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos, dependendo do estado da sua aplicação

- Variáveis de elementos
- If inline com o operador lógico &&
- If-else inline com operador condicional
- Evitando que um componente seja renderizado

Ex.
``` JSX
<div>
    <h1>Minha página</h1>
    {hasCustomer && (
            <Button text={"clique aqui para visualizar o histórico"} onClick={getHistorico()}/>
    )}
</div>
```
---
``` JSX
<div>
    <h1>Minha página</h1>
    {hasCustomer ? (
        <Button text={"clique aqui para visualizar o histórico"} onClick={getHistorico()}/>
    ) : (
        <Button text={"clique aqui para cadastrar um cliente" onClick={cadastrarCliente()}}/>
    )}
</div>
```

## Listas e chaves
- Renderizando múltiplos componentes
- Componente de lista básico
- Chaves
- Extraindo componentes com chaves
- Chaves devem ser únicas apenas entre elementos irmãos

Ex.
```JSX
function renderCustomer(customer, index) {
    return (
        <li key={`customer-${customer.id}`}>{customer.name}</li>
    )
}

<div>
    Clientes
    <ul>
        {listCustomers.map(renderCustomer)}
    </ul>
</div>
```

## Manipulando Eventos

Manipular eventos em elementos React é muito semelhante a manipular eventos em elementos do DOM. Existem algumas diferenças sintáticas:
- Eventos em React são nomeados usando camelCase ao invés de letras minúsculas
- Com o JSX você passa uma função como manipulador de eventos ao invés de um texto

[Documentação](https://pt-br.reactjs.org/docs/handling-events.html)

- Eventos
- Passando argumentos para manipuladores de eventos

Ex.
``` JSX
const showEvent = (e) => {
    console.log('Evento clicado');
    console.log(e);
}

const button = <button onClick={showEvent}>Clique aqui!</button>
```

# Pensando do jeito React
- Comece com um Mock
- Separe a UI em uma hierarquia de componentes
- Crie uma versão estática em react
- Identifique a representação mínima (mas completa) do state da UI
- Identifique onde o state deve ficar
- Adicione o fluxo de dados inverso