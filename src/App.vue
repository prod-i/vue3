<template>
    <navigation></navigation>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './components/UI/Navigation.vue'

export default {
  components: { Navigation },

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: rgba(235, 235, 235, 0.918);
}
body{
    background-color: #3f294db6;
}
.app{
    margin-top: 60px;
}
</style>