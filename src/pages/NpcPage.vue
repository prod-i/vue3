<template>
    <div class="NPC-page">
        <!-- <router-link to='/about'>About</router-link> -->
        <h1>NPC</h1>

        <my-button
            class="modal_btn"
            @click="modalVis = true"
        >Создать NPC
        </my-button>

        <div class="app-options">

            <my-input 
                class='search-input'
                placeholder="Поиск по NPC"
                v-model="searchQuery"
            />

            <my-select 
                v-model="selectedSort"
                :options="sortOptions"
                defValue="Выберете из списка"
            />
        </div>

        <post-list 
            :posts='sortedAndSearchedPosts'
            @remove='removePost'
            v-if="!isNPCLoading"
        />
        
        <div v-else>Идет загрузка...</div>

        <div v-intersection="loadMorePosts" class="observer" v-show='posts.length >0'></div>

        <!-- <div class="pages">
            <div class="page" 
            v-for='p in totalPages' :key='p'
            :class='{
                "current-page": p === page
            }'
            @click="changePage(p)"

            >{{p}}
            </div>
        </div> -->

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

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';
import axios from 'axios';

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
            searchQuery: '',
            page: 1,
            totalPages: 0,
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
        // changePage(p){
        //     this.page = p;
        // },
        async fetchNPC(){
            try {
                this.isNPCLoading = true;
                const response = await axios.get('https://reqres.in/api/users',{
                    params: {
                        page: this.page,
                    },
                })
                this.totalPages = response.data.total_pages;
                this.posts = response.data.data
            } catch (e) {
                alert('Ошибка запроса сервера')
            } finally {
                this.isNPCLoading = false;
            }
        },
        async loadMorePosts(){
            try {
                this.page +=1;
                const response = await axios.get('https://reqres.in/api/users',{
                    params: {
                        page: this.page,
                    },
                })
                this.totalPages = response.data.total_pages;
                this.posts = [...this.posts, ...response.data.data]
            } catch (e) {
                alert('Ошибка запроса сервера')
            }
        },
    },
    mounted(){
            this.fetchNPC();
    },
    computed: {
        sortedPosts(){
            return [...this.posts].sort((post1,post2)=>{
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedAndSearchedPosts(){
            return this.sortedPosts.filter(post => {
                 return post.first_name.toLowerCase().includes(this.searchQuery.toLowerCase())
                      ||post.last_name.toLowerCase().includes(this.searchQuery.toLowerCase())})
        }
    },
    watch: {
        // page(){
        //     this.fetchNPC()
        // }
    },
}
</script>

<style>
.NPC-page{
    width: 80%;
    margin: 0 auto;
    padding-top: 60px;
}
.modal_btn{
    margin-top: 30px;
    width: 10%;
    
}
.app-options{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.search-input{
    max-width: 30%;
}
.pages{
    display: flex;
    align-items: center;
}
.page{
    margin-right: 10px;
    background-color: #3f294db6;
    padding: 10px;
    cursor: pointer;
}
.current-page{
    background-color: #362342;
}
</style>