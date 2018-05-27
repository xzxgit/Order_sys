<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <app-new-pizza></app-new-pizza>
        </div>
        <div class="col-sm-12 col-md-4">
            <h3 class="text-muted my-5">Menu</h3>
            <table class="table table-default">
                <thead>
                    <tr>
                        <th>Category</th>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.id">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>
                            <button @click="deleteItem(item)" class="btn btn-sm btn-outline-danger">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NewPizza from './NewPizza.vue'
export default {
    data: function(){
        return {
            // getMenuItems: [],
        }
    },
    components: {
        'app-new-pizza': NewPizza
    },
    computed:{
        getMenuItems: {
            // get data from vuex
            get() {
                return this.$store.state.menuItems
            },
            set() {

            }
            
        },
    },
    created(){
        axios.get('http://localhost:5000/menu')
        .then(res=>{
            return res.data
        })
        .then(data=>{
            let menuArray = []
            for(let key in data){
                data[key].id = key
                menuArray.push(data[key])
            }
            this.$store.commit("setMenuItems", menuArray)
        })
    },
    methods: {
        deleteItem(item){
            this.$store.commit("removeMenuItem", item)
        }
    }
}
</script>
