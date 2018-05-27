<template>
    <div class="row">
        <div class="col-sm-12 col-md-8">
            <table class="table">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item.name">
                    <tr>
                        <td><strong>{{item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options" :key="option.size">
                        <td>{{option.size}}</td>
                        <td>{{option.price}}</td>
                        <td><button @click="addToBasket(item, option)" class="btn btn-sm btn-outline-success">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-12 col-md-4">
                <div v-if="baskets.length > 0">
                    <table class="table">
                        <thead class="thead-default">
                            <tr>
                                <th>Number</th>
                                <th>Category</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in baskets" :key="item.name">
                            <tr>
                                <td>
                                    <button @click="decreaseQuantily(item)" type="button" class="btn btn-sm btn-light">-</button>
                                    <span>{{item.quantily}}</span>
                                    <button @click="increaseQuantily(item)" class="btn btn-sm btn-light">+</button>
                                </td>
                                <td>{{item.name}}{{item.size}}</td>
                                <td>{{item.price * item.quantily}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Total Price:{{total+ "RMB"}}</p>
                    <button class="btn btn-success btn-block">Submit</button>
                </div>
                <div v-else>
                    {{basketText}}
                </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: ()=>{
        return {
            baskets: [],
            basketText: "basket is empty!",
        }
    },
    computed: {
        getMenuItems(){
            // get data from vuex
            return this.$store.state.menuItems
        },
        total(){
            let totalPrice = 0;
            for(let index in this.baskets){
                let individualItem = this.baskets[index]
                totalPrice += (individualItem.quantily * individualItem.price)
            }
            return totalPrice
        }
    },
    created(){
        this.fetchData()
    },
    methods: {
        fetchData(){
            axios.get('http://localhost:5000/menu')
            .then(res=> {
                this.$store.commit("setMenuItems", res.data)
            })
        },
        addToBasket(item, option){
            let basket = {
                name: item.name,
                size: option.size,
                price: option.price,
                quantily: 1
            }
            if(this.baskets.length > 0){
                let res = this.baskets.filter((basket)=>{
                    return (basket.name == item.name) && (basket.price == option.price)
                })
                if(res != null && res.length > 0){
                    res[0].quantily ++;
                } else {
                    this.baskets.push(basket)
                }
            }else{
                this.baskets.push(basket)
            }
        },
        decreaseQuantily(item){
            item.quantily--
            if(item.quantily <= 0){
                this.removeFromBasket(item)
            }
        },
        increaseQuantily(item){
            item.quantily++
        },
        removeFromBasket(item){
            this.baskets.splice(this.baskets.indexOf(item), 1)
        }
    }
}
</script>
