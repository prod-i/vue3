import axios from 'axios'; 


export const postModule = {
    state: () => ({
        posts: [],
        isNPCLoading: false,
        selectedSort: '',
        searchQuery: '',
        page: 1,
        totalPages: 0,
        sortOptions: [
            { value: 'first_name', name: 'По имени' },
            { value: 'last_name', name: 'По фамилии' },
        ],
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => {
                return post.first_name.toLowerCase().includes(state.searchQuery.toLowerCase())
                    || post.last_name.toLowerCase().includes(state.searchQuery.toLowerCase())
            })
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, isNPCLoading) {
            state.isNPCLoading = isNPCLoading;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    actions: {
        async fetchNPC({state, commit}) {
            try {
                commit('setLoading', true);
                const response = await axios.get('https://reqres.in/api/users', {
                    params: {
                        page: state.page,
                    },
                })
                commit('setTotalPages', response.data.total_pages)
                commit('setPosts', response.data.data)
            } catch (e) {
                console.log(e);
            } finally {
                commit('setLoading', false);
            }
        },
        async loadMorePosts({state, commit}) {
            try {
                commit('setPage', state.page ++)
                const response = await axios.get('https://reqres.in/api/users', {
                    params: {
                        page: state.page,               
                    },
                })
                commit('setTotalPages', response.data.total_pages)
                commit('setPosts', [...state.posts, ...response.data.data])
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced:'posts',
}