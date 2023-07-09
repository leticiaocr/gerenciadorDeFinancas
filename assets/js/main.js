

class Gerenciador {
    constructor() {
        this.formulario = document.querySelector('.insert');
        this.amount = document.querySelector('.amount');
        this.incomes = document.querySelector('.incomes');
        this.expenses = document.querySelector('.expenses');
        this.amount = document.querySelector('.amount');
        this.entradasTotal = 0;
        this.saidasTotal = 0;
        this.event();
        this.loadFromLocalStorage();
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
        const value = parseFloat(this.formulario.querySelector('.value').value); // Converter para número de ponto flutuante
        const type = this.formulario.querySelector('.type').value;
        this.enterData(description, value, type);
        this.calculateTotal(type, value);
        this.clearInputs();
    }
    //LIMPAR O INPUT APÓS O EVENTO DE SUBMIT

    clearInputs() {
        this.formulario.querySelector('.description').value = "";
        this.formulario.querySelector('.value').value = "";
      }

    // COLOCAR OS DADOS NO RESUMO FINANCEIRO 

    enterData(description, value, type) {
        const local = document.querySelector('.contain-list');


        const div = document.createElement("div");
        div.classList.add("list");


        const descricao = document.createElement("p");
        descricao.textContent = description;
        descricao.classList.add("description");

        const valor = document.createElement("p");
        valor.textContent = "R$" + value.toFixed(2);
        valor.classList.add("value");

        const tipo = document.createElement("p");
        tipo.textContent = type;



        div.appendChild(descricao);
        div.appendChild(valor);
        div.appendChild(tipo);

        local.appendChild(div);

        if (type === 'receita') {
            div.classList.add('input');
        } if (type === 'despesa') {
            div.classList.add('exit');
        }

    }

    // REALIZAR O CALCULOS

    calculateTotal(type, value) {

        if (type === 'receita') {
            this.entradasTotal += value;
        } if (type === 'despesa') {
            this.saidasTotal += value;
        }

        const totalGeral = this.entradasTotal - this.saidasTotal;

        this.displayTotal(this.entradasTotal, this.saidasTotal, totalGeral);
    }

    //COLOCAR TOTAIS NO HTML
    displayTotal(entradasTotal, saidasTotal, totalGeral) {
        this.incomes.textContent = "Entradas: R$" + entradasTotal.toFixed(2);
        this.expenses.textContent = "Saídas: R$" + saidasTotal.toFixed(2);
        this.amount.textContent = "Total: R$" + totalGeral.toFixed(2);
      }
     // SALVAR OS DADOS NO LOCALSTORAGE

}


// TRABALHAR O LOCALSTORAGE


// VALIDAÇÃO DE FORMULARIOS


const gerenciador = new Gerenciador();
