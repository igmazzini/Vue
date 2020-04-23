Vue.component('componente1', {
    template:
     `
    <div class="bg-dark text-white">
       
            <h1>
            {{saludo}}
            </h1>        
            <componente2> </componente2>
       
    </div>
    `,
    data() {
        return {
           
        }
    },
    computed:{
        ...Vuex.mapState([
            'saludo'
        ])
    }



});