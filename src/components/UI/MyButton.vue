<template>
    <button class="btn">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>

.btn{
    align-self: flex-end;
    padding: 10px 20px;
    background-color: #3f294db6;
    color: rgb(222, 233, 122);
    border: none;
    transition: .2s;
    /* font-weight: 300; */
    letter-spacing: 2px;

}
.btn:hover{
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
}
</style>