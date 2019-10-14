<template>
<div class="container">
    <div class="text-center">
        <h1>Profiles Page</h1>
    </div>
    <div class="text-right">
        <h6> <router-link class ="btn btn-primary" to="#"> Ubah </router-link></h6>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-4"> 
        </div>
        <div class="col-md-4">
            <div class="card profile-card-2">
                <div class="card-img-block">
                    <img class="img-fluid" src="https://images.pexels.com/photos/870903/pexels-photo-870903.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" alt="Card image cap">
                </div>
                <div class="card-body pt-5">
                    <img src="https://randomuser.me/api/portraits/men/64.jpg" alt="profile-image" class="profile"/>
                    <h5>
                        {{user.name}}
                    </h5>
                    <p class="card-text">
                        {{user.email}}
                    </p>
                    <div class="icon-block" >
                        <a href="#"> <i class="fa fa-facebook"> </i> </a>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-md-4"> 
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name : 'Profile',
        data(){
            return {
                user:JSON.parse(localStorage.user)
            }
        },
}
    
</script>

<style scoped>
body{
    font-family: 'Open Sans', sans-serif;
}
.profile-card-2 .card-img-block{
    float:left;
    width:100%;
    height:150px;
    overflow:hidden;
}
.profile-card-2 .card-body{
    position:relative;
}
.profile-card-2 .profile {
  border-radius: 50%;
  position: absolute;
  top: -42px;
  left: 15%;
  max-width: 75px;
  border: 3px solid rgba(255, 255, 255, 1);
  -webkit-transform: translate(-50%, 0%);
  transform: translate(-50%, 0%);
}

.profile-card-2 h5{
    font-weight:600;
    color:#02102f;
}

.profile-card-2 .card-text{
    font-weight:300;
    font-size:15px;
}

.profile-card-2 .icon-block{
    float:left;
    width:100%;
}

.profile-card-2 .icon-block a{
    text-decoration:none;
}
.profile-card-2 i {
  display: inline-block;
    font-size: 16px;
    color: #6ab04c;
    text-align: center;
    border: 1px solid #6ab04c;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    margin:0 5px;
}
.profile-card-2 i:hover {
  background-color:#6ab04c;
  color:#fff;
}
</style>