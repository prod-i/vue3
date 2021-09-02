<template>
    <div class="modal" v-if="show" @click='higeModal'>
        <div @click.stop class="modal-body">
            <slot />
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
    name: 'my-modal',
    mixins: [toggleMixin],
}
</script>

<style scoped>
.modal{
    position: fixed;
    display: flex;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgb(0,0,0,0.6);
}
.modal-body{
    margin: auto;
    background-color: #836795b6;
    border-radius: 7px;
    flex-basis: 25%;
    min-height: 50px;
    padding: 25px;
}
</style>