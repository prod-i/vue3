<template> 
    <li class="post">
        <div class="post-content">
            <div><b>Имя:</b> {{post.first_name}}</div>
            <div><b>Фамилия:</b> {{post.last_name}}</div>
        </div>
        <div class="post-options">
            <my-button class='btn'
                @click="$router.push(`/npc/${post.id}`)"
            >Открыть</my-button>
            <my-button class='btn'
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
        margin: 30px 0;
        padding: 20px 15px;
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
    .btn{
        margin-left: 5px;
    }
</style>