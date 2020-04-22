Vue.component('componente1', {
    template:
     `
    <div class="bg-dark text-white">
        <h6>Inicio componente 1</h6>
            <h1>
            {{saludo}}
            </h1>        
            <componente2 mensaje="Mensaje desde componente 2" @getSaludo="saludo=$event"> </componente2>
        <h6>Fin componente 1</h6>
    </div>
    `,
    data() {
        return {
            saludo: 'Hola mundo desde componente 1'
        }
    }

});