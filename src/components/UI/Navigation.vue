<template>
    <div class="nav">
        <div class="nav_wrap">
            <my-button @click="$router.push('/')" class="nav-btn">NPC</my-button>
            <my-button @click="$router.push('/about')"  class="nav-btn">About</my-button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav{
    position: fixed;
    top:0;
    width: 100%;
    height: 60px;
    background-color: #3f294db6;
}
.nav_wrap{
    width: 80%;
    margin: 0 auto;
    height: 100%;
}
.nav-btn{
    width: 100px;
    height: 100%;
    margin-right: 5px;
    background-color: #3f294db6;
    text-transform: uppercase;
}
</style>