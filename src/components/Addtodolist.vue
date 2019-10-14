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
                <button type="button" @click='store()' class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'addtodolist',
        data(){
            return {
                'title' : '',
                'description' : '',
                'status' : '0',
                'author_id' : '1',
                'thumbnail' : 'null',
            }
        },
        methods:{
            store(){
                this.axios.post("http://localhost:8000/todolists/store",{
                    title : this.title,
                    description : this.description,
                    status : this.status,
                    thumbnail : this.thumbnail,
                    author_id : this.author_id,
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