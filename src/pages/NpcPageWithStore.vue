<template>
    <div class="NPC-page">

        <h1>STORE</h1>

        <my-button
            class="modal_btn"
            @click="modalVis = true"
        >Создать NPC
        </my-button>

        <div class="app-options">

            <my-input 
                class='search-input'
                placeholder="Поиск по NPC"
                :model-value='searchQuery'
                @update:model-value='setSearchQuery'
            />

            <my-select 
                :model-value='selectedSort'
                @update:model-value='setSelectedSort'
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
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'


export default {
    components: {
        PostForm, PostList,
    },
    data(){
        return {
            modalVis: false,
        }
    },
    methods: {
        ...mapMutations({
            setPage         : 'posts/setPage',
            setSearchQuery  : 'posts/setSearchQuery',
            setSelectedSort : 'posts/setSelectedSort',
        }),
        ...mapActions({
            fetchNPC      : 'posts/fetchNPC',
            loadMorePosts : 'posts/loadMorePosts',
        }),
        createPost(post){
            this.posts.unshift(post)
            this.modalVis = false;
        },
        removePost(post){
            this.posts    = this.posts.filter(p => p.id !== post.id)
        },
        
    },
    mounted(){
            this.fetchNPC();
    },
    computed: {
        ...mapState({
            posts        : state => state.posts.posts,
            isNPCLoading : state => state.posts.isNPCLoading,
            selectedSort : state => state.posts.selectedSort,
            searchQuery  : state => state.posts.searchQuery,
            page         : state => state.posts.page,
            totalPages   : state => state.posts.totalPages,
            sortOptions  : state => state.posts.sortOptions,
        }),
        ...mapGetters({
            sortedPosts            : 'posts/sortedPosts',
            sortedAndSearchedPosts : 'posts/sortedAndSearchedPosts',
        }),
    },
    watch: {},
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