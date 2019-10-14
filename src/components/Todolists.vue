<template>
<div class="container">
    <div class="text-center">
        <h1>Todo Lists Page</h1>
    </div>
    <hr>
    <div class="row" id = "todolist">
            <div v-for="list in todolists" v-bind:key="list" class="col-4 col-md-4">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">{{list.title}}</h5>
                    <p class="card-text">{{list.description}}</p>
                    <p class="card-text"><small class="text-muted">last update {{list.updated_at}}</small></p>
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
        }

    }
    
</script>