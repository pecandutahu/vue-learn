<template>
<div class="container">
    <div class="text-center">
        <h1>Home Page</h1>
    </div>
    <div class="row">
        <div class="md-8 mx-auto">
           Welcome Home
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'home',
        data(){
            return {
                'email' : '',
                'password' : '',
            }
        },
        methods:{
            login(){
                this.axios.post("http://localhost:8000/user/login",{
                    email : this.email,
                    password : this.password,
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