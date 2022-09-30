import {createRouter,createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import AddRestro from '../components/AddRestro.vue'
import UpdateRestro from '../components/UpdateRestro.vue'

const routes =[
{
    name:'home',
    path:'/',
    component:Home
},
{
    name:'signup',
    path:'/signup',
    component: SignUp
},
{
    name:'login',
    path:'/login',
    component:Login
},
{
    name:'addrestro',
    path:'/addrestro',
    component: AddRestro
},
{
    name:'updaterestro',
    path:'/updaterestro/:id',
    component: UpdateRestro
}
]

const routerd = createRouter({
    history: createWebHistory(),
    routes
})

export default routerd;