<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>Show dark modal? <input type="checkbox" v-model="showDarkModals"></label>
            
        </div>
        <!-- <pre>{{showDarkModals}}</pre> -->
        <button @click="(showModal = !showModal)">Show Modal</button>

       <component
          :is="showDarkModals ? DarkModal : Modal"
          title="Mi modal prop title"
          v-model="showModal">
            <p>Modal content from slot goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem at illo dignissimos quis nam velit vitae nulla vero, officiis qui totam error eligendi debitis nostrum! </p>
        </component>

        
    </div>
        
</template>



<script setup>
/* Imports*/
    import { ref } from 'vue'
    import Modal from '@/components/Modal.vue'
    import DarkModal from '@/components/DarkModal.vue'

    const props = defineProps({

    })

    const showDarkModals = ref(false)
    const showModal = ref(false)




</script>



<style scoped>

</style>

