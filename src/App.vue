
<template>
    <div id="app">
        <h1>NPC</h1>

        <div class="app-options">
            <my-button
                class="modal_btn"
                @click="modalVis = true"
            >Создать NPC
            </my-button>

            <my-select 
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>

        <post-list 
            :posts='sortedPost'
            @remove='removePost'
            v-if="!isNPCLoading"
        />
        
        <div v-else>Идет загрузка...</div>

        <my-modal 
            v-model:show='modalVis'
        >

            <post-form 
                @create="createPost"
            />

        </my-modal>

    </div>
</template>

<script>

import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
import MyButton from './components/UI/MyButton.vue';
import MySelect from './components/UI/MySelect.vue';
import axios from 'axios';
import { watch } from '@vue/runtime-core';

export default {
    components: {
        PostForm, PostList, MyButton,
        MySelect
    },
    data(){
        return {
            posts: [],
            modalVis: false,
            isNPCLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'first_name', name: 'По имени'},
                {value: 'last_name', name: 'По фамилии'},
            ],
        }
    },
    methods: {
        createPost(post){
            this.posts.unshift(post)
            this.modalVis = false;
        },
        removePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        async fetchNPC(){
            try {
                this.isNPCLoading = true;
                const response = await axios.get('https://reqres.in/api/users?page=2')
                this.posts = response.data.data
                console.log(response);
            } catch (e) {
                alert('Ошибка запроса сервера')
            } finally {
                this.isNPCLoading = false;
            }
        },
    },
    mounted(){
            this.fetchNPC();
    },
    computed: {
        sortedPost(){
            return [...this.posts].sort((post1,post2)=>{
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        }
    },
    // watch: {
    //     selectedSort(newValue){
    //         this.posts.sort((post1,post2)=>{
    //             return post1[newValue]?.localeCompare(post2[newValue])
    //         })
    //     }
    // },
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
    background-color: #af4646;
}
#app{
    max-width: 90%;
    padding-top: 40px;
    margin: 0 auto;
}
.modal_btn{
    width: 20%;
}
.app-options{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>