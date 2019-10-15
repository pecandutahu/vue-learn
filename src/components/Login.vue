<template>
<div class="container">
    <div class="text-center">
        <h1>Login Page</h1>
    </div>
    <div class="row">
        <div class="md-8 mx-auto">
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"> Remember me
                    </label>
                </div>
                <button type="button" @click='login()' class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'login',
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
                        this.$router.push('/lists');
                        location.reload();
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