import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../view/index.vue'


import Scrolling from "../components/Scrolling.vue";
import Home from "@/components/Home";



Vue.use(Router)



export default new Router({
    routes: [
        {
            path: '',
            component: Layout,
            children: [

                {
                    path: '/Scrolling',
                    name: 'Scrolling',
                    component:Scrolling,
                },
                {
                    path:'/Scrolling-upload',
                    name:'Scrolling-upload',
                    component:Home,
                },
                {
                    path:"/Scrolling-all",
                    name:"Scrolling-all",
                    component: () => import('../components/Home.vue')
                }
            ]
        },

        {
            path: '/NavMenu',
            name: 'NavMenu',
            component: () => import('../components/NavMenu.vue')
        }
    ]
})

