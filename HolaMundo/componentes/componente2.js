Vue.component('componente2', {
    template:
        `
    <div class="bg-primary">
        <h6>Inicio componente 2</h6>
            <h1>
            {{mensaje}}
            </h1>
        <h6>Fin componente 2</h6>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola mundo desde componente 2',
            
        }
    },
    props:['mensaje'],
    mounted:function(){
        this.$emit('getSaludo',this.saludo);
    }

});