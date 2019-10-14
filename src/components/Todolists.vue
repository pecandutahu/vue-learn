<template>
<div class="container">
    <div class="text-center">
        <h1>Todo Lists Page</h1>
    </div>
    <div class="text-right">
        <h6> <router-link class ="btn btn-primary" to="/addtodolist"> Tambah </router-link></h6>
    </div>
    <hr>
    <div class="row" id = "todolist">
        <div v-for="list in todolists" class="col-4 col-md-4 custom-card">
            <div v-if ="list.status==0"  class="card text-white bg-info mb-3" style="max-width: 18rem;" >
                <div class="card-body">
                    <h5 class="card-title">{{list.title}}</h5>
                    <p class="card-text">{{list.description}}</p>
                    <p class="card-text"><small class="text-white">last update {{list.updated_at}}</small></p>
                    <p class="card-text"><small class="text-white">Status On progress</small></p>
                
                </div>
               
            </div>
            <div v-if ="list.status==1"  class="card text-dark bg-light mb-3" style="max-width: 18rem;" >
                <div class="card-body">
                <h5 class="card-title">{{list.title}}</h5>
                <p class="card-text">{{list.description}}</p>
                <p class="card-text"><small class="">last update {{list.updated_at}}</small></p>
                <p class="card-text"><small class="">Status Selesai</small></p>
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
                errored: false
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
        method:{
            changestatus(){
                this.axios.post("http://localhost:8000/todolists/changestatus",{
                    id : this.id,
                    status : this.status,
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 200){
                        localStorage.user = JSON.stringify(response.data.data.User)
                        location.reload();
                        this.$router.push('/todolist');

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