const app = new Vue({
    el: "#app",
    data: {
        titulo: "Hola Mundo Vue",
        frutaNueva:{name:'',amount:0},
        frutas: [
            { name: 'Pera', amount: 10 },
            { name: 'Manzana', amount: 0 },
            { name: 'Banana', amount: 20 },
            { name: 'Mango', amount: 12 },
            { name: 'Papaya', amount: 50 }
        ],
        total:0,
        fondo:'bg-dark',
        textColor:'text-white'
    },
    methods:{
        addNuevaFruta(){
            if(this.frutaNueva.name != ''){
                var fruta = {name:'',amount:0};
                fruta.name = this.frutaNueva.name;
                fruta.amount = this.frutaNueva.amount;
                this.frutas.push(fruta);
                this.frutaNueva.name = '';
                this.frutaNueva.amount = 0;
                this.updateLocalStorage();
            }
            this.fondo = 'bg-success';
            
        },

        removeFruta(index){
            if(this.frutas[index].amount > 0){
                this.frutas[index].amount --;
                this.updateLocalStorage();
               
            }
            
        },
        addFruta(index){
            this.frutas[index].amount++;
            this.updateLocalStorage();
           
            
        },
        eliminarFruta(index){
            this.frutas.splice(index,1);
            this.updateLocalStorage();
        },
        updateLocalStorage(){
            localStorage.setItem('frutasLS',JSON.stringify(this.frutas));         
        }


    

    },
    created: function(){
        var datosLS = JSON.parse(localStorage.getItem('frutasLS'));
       
        if(datosLS === null){           
           this.updateLocalStorage();
        }else{           
            this.frutas = datosLS;
            
        }
    },
    computed:{
        sumarFrutas(){
            this.total = 0;
            for (let i = 0; i < this.frutas.length; i++) {
                this.total += this.frutas[i].amount;
                
            }

            return this.total;
        }
    }
}); 