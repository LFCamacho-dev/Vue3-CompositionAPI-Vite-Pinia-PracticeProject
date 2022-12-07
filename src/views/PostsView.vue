<template>
  <div class="posts">
    <h1>Posts</h1>
    <!-- <ul >
      <li>
        <router-link to="/postDetail/id1">Post 1</router-link>
      </li>
      <li>
        <router-link to="/postDetail/id2">Post 2</router-link>
      </li>
      <li>
        <router-link to="/postDetail/id3">Post 3</router-link>
      </li>
    </ul> -->
    
    <ul v-for="post in posts" :key="post.id">
      <li>
        <router-link :to="`/postDetail/${post.id}`">{{ post.title }}</router-link>
      </li>
      
    </ul>  

    <textarea v-autofocus></textarea>

    <div>
      <button class="counter-button" :class="{ 'yellow' : oddOrEven === 'odd'}" @click="increaseCounter(1)" >{{ counterData.count }}</button>
    </div>


  </div>
</template>



<script setup>

import { ref } from 'vue';
import { useCounter } from '../use/useCounter';
import { vAutofocus } from '../directives/vAutofocus';

const { counterData, increaseCounter, oddOrEven } =useCounter()

const posts = ref([
    {
      id: 'id1',
      title: 'This is 1'
    },
    {
      id: 'id2',
      title: 'This is 2'
    },
    {
      id: 'id3',
      title: 'This is 3'
    }
])





</script>



<style scoped>

ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}


</style>

