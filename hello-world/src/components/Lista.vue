<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(fruta,index) of frutas"
        :key="index"
        v-on:click="aumentar(index)"
      >
        {{fruta.nombre}}
        <span class="badge badge-primary badge-pill">{{fruta.cantidad}}</span>
      </li>
    </ul>
    <hr />
    <h1>Stock {{getTotal()}}</h1>
    <hr />    
    <div class="progress">
      <div
         :class="['progress-bar',getProgressColor()]"
        role="progressbar"
        :style="{'width':+ getTotal()+'%'}"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{getTotal()}}</div>
    </div>
  </div>
</template>


<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Lista",
  computed: {
    ...mapState(["frutas"])
  },
  methods: {
    ...mapMutations(["aumentar"]),
    ...mapGetters(["getTotal"]),
    ...mapGetters(["getProgressColor"])
  }
};
</script>