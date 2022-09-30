<template>
    <router-link to="/"> Home</router-link> 
    <router-link to="/signup">Sign Up</router-link> 
    <router-view></router-view>
</template>

<script>
 export default {
    data() {
        return {};
    },
}
</script>

<style>
.logo {
    width: 60px;
}

.form {
    /* border: 2px salmon solid; */
    text-align: center;
    padding-top: 15px;
}

.register , .login , .add{
    /* border: 2px slateblue solid; */
    text-align: center;
}

.register input , .login input, .add input{
    border: 2px rgb(245 206 131 / 97%) solid;
    width: 300px;
    height: 40px;
    display: block;
    padding-left: 20px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
}

.register button , .login button , .add button{
    border: 2px rgb(245 206 131 / 97%) solid;
    background-color: rgb(245 206 131 / 97%);
    color: black;
    padding: 7px 21px;
    font-size: 15px;
    border-radius: 7px;
    cursor: pointer;
    width: 320px;
    transition: all .3s ease-in;
}

.register button:hover, .login button:hover {
    border: 2px rgb(245 206 131 / 97%) solid;
    background-color: white;
    color: orange;
}
</style>
