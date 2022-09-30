<template>
<Header />
<h1>Hello {{userName}}, Welcome on updaterestro Page</h1>
<form action="" class="add">
    <input type="text" placeholder="Enter name" name="name" v-model="restaurent.name">
    <input type="text" placeholder="Enter address" name="address" v-model="restaurent.address">
    <input type="number" placeholder="Enter contact" name="number" v-model="restaurent.contact">
    <button type="button" @click="upRestro() ">Update Restaurant</button>
</form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios'
export default {
    data() {
        return {
            userName: '',
            restaurent: [{
                name: '',
                address: '',
                contact: ''
            }]

        }
    },
    methods: {
        async upRestro() {
            alert('update')
            let url = `http://localhost:3000/restaurant/${this.$route.params.id}`

            let result = await axios.put(url, {
             name:this.restaurent.name,
             address:this.restaurent.address,
             contact:this.restaurent.contact
            })
            console.log(result.data)
            if(result.status = 200){
            this.$router.push({name:'home'})
            }
           
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({
                name: "signup"
            });
            //  alert("please sign in");
        }
        //  console.warn(this.$route.params.id)
        let url = `http://localhost:3000/restaurant/${this.$route.params.id}`
        let result = await axios.get(url)
        this.restaurent.name = result.data.name;
        this.restaurent.address = result.data.address;
        this.restaurent.contact = result.data.contact;

    },
    components: {
        Header
    }
}
</script>

<style scoped>

</style>
