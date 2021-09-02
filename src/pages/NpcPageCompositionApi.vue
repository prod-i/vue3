<template>
    <div class="NPC-page">
        <h1>Composition Api</h1>

        <my-button
            class="modal_btn"
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
            v-if="!isNPCLoading"
        />
        
        <div v-else>Идет загрузка...</div>

        <my-modal 
            v-model:show='modalVis'
        >

            <post-form 
            />

        </my-modal>

    </div>
</template>

<script>

import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MySelect from '@/components/UI/MySelect.vue';

export default {
    components: {
        PostForm, PostList, MyButton,
        MySelect
    },
    data(){
        return {
            modalVis: false,
            sortOptions: [
                {value: 'first_name', name: 'По имени'},
                {value: 'last_name', name: 'По фамилии'},
            ],
        }
    },
    setup(props){
        const {posts, isNPCLoading, totalPages} = usePosts();
        const {sortedPosts, selectedSort} = useSortedPosts(posts)
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
        return {
            posts, 
            isNPCLoading, 
            totalPages,  
            ortedPosts, 
            selectedSort, 
            searchQuery, 
            sortedAndSearchedPosts
        }
    }
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