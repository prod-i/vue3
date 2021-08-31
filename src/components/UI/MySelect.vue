<template>
    <select class="select" v-model="modelValue" @change="changeOption">
        <option disabled value="">Выберете из списка</option>
        <option
            v-for="option in options" :key="option.value"
            :value="option.value"
        >{{option.name}}</option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue:{
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(e){
            this.$emit('update:modelValue', e.target.value)
        },
    },
}
</script>

<style scoped>
.select{
    padding: 10px 20px;
    background-color: #3f294db6;
    border: 0;
}
</style>