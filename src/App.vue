<template>
  <div id="app">
    <p>click {{count}} times count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters({evenOrOdd: 'evenOrOdd2'})
    },
    methods: {
      ...mapActions(['increment','decrement','incrementOfOdd','incrementAsync'])
    }
  }
</script>

<style>

</style>
