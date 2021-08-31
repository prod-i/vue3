<template>
    <input
        :value='modelValue'
        @input="updateInput"
    >
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(e){
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style scoped>
input{
    width: 100%;
    border: 0;
    background-color: #3f294db6;
    color: #fff;
    padding: 10px 15px;
    margin-top: 15px;
}
input::placeholder{
    color: #fff;
}
</style>