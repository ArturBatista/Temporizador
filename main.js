const vm = new Vue({
    el: "#app",
    data: {
        tempoDigitado: null,
        tempo: 0,
        contador: null,
        tempoPausado: 0,
        minutos: 00,
        segundos: 00,
        iniciou: false
    },
    created() {

    },
    methods: {
        iniciar() {
            this.iniciou = true
            this.tempo = this.tempoDigitado;
            this.minutos = this.tempoDigitado - 1
            this.segundos = 59
            this.contador = setInterval(this.inicioContagem, 1000);

        },
        pausar() {
            this.tempoPausado = this.tempo
            clearInterval(this.contador);
            console.log("tempo pausado", this.tempoPausado)
        },
        zerar() {
            clearInterval(this.contador);
            this.minutos = 0
            this.segundos = 0

        },
        inicioContagem() {

            if (this.segundos > 0) {
                this.segundos--
            } else {
                if (this.minutos > 0) {
                    this.minutos--
                    this.segundos = 59
                } else {
                    this.zerar()
                }

            }
        }
    }

})
