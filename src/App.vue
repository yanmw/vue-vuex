<template>
  <div id="app">
    <p>click {{$store.state.count}} times count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {

      }
    },
    computed: {
      evenOrOdd() {
        return this.$store.getters.evenOrOdd
      }
    },
    methods: {
      increment() {
        // const count = this.count;
        // this.count = count + 1;
        this.$store.dispatch('increment')
      },
      decrement() {
        // const count = this.count;
        // this.count = count - 1;
        this.$store.dispatch('decrement')
      },
      incrementOfOdd() {
        // const count = this.count;
        // if (count % 2 == 1) {
        //   this.count = count + 1;
        // }
        this.$store.dispatch('incrementOfOdd')
      },
      incrementAsync() {
        /*setTimeout(()=>{
          const count = this.count;
          this.count = count + 1;
        },1000)*/
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>

<style>

</style>
