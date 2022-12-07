<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the content of post with ID of {{ $route.params.id }}</p>

    
    <p><router-link to="/posts">&lt; Back</router-link></p>
    
  </div>
  <!-- <div>
    <button @click="showPostID">Show Post ID</button>
  </div>

  <div>
    <button @click="goHome3Secs">Go Home in 3 seconds</button>
  </div>

  <div>
    <button @click="goFirstPost">Go To First Post</button>
  </div> -->


</template>



<script setup>

import { useRoute, useRouter } from 'vue-router'

  const route = useRoute()
  const router = useRouter()

  const showPostID = () => {
    alert(`The ID of this post is: ${ route.params.id }`)
  }

  const goHome3Secs = () => {
    setTimeout(() => {
      router.push({name: 'home'})
    }, 3000);
  }
  const goFirstPost = () => {
    setTimeout(() => {
      router.push({
        name: 'postDetail', 
        params: {
          id: 'id1'
        }
      })
    }, 3000);
  }


</script>

