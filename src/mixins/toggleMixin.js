export default {
    props: {
        show:{
            type: Boolean,
            default: false,
        },
    },
    methods: {
        higeModal(){
            this.$emit('update:show', false);
        },
    },
    mounted(){

    }
}