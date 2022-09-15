**Sobre a Barbearia Alura**

Localizada no coração da cidade a Barbearia Alura traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.

Nossa missão é: "Proporcionar auto-estima e qualidade de vida aos clientes".

Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.

## Seletores avançados

Neste caso, usamos img como elemento âncora e para o primeiro irmão usamos o sinal de "+"

    img + p { 
        background: blue;

Para selecionar todos os parágrafos localizados depois de uma imagem usamos o seletor ~

    img ~ p {
        background: yellow
    };

É importante lembrar que um seletor pode sobrescrever o outro, pois todos possuem a mesma força. Os seletores avançados nos ajudam a criar estilos mais complexos e utilizar o CSS de uma maneira incrível, com uma autonomia maior do HTML.

No CSS podemos, inclusive, excluir itens específicos. Se quisermos excluir todos os parágrafos que não compõe missao, escreveremos:

    .principal p:not(#missao) {
        background: orange;
    }
A exclusão é um elemento poderoso no CSS, principalmente quando realizamos manutenção em algum código que já existe e que não devemos modificar tanto o HTML.

## Cálculos com CSS

Nesta aula,aprenderemos como realizar cálculos dinâmicos de posicionamento de elementos no CSS, como altura e largura.

Nosso site deve estar preparado para dispositivos com diversos tamanhos de tela. Um grande problema enfrentado ao desenvolver um site harmonioso é justamente calcular a proporção s dimensões dos elementos em diferentes dispositivos.

Clicaremos sobre a imagem de utensílios de barbeiro com o botão direito do mouse, então selecionaremos a opção "Inspecionar" para acessarmos a ferramenta do desenvolvedor.

Em nosso CSS, verificaremos que o tamanho da imagem é de 120px, mas como podemos fazer com que esse tamanho seja proporcional? Basta mudar para percentual, isto é, 20% de largura tendo a tela como referência.

Para que a imagem sempre ocupe a medida correta em outros dispositivos, utilizamos a propriedade calc. O calculo que desejamos realizar é escrito entre parênteses, em que inserimos o primeiro valor, o tipo de operção e o resultado esperado.

    .utensilios {
        width: calc(40% - 26px);
        float: left;
        Margin: 0 20px 20px 

    }
Dessa forma, foi calculado precisamente 350px de largura para este elemento. É possível encadear quantas operações quisermos, no mesmo modelo de sintaxe.

    .utensilios {
        width: calc(40% - (26px * 4);
        float: left;
        Margin: 0 20px 20px 

    }
A propriedade calc nos dá o poder de fazer com o que cremos valores proporcionais específicos.

## Sombras

Nesta aula, aprenderemos sobre as sombras, uma outra novidade que CCS 3 inseriu. Fazer sombras em elementos sempre foi muito difícil nas versões anteriores, hoje em dia, trata-se de algo trivial.

Continuaremos a usar a imagem da sessão de "Benefícios". A sombra é resultado de um efeito de "luz" que lançaremos sobre o elemento. O nome da propriedade que utilizaremos para gerar esse efeito é box-shadow, que possui a propriedade do eixo X, T e uma cor. Queremos deslocar 10px no eixo X e Y, a cor que utilizaremos será preto.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px #000000;
}
Ao recarregarmos a página, teremos uma sombra projetada, quadrada.

sombra

Podemos melhorar a qualidade estética dessa sombra ao adicionarmos uma terceira propriedade chamada blur, em que podemos aplicar um nível de desfoque específico, no caso, inseriremos um valor de 5px. Quanto maior a quantidade de pixels que inserirmos, mais claro sera o efeito de desfoque.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px #000000;
}
Ao recarregarmos a página, veremos o efeito aplicado na sombra da imagem.

blur

Temos ainda uma quarta propriedade que configura a intensidade da borda a partir do tamanho do elemento, isto é, o tamanho da sombra projetada. Neste caso, inseriremos 20px:

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px 20px #000000;

}
No navegador, a sombra sugirá expandida.

sombragrande

Podemos adicionar várias sombras em um mesmo elemento, basta que o conteúdo esteja separado por uma vírgula. Essa nova sombra terá valores negativos e terá a cor amarela.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px 20px #00000, -10px -10px yellow;

}
Será projetada uma sombra por debaixo da anterior.

Podemos, ainda, inserir uma terceira sombra com a cor rgba() com a camada de opacidade e borda vermelha.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 5px 20px #00000, -10px -10px yellow, -20px 20px rgba(255,0,0,0.5);

}
Ao recarregarmos a página teremos três sombras.

sombras

Outra possibilidade no CSS 3 é criar sombras internas. Utilizaremos a própria sessão de benefícios para exempliciar esse efeito, que será utilizado em box-shadowe se chama inset. Seu posicionamento será a partir do centro do elemento e terá a cor vermelha.

.beneficios {
    padding: 3em 0;
    background: #888888;
    box-shadow: inset 0 0 #FF0000;
}
Ao carregarmos a página, não notaremos qualquer mudança. Isso se deve pelo fato de que a sombra possui o mesmo tamanho do elemento. Para que ela se torne perceptível, criaremos um espaçamento de 30px.

.beneficios {
    padding: 3em 0;
    background: #888888;
    box-shadow: inset 0 0 30px #FF0000;
}
Feito isso, a sombra será interna em toda a sessão de benefícios.

sombra

Apagaremos todas as sombras coloridas e manteremos apenas a sombra leve em imagem-beneficios.

.imagem-beneficios {
    width: 60%
    opacity: 1;
    transition: 400ms;
    box-shadow: 10px 10px 10px 0 #000000;
}
Para fechar o tópico de sombras, por último aprenderemos a inserir sombras em textos. Em titulo-principal, utilizaremos a propriedade text-shadow, que recebem os valores que já conhecemos.

.titulo-principal {
    text-align: center;
    font-size: em;
    margin: 0 0 1em;
    clear: left;
    text-shadow: 2px 2px #FF0000; 
}

Será criada uma sombra para o título.

texto vermelho