<template>
<div class="form">
    <img src="../assets/download.png" alt="" class="logo">
    <h2>Sign Up</h2>

</div>
<div class="register">
    <input type="text" placeholder="enter your name" v-model="name">
    <input type="email" placeholder="enter your email" v-model="email">
    <input type="password" placeholder="enter your password" v-model="password">
    <button @click="getUser()">SignUp</button>
    <p><router-link to="/login">Login</router-link></p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async getUser() {
            console.log(this.name, this.email, this.password)
            let url = 'http://localhost:3000/user'
            let result = await axios.post(url, {
                name: this.name,
                email: this.email,
                password: this.password
            })
            this.name = ''
            this.email = ''
            this.password = ''
            console.log(result.data)
            if (result.status === 201) {
                // alert('form submitted')
            }
            localStorage.setItem('user-info', JSON.stringify(result.data))
            this.$router.push({name:'home'})
            
        }
    },
    mounted() {
        // console.log('mounted')
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({name:'home'})
            alert('user is already signed up')
        }
    },
}
</script>

<style scoped>

</style>
