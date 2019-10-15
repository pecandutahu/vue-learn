<template>
<div class="container">
    <div class="text-center">
        <h1>Todo Lists Page</h1>
    </div>
    <div class="text-right">
        <h6> <router-link class ="btn btn-primary" to="/addtodolist"> Tambah </router-link></h6>
    </div>
    <hr>
    <div v-if ="user" class="row" id = "todolist">
        <div v-for="list in todolists" class="col-4 col-md-4 custom-card">
            <div v-if ="list.status==0"  class="card text-white bg-info mb-3" style="max-width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{list.title}}</h5>
                    <p class="card-text">{{list.description}}</p>
                    <p class="card-text"><small class="text-white">last update {{list.updated_at}}</small></p>
                    <p class="card-text"><small class="text-white">Status On progress</small></p>
                    <input type="hidden" :value="list.id" id="id">  
                    <input type="hidden" :value="1" id="status">  
                    <button type="button" class="btn btn-warning" @click="changestatus()"> Done </button>
                </div>
               
            </div>
            <div v-if ="list.status==1"  class="card text-dark bg-light mb-3" style="max-width: 18rem;" >
                <div class="card-body">
                <h5 class="card-title">{{list.title}}</h5>
                <p class="card-text">{{list.description}}</p>
                <p class="card-text"><small class="">last update {{list.updated_at}}</small></p>
                <p class="card-text"><small class="">Status Selesai</small></p>
                    <input type="hidden" :value="list.id" id="id">  
                    <input type="hidden" :value="0" id="status">  
                    <button type="button" class="btn btn-warning" @click="notyet()"> Not Yet </button>                
                </div>
            </div>
        </div>
    </div>
    <div class="row" v-else>
        Anda Harus Login
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
                user:JSON.parse(localStorage.user)
            }
        },
        mounted(){
            this.axios.get('http://localhost:8000/todolists')
                .then(response =>{ 
                    // console.log(response.data)
                    this.todolists = response.data.data.todolists
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        methods:{
            changestatus(){
                this.axios.post("http://localhost:8000/todolists/changestatus",{
                    id : document.getElementById('id').value,
                    status : document.getElementById('id').value,
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 200){
                        // location.reload()

                    }else{
                        alert('Login gagal');
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            },

            notyet(id,status){
                this.axios.post("http://localhost:8000/todolists/changestatus",{
                    id : document.getElementById('id').value,
                    status : document.getElementById('id').value,
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 200){
                        // location.reload()

                    }else{
                        alert('Login gagal');
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