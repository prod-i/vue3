import { ref } from "vue";

export default function useSortedAndSearchedPosts(sortedPosts) {
    const searchQuery = ref('')

    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => {
            return post.first_name.toLowerCase().includes(searchQuery.value.toLowerCase())
                || post.last_name.toLowerCase().includes(searchQuery.value.toLowerCase())
        })
    });


    return {
        searchQuery, sortedAndSearchedPosts
    }
}