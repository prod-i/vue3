<template> 
    <ul class="posts" v-if='posts.length > 0'>
        <h2>Список NPC</h2>
        <post-item 
            v-for="post in posts" :key='post.id'
            :post='post'
            @remove='$emit("remove", post)'
        />
    </ul>    
    <div class="notFound" v-else-if='posts.length <= 0'>Посты ненайдены</div>
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
</style>