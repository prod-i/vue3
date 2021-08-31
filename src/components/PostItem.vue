<template> 
    <li class="post">
        <div class="post-content">
            <div><b>Имя:</b> {{post.first_name}}</div>
            <div><b>Фамилия:</b> {{post.last_name}}</div>
        </div>
        <div class="post-options">
            <my-button
                @click='$emit("remove", post)'
            >Удалить</my-button>
        </div>
    </li>
</template>

<script>
export default {
  components: {},
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
    .post{
        display: flex;
        margin: 20px 0;
        padding: 15px;
        list-style-type: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        align-items: center;
    }
    .post-content{
        flex-grow: 1;
    }
    .post-options{
        font-size: 10px;
    }
</style>