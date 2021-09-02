<template> 
    <ul class="posts">
        <h2>Список NPC</h2>

        <transition-group name='npc-list' v-if='posts.length > 0'>
            <post-item 
                v-for="post in posts" :key='post.id'
                :post='post'
                @remove='$emit("remove", post)'
            />
        </transition-group>

        <div class="notFound" v-else-if='posts.length <= 0'>Посты ненайдены</div>

    </ul>    
</template>

<script>
import PostItem from '@/components/PostItem.vue'

export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
    .posts{
        margin-top: 40px;
        padding: 20px 0;
        border-top: 1px solid #000;
    }
    h2{
        padding: 15px 0;
    }
    .notFound{
        color:#ffbbbb;
        margin-top: 30px;
    }

    .npc-list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .npc-list-enter-active, .npc-list-leave-active {
        transition: all .3s;
    }
    .npc-list-enter-from, .npc-list-leave-to {
        opacity: 0;
        transform: translateX(130px);
    }
    .npc-list-move {
        transition: transform .3s;
    }
</style>