<template>
    <teleport to=".modals-container">
       <div
         v-if="modelValue"
         class="modal">
            <!-- <h1><slot name="title" /></h1> -->
            <h1>{{ title }}</h1>
            <slot />            
            <button @click="$emit('update:modelValue', false)">Hide Modal</button>
            <div>Hi, {{ userData.name}} @{{userData.username}}</div>
        </div>
    </teleport>
</template>

<script setup>

    import { inject } from 'vue'


    const props = defineProps({
        modelValue: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: 'No title specified'
        },
    })
    const emit = defineEmits([
        'update:modelValue',
    ])

    const userData = inject('userData')
    
    // const handleBtnclick = () => {
    //     emit('update:modelValue', false)
    // }



</script>

<style scoped>
    .modal {
        background-color: beige;
        padding: 10px;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1
    }
</style>