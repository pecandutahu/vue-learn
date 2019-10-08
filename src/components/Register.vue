<template>
<div class="container" >
    <div class="row">
        <div class="col-sm-8">
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="email">Nama:</label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" v-model="password">
                </div>
                <div class="form-group form-check">
                    <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"> Remember me
                    </label>
                </div>
                <button type="button" @click='register()' class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'register',
        data(){
            return {
                'name' : '',
                'email' : '',
                'password' : '',
            }
        },
        methods:{
            register(){
                this.axios.post("http://localhost:8000/user/register",{
                    name : this.name,
                    email : this.email,
                    password : this.password,
                }).then((response)=>{
                    console.log(response.data)
                    if (response.data.status === 201){
                        this.$router.push('/login')
                    } else {
                        alert('register gagal');
                    }
                }).catch((error)=>{
                    console.log(error)
                })
            }
        }
    }
</script>