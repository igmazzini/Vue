Vue.component('componente2', {
    template:
        `
    <div class="bg-primary">
        
            <h1>
            {{mensaje}}
            </h1>
            <ul v-if="users !== []">
                <li v-for="user of users">
                    <h6>{{user.name}}</h6>
                </li>
             </ul>
            <button class="btn btn-success" v-on:click="cambiarMensaje()">Cambiar saludo</button>
            <button class="btn btn-success" v-on:click="cargarUsuarios()">Cargar usuarios</button>
           
     
        
    </div>
    `,
    data() {
        return {


        }
    },
    props: ['mensaje'],
    computed: {
        ...Vuex.mapState(['users'])
    },
    methods: {
        ...Vuex.mapMutations(['cambiarSaludo']),
        ...Vuex.mapActions(['getUsers']),
        cambiarMensaje() {
            this.cambiarSaludo('saludos desde store con componente 2');

        },
        cargarUsuarios() {
            this.getUsers();
        }

    },
    mounted: function () {

    }

});