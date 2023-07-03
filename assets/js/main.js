

class Gerenciador {
    constructor() {
        this.formulario = document.querySelector('.insert');
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
        const description = this.formulario.querySelector('.description');
        const value = this.formulario.querySelector('.value');
        const type = this.formulario.querySelector('.type');
        console.log(type.value);
    }

    // COLOCAR OS DADOS NO RESUMO FINANCEIRO 

    // REALIZAR O CALCULO PARA DEFINIR SALDO ATUAL

    // TRABALHAR O LOCALSTORAGE
}

const gerenciador = new Gerenciador();
