<template>
<div class="form">
    <img src="../assets/download.png" alt="" class="logo">
    <h2>Login Page</h2>

</div>
<div class="login">
    <input type="email" placeholder="enter your email" v-model="email">
    <input type="password" placeholder="enter your password" v-model="password">
    <button @click="getLogin()">Login</button>
    <p>
        <router-link to="/signup">Sign Up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async getLogin() {
            let url = `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            let result = await axios.get(url);
            if (result.data.length > 0 && result.status === 200) {
                localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                this.$router.push({
                    name: 'home'
                })
            }
            console.warn(result.data);

            //   http://localhost:3000/user?email=rohan.com&password=rohan121
        },
        
    },
    mounted() {
        // console.log('mounted')
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({name:'home'})
            alert('user is already login')
        }
    },
}
</script>

<style scoped>

    </style>
