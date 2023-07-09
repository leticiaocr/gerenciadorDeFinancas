

class Gerenciador {
    constructor() {
        this.formulario = document.querySelector('.insert');
        this.amount = document.querySelector('.amount');
        this.event();
    }

    // ESCUTA O EVENTO DE SUBMIT E MANDA PARA A FUNÇÃO QUE VAI MANIPULAR ESSE EVENTO
    event() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    // FUNÇÃO QUE USA O EVENTO DE SUBMIT PARA CAPTURAR OS VALORES DOS INPUTS
    handleSubmit(e) {
        e.preventDefault();
        const description = this.formulario.querySelector('.description').value;
        const value = this.formulario.querySelector('.value').value;
        const type = this.formulario.querySelector('.type').value;
        this.enterData(description, value, type);

    }

    // COLOCAR OS DADOS NO RESUMO FINANCEIRO 

    enterData(description, value, type) {
        const local = document.querySelector('.contain-list');


        const div = document.createElement("div");
        div.classList.add("list");


        const descricao = document.createElement("p");
        const valor = document.createElement("p");
        const tipo = document.createElement("p");

        descricao.textContent = description;
        valor.textContent = value;
        tipo.textContent = type;

        div.appendChild(descricao);
        div.appendChild(valor);
        div.appendChild(tipo);

        local.appendChild(div);


        // se o type for entrada adicionar seletor vermelho, se for saída adicionar verde

    }


    // REALIZAR O CALCULOS

    // COLOCAR RESUMO DE ENTRADAS, SAÍDAS E TOTAL

    // TRABALHAR O LOCALSTORAGE
}

const gerenciador = new Gerenciador();
