<template>
<Header />
<h1>Hello {{userName}}, Welcome on Home Page</h1>
<table border="1px">
    <tr>
        <th>Id. </th>
        <th>Name</th>
        <th>Address</th>
        <th>Contact No.</th>
        <th>Action 1</th>
    </tr>

    <tr v-for="item,index in restaurants" :key="index">
        <td>{{index + 1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
        <td>
            <router-link :to="'/updaterestro/'+ item.id">Update</router-link>
            <button @click="del(item.id)">Delete</button>
        </td>

    </tr>
</table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    data() {
        return {
            userName: '',
            restaurants: []

        }
    },
    mounted() {
     this.loadData()
    },
    components: {
        Header
    },
    methods: {
        async del(id) {

            // alert(id)
            let result = await axios.delete("http://localhost:3000/restaurant/" + id)
            if (result.status === 200) {
             this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info");
        // console.log(JSON.parse(user).name)
        this.userName = JSON.parse(user).name
        if (!user) {
            this.$router.push({
                name: "signup"
            });
            alert("please sign in");
        }

        let url = 'http://localhost:3000/restaurant'
        let result = await axios.get(url)
        console.log(result)
        this.restaurants = result.data
        }
    },
}
</script>

<style scoped>
td {
    width: 160px;
    text-align: center;
    height: 40px;

}

th {
    height: 30px;
    text-transform: uppercase;
    background-color: rgb(249, 249, 101);
}
</style>
