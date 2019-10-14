<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class='container'>
        <router-link class="navbar-brand" to="/">#NAVBARBRAND</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/lists">To do List</router-link>
                </li>
                <li v-if="!user" class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li v-if="!user" class="nav-item">
                    <router-link class="nav-link" to="/register">Register</router-link>
                </li>
                <li v-if="user" class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ user.name }}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/profile">Profile</router-link>
                        <a class="dropdown-item" @click="logout()" style="cursor: pointer;">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            user:JSON.parse(localStorage.user)
        }
    },
    methods:{
        logout(){
            localStorage.user = null
            location.reload();
        }
    }
}


</script>