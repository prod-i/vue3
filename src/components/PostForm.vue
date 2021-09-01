<template>
    <form @submit.prevent>
        <h2>Добавить NPC</h2>

        <my-input class="in" type="text" placeholder="Имя"
            v-focus
            v-model="post.first_name"
        />
        <my-input class="in" type="text" placeholder="Фамилия"
            v-model="post.last_name"
        />

        <my-button
            class='btn'
            @click="createPost"
        >Добавить</my-button>
    </form>
</template>

<script>
export default {
  components: {},
    data(){
        return {
            post: {
                first_name: '',
                last_name: '',
            }

        }
    },
    methods:{
        createPost(){
            if(this.post.first_name !== '' & this.post.last_name !== ''){
                this.post.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    first_name: '',
                    last_name: '',
                }
            }
        },
    }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
}
h2{
    margin-bottom: 20px;
}
.btn{
    margin: 20px 0;
}
.in{
    background-color: #3f294db6;
}
</style>