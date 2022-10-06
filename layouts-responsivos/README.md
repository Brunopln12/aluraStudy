# projeto-apeperia
Arquivos do projeto para a Apeperia

## REM e EM

Quando montamos páginas que se adaptam a diversos dispositivos, é importante usar unidades de medidas que se adaptam automaticamente para diversos tamanhos e espaços, mas às vezes é interessante usar unidades que sejam relativas à outras situações além dessas, como é o caso de *REM* e *EM*.

*REM* e *EM* são unidades relativas. Assinale a alternativa que descreve corretamente os comportamentos dessas unidades de medida.

*REM* é uma unidade relativa à propriedade font-size da tag <html>, portanto se a tag <html> tem 16px de font-size 1 *REM* é equivalente à 16px. *EM* é relativa à propriedade font-size da tag mãe, portanto se a tag mãe tiver um font-size de 16px 1 *EM* é equivalente à 16px.


*REM* vem de “Root ephemeral” que em uma tradução técnica fica “variável à raiz”, ou seja, é variável em relação à propriedade font-size da tag raiz (HTML). *EM* vem de “ephemeral” que significa “variável”, e ela é variável à propriedade font-size da tag mãe.

## Seguindo um conceito

Na hora de seguir um conceito de desenvolvimento, seja mobile-first ou desktop-first, não existe certo ou errado. Cada um deles tem suas vantagens e desvantagens, e elas devem ser avaliadas de acordo com as necessidades do projeto.

**Algumas motivações para usar mobile-first:**

- Grande parte dos acessos e vendas vem de dispositivos mobile
- O design é minimalista e simplificado
- Foco em conteúdo

**Algumas motivações para usar desktop-first:**

- A interface pode ter diversas features mais ricas
- Maior capacidade de banda e processamento
- O produto é otimizado para desktop (ex: Google Docs)

Então na hora de desenvolver é importante analisar todos os pontos que vão influenciar no projeto. Clientes, features, custo e linguagem visual, são alguns dos pontos que vão favorecer uma abordagem sobre a outra.

## Variáveis Css

Variáveis CSS ajudam muito na manutenção do código e também facilitam o uso de propriedades de estilização.

Como devem ser declaradas e usadas as variáveis CSS?

Declaramos dentro de algum seletor (que costuma ser o :root {}) escrevendo --nome-da-variavel: valor, e chamamos as variáveis seguindo uma sintaxe, usamos uma função var e passando o nome da variável dentro dessa função.

    Essa alternativa está correta porque precisamos declarar variáveis CSS dentro de algum seletor. Para usar essas variáveis precisamos seguir a sintaxe: var(--nome-da-variavel).