<template>
<div class="container">
    <div class="row">
        <div class="col-sm-6 mx-auto">
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" class="form-control" v-model="title">
                </div>
                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="description" class="form-control" v-model="description">
                </div>
                <div class="form-group">
                    <label for="thumbnail"></label>
                    <input type="hidden" class="form-control" v-model="thumbnail">
                    <input type="hidden" class="form-control" v-model="status" >
                    <input type="hidden" class="form-control" v-model="author_id" >
                </div>
                <button type="button" @click='update()' class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'todoEdit',
        data(){
            return {
                'title' : '',
                'description' : '',
                'status' : '0',
                'author_id' : '',
                'thumbnail' : 'null',
            }
        },
        mounted(){
            this.getList()
        },
        methods:{
            getList(){
                this.axios.get('http://localhost:8000/todolists/'+ this.$route.params.id)
                .then((response)=>{
                    // console.log(response.data)
                    this.title = response.data.data.todolist.title
                    this.description = response.data.data.todolist.description
                    this.status = response.data.data.todolist.status
                    this.author_id = response.data.data.todolist.author_id
                }).catch((error) => {
                    console.log(error)
                    // alert nampilin error
                })
            },
            update(){
                this.axios.post("http://localhost:8000/todolists/update",{
                    title : this.title,
                    description : this.description,
                    status : this.status,
                    author_id : this.author_id,
                    id: this.$route.params.id
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 200){
                        this.$router.push('/lists')
                    } else {
                        alert('Input gagal');
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
</script>