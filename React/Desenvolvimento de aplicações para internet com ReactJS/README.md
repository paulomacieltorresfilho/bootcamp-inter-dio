# Trabalhando com estilos em elementos e componentes

## Estilização de componentes e elementos CSS
### Maneiras de estilização
- Inline
    
    ```JSX
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + imgUrl + ')'
    };
    function HelloWorldComponent() {
        return <div style={divStyle}>hello world</div>
    }
    ```
    ---
    ```JSX
    function App() {
        return (
            <HelloWorld style={{marginTop: '10px'}} />
        )
    }
    ```
    - Prós
        - Maneira mais prática e direta
        - Ajustes rápidos
        - Testes de estilo
    - Contras
        - Difícil manutenção
- Classes

    ```CSS
    .div-style {
        color: blue;
        background-color: url('https://bit.ly/2Ç19xk');
    }
    ```
    ```JS
    import './HelloWorldComponent.css';
    function HelloWorldComponent() {
        return <div className="div-style">Hello World!</div>
    }
    ```
    - Em JSX, define-se classes pelo atributo className
        - Maneira mais prática e direta
    - Contras
        - Difícil manutenção
        - Pouca flexibilidade
        - Conflitos com nomes

- CSS in JS
    ```JS
    const DivStyle = styled.div`
        color: blue;
        background: url('${props => props.imageUrl}')
    `;

    function HelloWorldComponent() {
        const url = 'https://bit.ly/2xaK2s1';
        return <DivStyle imageUrl={url}>Hello World</DivStyle>;
    }
    ```
    - Instalação: `npm install --save styled-components`
    - Prós
        - Manutenção
            - Facilidade para remover CSS
            - Estilos dinâmicos
        - Performance
        - Injeção automática de prefixos vendor

## Statefull vs Stateless

- Statefull: usa estados
    - Possui gerenciamento de estados no componente
    - Construídos usando classes em JS
- Stateless: não usa estados
    - Não possui gerenciamento de estados no componente
    - Construídos usando funções em JS

---
- A nomeclatura foi atualizada
    - Class components
    - Function components
- Com hooks, estados são manipuláveis em function components!

## Formulários
Formulários mantém um estado interno
``` HTML
<form>
    <label>
        Nome:
        <input type="text" name="nome" />
    </label>
    <input type="submit" value="Enviar" />
</form>
```
- Em HTML, `<input>, <textarea> e <select>` têm um estado interno
- Em React, podemos controlar o estado
    - state
    - setState

### Componente controlado 
- Tanto select, input ou textarea aceitam um atributo value
- Podemos mudar esse valor usando o atributo onChange
- Ex. `SorveteForm.jsx, NameForm.jsx`

### Componente não-controlado
- A tag input é read-only
- Ex. `FileInput.jsx`

### Bibliotecas
- Formik
- Redux-forms

---
# Introdução ao Redux e fluxos da arquitetura com ReactJS
## Introdução ao Flux   
Flux é um padrão de projeto para tráfego de dados de maneira unidirecional
- Flux/stores são utilizadas apenas para informações que devem ser compartilhados para outros componentes

### Arquitetura Flux
![](./readme-imgs/flux.png)
- Action: é como um telégrafo, ele formata a mensagem a ser enviada
- Dispatcher: é como um telefonista, ele sabe todos os callbacks para diferentes Stores
- Store: é como um gerente super controlador, ela guarda a informação e todas as alterações têm que ser feitas por ela mesma, mais ninguém
- View: é como um gerente intermediário (middleware) que recebe as notificações da store e passa os dados para as visões abaixo dela. **Não confundir com a tela em si**.

### Diversas implementações
- Redux (mais popular)
- Reflux
- Mobx
- Vuex (baseado em Redux e Elm) - Vue
- NgRx/store (baseada em Redux e RxJS) - Angular

#### Bibliotecas baseadas em Flux
- Servem para comunicação entre componentes
- Centralizam a informação
- "Flux libraries are like glasses: you'll know when you need them" - Dan Abramov

## O que é Redux
- Criado pro Dan Abramov e Andrew Clarck em 2015
- Redux é uma implementação de Flux
    - Possui algumas diferenças

![](./readme-imgs/redux.png)

- Dispatcher não existe mais
- Camada view se chama agora React, por estarmos trabalhando com ele
- Reducer

### 3 Princípios
1. Single source of truth: Uma única store
2. State é read-only
3. Mudanças são feitas com pure functions

### Actions
Em Redux,
- Actions são como o Flux
- Difereça: Actions não enviam o action em si para o dispatcher
- Retornam um objeto de action formatado

### Store
- Em Flux: diversas Stores
- Em Redux: uma única Store
- A Store aqui cuida de toda a árvore de estados
- Os reducers que cuidam de descobrir qual estado muda

### Reducers
- Em Redux não há dispatcher (simplifica e divide o trabalho da Store)
- A Store se conecta ao root reducer, que divide os estados em pequenas reducers para descobrir como lidar com esse estado
- Os estados aqui são imutáveis

### Views
Em React, adiciona na camada de View 3 novos conceitos para conectar a View à Store
1. Provider
2. connect()
3. selector

## Instalando o Redux
```bash
npm install react-redux
npm install --save-dev redux-devtools
```

# Comunicação avançada entre aplicações

## Rest HTTP com React
### APIs HTTP
- Servem para conectar a um ou mais servidores HTTP
    - GET
    - POST
    - DELETE
    - PUT / PATCH
- Fetch API
- Axios

### Fetch API
- Nativa do browser
- Oferece um alternativa ao XMLHttpRequest() e jQuery.ajax()
- Suporte a Service Workers
- Algumas diferenças:
    - Não envia nem recebe cookies (precisa definir a opção credentials)
    - Não rejeita o status do erro HTTP

- GET
```JS
fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
    .then(response => response.json())
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(error => {
        alert('Ops! erro a seguir: ' + error);
    });
```
- POST
```JS
const novaCientista = {nome: 'Fulana de Tal', area: 'Letras'};
fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras', {
    method: 'post',
    body: JSON.stringify(novaCientista)
})
    .then(response => response.json())
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(error => {
        alert('Ops! erro a seguir: ' + error);
    });
```
- DELETE 
```JS
let index = 4;
fetch(`https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras/${index}`, {
    method: 'delete'
})
    .then(response => response.json())
    .then(data => {
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(err => {
        alert('Opa! erro a seguir: ' + err);
    });
```
- PUT
```JS
let index = 3;
const novaCientista = {nome: 'Carla', area: 'Física'}
fetch(`https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras/${index}`, {
    method: 'put',
    body: JSON.stringify(novaCientista)
})
    .catch(err => {
        alert('Ops! deu erro: ' + err);
    });
```

### Axios
- Lib de HTTP API
- Cross-browser
- Pode monitorar o progresso de um request
- Melhor tratamento de erros
- Melhor teste
- Instalação: `yarn add axios`

- GET
```JS
import axios from 'axios';

axios.get('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
    .then(data =>{
        alert(`Conheça algumas cientistas brasileiras: ${data}`);
    })
    .catch(err => {
        alert('Ops! Erro: ' + err);
    });
```
- POST
```JS
axios.post('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras', {
    nome: 'Fulana de Tal',
    area: 'Letras'
})
    .catch(err => {
        alert(err);
    })
```
- DELETE
```JS
let index = 3;
axios.delete(`https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras/${index}`)
    .catch(err =>{
        alert(err);
    });
```
- PUT
```JS
let index = 3;
axios.put(`https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras/${index}`, {
    nome: 'Carla',
    area: 'Física'
})
    .catch(err => {
        alert(err);
    });
```

## Imutabilidade e Redux

### Imutabilidade
- Uma vez criada, não pode ser alterada
- Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto
- Novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a cópia e aumentando a performance

#### Benefícios
- Performance
- Programação mais simples
- Debugging mais simples (detecção de mudanças)

#### Imutabilidade e React
Se você quer performance em React, use dados imutáveis. Você consegue usando o shouldComponentUpdate ou React.PureComponent

![](./readme-imgs/SCU.png)

Com shouldComponentUpdate
```JS
class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.color !== nextProps.color) {
            return true;
        }
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <button 
            color={this.props.color}
            onClick={() => this.setState(state => ({count: this.state.count + 1}))}>
            Count: {this.state.count}
            </button>
        )
    }
}
```
Com React.PureComponent
```JS
class CounterButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    render() {
        return (
            <button
            color={this.props.color}
            onClick={() => this.setState(state => ({count: state.count + 1}))}>
            Count: {this.state.count}
            </button>
        )
    }
}
```
---

Exemplo de PureComponent não funcionando corretamente
```JS
class ListOfWords extends React.PureComponent {
    render() {
        return <div>{this.props.words.join(',')}</div>
    }
}

class WordAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // Essa parte é um padrão ruim e causa um bug
        const words = this.state.words;
        words.push('marklar');
        this.setState({words: words});
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} />
                <ListOfWords words={this.state.words} />
            </div>
        )
    }
}
```