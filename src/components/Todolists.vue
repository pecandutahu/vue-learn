<template>
<div class="container">
    <div class="text-center">
        <h1>Todo Lists Page</h1>
    </div>
    <div class="text-right">
        <h6> <router-link class ="btn btn-primary" to="/addtodolist"> Tambah </router-link></h6>
    </div>
    <hr>
     <p v-if="loading"> Loading ..... </p>
    <div v-if ="user" class="row" id = "todolist">
        <div v-for="list in todolists" :key="list.id" class="col-4 col-md-4 custom-card">
            <div v-if ="list.status==0"  class="card text-white bg-info mb-3" style="max-width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{list.title}}</h5>
                    <p class="card-text">{{list.description}}</p>
                    <p class="card-text"><small class="text-white">last update {{list.updated_at}}</small></p>
                    <p class="card-text"><small class="text-white">Status On progress</small></p>
                    <input type="hidden" :value="list.id" id="id">  
                    <input type="hidden" :value="1" id="status">  
                    <button type="button" class="btn btn-warning" @click="changestatus(list.id, list.status)"> Done </button>
                    <router-link :to="'/todoEdit/' +list.id" class="btn btn-primary"> Edit </router-link>                   
                    <button @click="editModal(list.id)" type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal"> Edit </button>
                    <button type="button" class="btn btn-warning" @click="destroy(list.id)"> Hapus </button>
                </div>
               
            </div>
            <div v-if ="list.status==1"  class="card text-dark bg-light mb-3" style="max-width: 18rem;" >
                <div class="card-body">
                <h5 class="card-title">{{list.title}}</h5>
                <p class="card-text">{{list.description}}</p>
                <p class="card-text"><small class="">last update {{list.updated_at}}</small></p>
                <p class="card-text"><small class="">Status Selesai</small></p>
                    <button type="button" class="btn btn-warning" @click="changestatus(list.id, list.status)"> Not Yet </button> 
                    <router-link :to="'/todoEdit/' +list.id" class="btn btn-primary"> Edit </router-link>  
                    <button @click="editModal(list.id)" type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal"> Edit </button>                  
                    <button type="button" class="btn btn-warning" @click="destroy(list.id)"> Hapus </button>
                               
                </div>
            </div>
        </div>
    </div>
    <div class="row" v-else>
        Anda Harus Login
    </div>
        <!-- Modal -->
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Modal Header</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
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
                                    <input type="hidden" class="form-control" v-model="thumbnail" >
                                    <input type="hidden" class="form-control" v-model="status" >
                                    <input type="hidden" class="form-control" v-model="author_id" >
                                </div>
                                <button type="button" @click='update()' class="btn btn-primary">Submit</button>
                            </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
            </div>
</div>



</template>

<script>
    export default {
        name : 'todolists',
        data(){
            return {
                todolists: null,
                loading: true,
                errored: false,
                user:JSON.parse(localStorage.user),
                title:'',
                description:'',
                status:'',
                thumbnail:'',
                author_id :'',
                id:''

            }
        },
        mounted(){
            this.getLists()
        },
        methods:{
            getLists(){
                this.axios.get('http://localhost:8000/todolists')
                .then(response =>{ 
                    // console.log(response.data)
                    this.todolists = response.data.data.todolists
                    this.loading = false
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
            },

            destroy(id){
                this.loading = true
                this.axios.post("http://localhost:8000/todolists/destroy",{
                    id:id,
                })
                .then(response=>{
                    this.getLists()
                    this.loading=false
                })
            },

            changestatus(id, status){
                var new_status = ''

                if (status == '1') {
                    new_status = '0'
                } else {
                    new_status = '1'
                }

                this.axios.post("http://localhost:8000/todolists/changestatus",{
                    id : id,
                    status : new_status,
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 200){
                        // location.reload()
                        this.getLists()
                    }else{
                        alert(' gagal');
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            },

            editModal(id){
                this.axios.get('http://localhost:8000/todolists/'+ id)
                .then((response)=>{
                    // console.log(response.data)
                    this.title = response.data.data.todolist.title
                    this.description = response.data.data.todolist.description
                    this.status = response.data.data.todolist.status
                    this.author_id = response.data.data.todolist.author_id
                    this.id =id
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
                    id: this.id
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 200){
                        this.getLists()
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

<style scoped>
.card {
    margin-bottom: 20px
    }
</style>