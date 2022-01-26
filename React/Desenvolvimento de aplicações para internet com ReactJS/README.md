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
