<template >
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="addrestro">Add Restaurant</router-link>
    <!-- <router-link to="updaterestro">Update Restaurant</router-link> -->
    <router-view></router-view>
    <a href="#" @click="logout()">Logout</a>
</div>
</template>

<script>
    export default {
methods: {
    logout(){
        console.log('logout');
        localStorage.clear();
        this.$router.push({name:'login'})

    }
},
    }
</script>

<style scoped>
.nav{
    background-color: #333;
    overflow: hidden;
    padding: 10px 10px;

}
.nav a{
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 0 15px;
    margin: 0 15px;
}
.nav a:hover{
color: orange;
}
</style>