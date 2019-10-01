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
  export default {
    name: 'App',
    data() {
      return {
        count: 0
      }
    },
    computed: {
      evenOrOdd() {
        return this.count % 2 === 1 ? "奇数" : "偶数"
      }
    },
    methods: {
      increment() {
        const count = this.count;
        this.count = count + 1;
      },
      decrement() {
        const count = this.count;
        this.count = count - 1;
      },
      incrementOfOdd() {
        const count = this.count;
        if (count % 2 == 1) {
          this.count = count + 1;
        }
      },
      incrementAsync() {
        setTimeout(()=>{
          const count = this.count;
          this.count = count + 1;
        },1000)
      }
    }
  }
</script>

<style>

</style>
