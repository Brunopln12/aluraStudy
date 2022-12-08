# Expressões Regulares

## Meta-char

  Existem alguns caracteres que possuem um significado especial para o regex engine. Especial significa que o regex engine não interpreta o valor literal e sim diferente. Esses caracteres são chamados de meta caracteres.

- Regex, ou expressões regulares, é uma linguagem para encontrar padrões de texto.

- Sendo uma linguagem independente, existem interpretadores para a maioria das plataformas de desenvolvimento, como JavaScript, C#, Python ou Ruby.

- Uma classe de caracteres predefinida é \d, que significa qualquer dígito.

- Existem vários meta-char, como . ou *.

- Existem quantifiers que definem quantas vezes um caractere deve aparecer:

- {1} é um quantifier que significa uma vez.

- * é um quantifier que significa zero, uma ou mais vezes

- . é um meta-char que significa qualquer char.

- Com \ podemos escapar meta-chars, por exemplo \..

## Quantifier

? - zero ou uma vez.
* - zero ou mais vezes.
+ - uma ou mais vezes.
{n} - exatamente n vezes.
{n,} - no mínimo n vezes.
{n,m} - no mínimo n vezes, no máximo m vezes.

## Trabalhando com espaços

E se não for o espaço e sim um tab? Felizmente já existe uma classe predefinida, a \s. \s significa whitespace. A definição do \s pode variar um pouco entre as implementações, mas normalmente é um atalho para [ \t\r\n\f] onde:

O primeiro caractere é um espaço branco.

- \t é um tab.
- \r é carriage return.
- \n é newline.
- \f é form feed.

## Classes de letras

Para descrever o mês, devemos usar uma nova classe de letras, seguem alguns exemplos:

[A-Z] significa de A até Z, sempre maiúscula.
[a-z] significa de a até z, sempre minúscula,
[A-Za-z] significa A-Z ou a-z.
[abc] significa a, b ou c.

*O que aprendemos?*

Podemos definir facilmente a classe de qualquer caractere com o [A-Z].

Conhecemos todos os quantifiers como ?, +, * e {n}.

\s significa whitespace e é um atalho para [ \t\r\n\f].

\w significa word char e é uma atalho para [A-Za-z0-9_].

*O que aprendemos?*

Existem âncoras predefinidas que selecionam uma posição dentro do alvo.

\b é uma âncora que seleciona um word boundary, isso é o início ou fim da palavra.

^ é uma âncora que seleciona o início da string alvo.

$ é uma âncora que seleciona o fim do alvo.

*O que aprendemos?*

Declaramos um grupo com ().

Podemos ter grupos e subgrupos.

Um grupo é retornado na hora de executar, são úteis para selecionar uma parte do match.

Através do ?:, dizemos que não queremos ver esse grupo na resposta