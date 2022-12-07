import { ref, computed } from 'vue'
import { defineStore  } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const count = ref(0)
  const title = ref("My Counter Title :)")

  const oddOrEven = computed(() => {

    if(count.value % 2 === 0) return 'even'
      return 'odd'
    
    })

  function increaseCounter(amount) {
    count.value += amount
  }
  function decreaseCounter(amount) {
    count.value-= amount
  }

  return { count, title, increaseCounter, decreaseCounter, oddOrEven }
})

