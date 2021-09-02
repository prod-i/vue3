import axios from 'axios';
import { ref, noMaunted } from "vue";



export default function usePosts(){
    const posts = ref([]);
    const totalPages = ref(0);
    const isNPCLoading = ref(true);
    const fetching = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users',{
                params: {
                    page: 1,
                },
            })
            totalPages.value = response.data.total_pages;
            posts.value = response.data.data
        } catch (e) {
            alert('Ошибка запроса сервера')
        } finally {
            isNPCLoading.value = false;
        }
    }

    noMaunted(fetching)

    return {
        posts, isNPCLoading, totalPages
    }
}