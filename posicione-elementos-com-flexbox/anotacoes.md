# Flex-grow, Flex-shrink e flex-basis

Qual é a propriedade que usamos para condensar as propriedades flex-grow, flex-shrink e flex-basis?

A propriedade é a propriedade flex.

    flex: 1 1 300px;
    
A ordem dos valores é:

flex-grow, flex-shrink, flex-basis.

## Flex shrink

**Considere o código HTML abaixo.**

    <main class="flexContainer">        
    <div class="flexItem firstRow"></div>
    <div class="flexItem firstRow"></div>
    <div class="flexItem firstRow"></div>
    <div class="flexItem firstRow"></div>
    </main>COPIAR CÓDIGO

Considere agora que estejamos em um contexto flex. E que cada flexItem tem 200 px de width.

**CSS**

    .flexContainer {
    display: flex;
    }
    .flexItem {
    width: 200px;
    }

1) Quando a largura da tela chega a 800 px, os elementos mantém 200 px de largura cada um preenchendo todo o espaço da tela, porém, o que acontece com a largura dos flexItem quando diminuímos a tela para por exemplo 600 px.

2) O que acontece com a largura deles também quando aplicamos o seguinte CSS no nosso código?

    .flexItem:first-child {
    flex-shrink: 2;
    }

Sugestão: Crie um arquivo HTML e CSS, escreva esse código e faça os testes, utilize também valores diferentes!

### Opinião do instrutor

1) Quando diminuimos a tela para 600 px os flex-item diminuem seu tamanho igualmente entre si, ou seja, como a tela diminuiu 200 px e temos 4 flex items, cada um diminuiu 50 px. Sendo assim cada flex-item ficou com 150 px no fim.

2) Quando colocamos flex-shrink: 2 no primeiro, ele diminui de forma diferente do que os outros elementos. As contas que ocorrem são semelhantes as que ocorrem no flex-grow.

Primeiro de tudo o navegador pega o total de flex-shrink que nossos flex items tem, como temos por padrão flex-shrink: 1 nos flex items, a conta fica assim:

2 + 1 + 1 + 1 = 5. Isso pois o primeiro colocamos flex-shrink:2.

Como diminuímos 200 px do tamanho total, o navegador pega esse valor e divide pelo total de flex-shrink. Fica: 200 px : 5 = 40 px.

Dessa forma o navegador tira 2 partes do primeiro elemento 200px - 80px = 120px e tira 1 parte dos demais, ou seja: 200 px - 40 px = 160 px.

## Flex-grow

A propriedade **flex-grow** vista no exercício anterior ajuda muito caso queiramos que um elemento ocupe toda a largura restante do flex container.

Por exemplo, se temos:

Elemento 1: 200 px.

Elemento 2: 200 px.

Espaço vazio que sobrou do flex container: 600 px.

Total: 1000 px.

Se colocamos flex-grow: 1 no primeiro elemento, ele passa a ter 800 px de largura, ou seja:

Espaço vazio + Elemento 1: 800 px.

E o segundo elemento continua tendo 200 px de largura.

Agora, se colocarmos flex-grow: 1 nos dois elementos, o que aconteceria? Qual tamanho ficaria o elemento 1? E o elemento 2?

### Opinião do instrutor

O que aconteceria é o seguinte:

Considere o espaço vazio inicial: 600 px.

Como os dois elementos tem flex-grow: 1, a soma de flex-grow que temos vai dar 1 + 1 = 2.

O navegador pega esse espaço vazio e divide pelo número de flex-grow que temos: 600 px : 2 = 300 px.

Agora ele distribui esse espaço para cada um dos elementos que colocamos flex-grow.

Elemento 1: 300 px + 200 px = 500 px.

Elemento 2: 300 px + 200 px = 500 px.

## Flex-basis