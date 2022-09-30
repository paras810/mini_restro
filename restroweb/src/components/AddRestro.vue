<template >
    <Header/>
 <h1>Hello {{userName}}, Welcome on addrestro Page</h1>
 <form action="" class="add">
    <input type="text" placeholder="Enter name" name="name" v-model="restaurent.name">
    <input type="text" placeholder="Enter address" name="address" v-model="restaurent.address">
    <input type="number" placeholder="Enter contact" name="number" v-model="restaurent.contact">
    <button type="button" @click="addRestro()">Add New Restaurant</button>
 </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    data() {
            return {
                userName:'',
                restaurent:[
                    {
                    name:'',
                    address:'',
                    contact:''
                    }
                ]

            }
        },
        methods: {
             async addRestro(){
                // console.warn(this.restaurent.name)
                // alert('added restro')
                let result = await axios.post('http://localhost:3000/restaurant',{
                  name: this.restaurent.name,
                  address: this.restaurent.address, 
                  contact: this.restaurent.contact  
                })

                // console.log(result.data)

              if (result.status === 201) {
                this.$router.push({name:'home'})
              }


            }
        },
mounted() {
 let user = localStorage.getItem("user-info");
 this.userName = JSON.parse(user).name

 if (!user) {
     this.$router.push({ name: "signup" });
     alert("please sign in");
 }
},
components: { Header }
}
</script>

<style scoped>

</style>