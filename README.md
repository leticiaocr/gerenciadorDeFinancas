  # GERENCIADOR DE FINANÇAS PESSOAIS
Este é um projeto de um gerenciador de finanças pessoais, desenvolvido para ajudar no controle financeiro. Com esta aplicação, é possível registrar  receitas e despesas, ter uma visão geral de todas as entradas e saídas financeiras, e acompanhar o seu saldo atual com base no cálculo de *RECEITAS - DESPESAS* .
O objetivo principal deste projeto é aplicar e aprimorar minhas habilidades em JavaScript, incluindo a manipulação de DOM e classes.

## Tecnologias

Aqui estão as tecnologias utilizadas neste projeto.

* HTML
* CSS 
* JavaScript

## Serviços Usados

* Github


## Sobre o projeto
A idéia geral do projeto é criar um gerenciador de finanças pessoais utilizando JavaScript para manipular a interface do usuário (DOM) e realizar cálculos com base nas entradas e saídas financeiras.
* A classe Gerenciador é responsável por inicializar o gerenciador de finanças. Ela contém propriedades como referências aos elementos HTML relevantes (formulário, campo de valor, resumo de entradas, resumo de saídas, resumo total), além de variáveis para armazenar o total de entradas e saídas.
* A função event() é responsável por adicionar um ouvinte de eventos ao formulário para capturar o evento de envio (submit) do formulário e chamar a função handleSubmit().
* A função handleSubmit() é chamada quando o formulário é submetido. Ela captura os valores dos campos de descrição, valor e tipo (receita ou despesa), e então chama as funções enterData() para inserir os dados no resumo financeiro, calculateTotal() para atualizar os totais e clearInputs() para limpar os campos de entrada.
* A função enterData() cria um novo elemento HTML com os dados inseridos e o adiciona ao resumo financeiro na interface do usuário. O elemento é estilizado com uma classe correspondente ao tipo de entrada (receita ou despesa).
* A função calculateTotal() atualiza os totais de entradas e saídas com base no tipo (receita ou despesa) e no valor fornecido. Em seguida, calcula o total geral subtraindo as saídas das entradas. Por fim, chama a função displayTotal() para exibir os totais atualizados na interface do usuário.
* A função displayTotal() atualiza o conteúdo dos elementos HTML correspondentes aos totais de entradas, saídas e total geral.
* O código final cria uma instância da classe Gerenciador, iniciando assim o gerenciador de finanças pessoais.
  

  

## Demonstração 



![Tela](https://github.com/leticiaocr/gerenciadorDeFinancas/blob/main/screen-capture%20(1).gif)




## Links
  - Link para acesso: https://leticiaocr.github.io/gerenciadorDeFinancas/
  
  - Repositório: https://github.com/leticiaocr/gerenciadorDeFinancas.git

  ## Autores

  * **Letícia Oliveira 



## Executar
**Para executar este projeto na sua máquina, siga as instruções:**

* execute o seguinte comando no seu terminal:
`$ git clone [https://github.com/leticiaocr/gerenciadorDeFinancas.git]`
* abra a pasta que será  criada
* abra o arquivo "index.html" com o navegador de sua preferência 
