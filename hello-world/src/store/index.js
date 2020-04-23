import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      { nombre: 'Manzana', cantidad: 2 },
      { nombre: 'Peras', cantidad: 3 },
      { nombre: 'Melones', cantidad: 5 },
      { nombre: 'Sandias', cantidad: 8 }
    ],
    total: 0

  },  
  mutations: {
    aumentar(state, index) {
    
      if (this.getters.getTotal < 100) {
        state.frutas[index].cantidad++;
      }
    }

  },
  getters: {
    getTotal(state) {
      state.total = 0;
      for (let i = 0; i < state.frutas.length; i++) {
        state.total += state.frutas[i].cantidad;

      }
      return state.total;
    },
    getProgressColor(state){
      var bg = '';
      
      if(state.total <= 50){
        bg = 'bg-success'
      }else if(state.total > 50 && state.total <= 80){
       bg = 'bg-warning';
      }else{
       bg = 'bg-danger';
       }
      return bg;
    }
  },
  actions: {
  },
  modules: {
  }
})
