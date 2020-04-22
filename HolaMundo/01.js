Vue.component('componente1', {
    template:
     `
    <div>
        <h1>
        {{saludo}}
        </h1>
        <h3>caccsac</h3>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola mundo desde componente'
        }
    }

});

const app = new Vue({
    el: "#app",
    data: {
        titulo: "Hola Mundo Vue",
        frutaNueva: { name: '', amount: 0 },
        frutas: [
            { name: 'Pera', amount: 10 },
            { name: 'Manzana', amount: 0 },
            { name: 'Banana', amount: 20 },
            { name: 'Mango', amount: 12 },
            { name: 'Papaya', amount: 50 }
        ],
        total: 0,
        fondo: 'bg-dark',
        textColor: 'text-white',

    },
    methods: {
        addNuevaFruta() {
            if (this.frutaNueva.name != '') {
                var fruta = { name: '', amount: 0 };
                fruta.name = this.frutaNueva.name;
                fruta.amount = this.frutaNueva.amount;
                this.frutas.push(fruta);
                this.frutaNueva.name = '';
                this.frutaNueva.amount = 0;
                this.updateLocalStorage();
            }
            this.fondo = 'bg-success';

        },

        removeFruta(index) {
            if (this.frutas[index].amount > 0) {
                this.frutas[index].amount--;
                this.updateLocalStorage();

            }

        },
        addFruta(index) {
            this.frutas[index].amount++;
            this.updateLocalStorage();


        },
        eliminarFruta(index) {
            this.frutas.splice(index, 1);
            this.updateLocalStorage();
        },
        updateLocalStorage() {
            localStorage.setItem('frutasLS', JSON.stringify(this.frutas));
        }




    },
    beforeCreate: function () {
        console.log('BEFORE CREATE');
    },
    created: function () {
        console.log('CREATED');
        var datosLS = JSON.parse(localStorage.getItem('frutasLS'));

        if (datosLS === null) {
            this.updateLocalStorage();
        } else {
            this.frutas = datosLS;

        }
    },
    beforeMount: function () {
        console.log('BEFORE MOUNT');
    },
    mounted: function () {
        console.log('MOUNTED');
    },
    beforeUpdate: function () {
       // console.log('BEFORE UPDATE');
    },
    updated: function () {
       // console.log('UPDATED');
    },
    beforeDestroy: function () {
        console.log('BEFORE DESTROY');
    },
    destroyed: function () {
        console.log('DESTROYED');
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (let i = 0; i < this.frutas.length; i++) {
                this.total += this.frutas[i].amount;

            }

            return this.total;
        },

        percent() {
            var porcentaje = (100 * this.total) / 1000;
            if (porcentaje > 100) {
                porcentaje = 100;
            }
            return porcentaje;

        },
        barColor() {
            var color = '';
            if (this.percent <= 50) {
                color = 'bg-success';
            } else if (this.percent > 50 && this.percent < 80) {
                color = 'bg-warning'
            } else if (this.percent > 80) {
                color = 'bg-danger';
            }
            return color;
        }
    }
}); 