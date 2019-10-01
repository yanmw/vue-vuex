import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

//状态对象
const state = {
  count: 0
}

//包含多个更新state函数的对象
const mutations = {
  INCREMENT() {
    state.count++
  },
  DECREMENT() {
    state.count--
  }
}

//包含多个对应事件回调函数的对象
const actions = {
  increment({commit}) {
    commit('INCREMENT')
  },
  decrement({commit}) {
    commit('DECREMENT')
  },
  incrementOfOdd({commit,state}) {
    if (state.count%2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}) {
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  }
}

//包含多个getter计算属性函数的对象
const getters = {
  evenOrOdd2(state) {
    return state.count % 2 === 1 ? "奇数" : "偶数"
  }
}

export default new Vuex.Store({
  state,  //状态对象
  mutations,  //包含多个更新state函数的对象
  actions,  //包含多个对应事件回调函数的对象
  getters   //包含多个getter计算属性函数的对象
})
