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
                                <td>{{item.name}}</td>
                                <td>{{item.price * item.quantily}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Total Price:</p>
                    <button class="btn btn-success btn-block">Submit</button>
                </div>
                <div v-else>
                    {{basketText}}
                </div>

        </div>
    </div>
</template>

<script>
export default {
    data: ()=>{
        return {
            baskets: [],
            basketText: "basket is empty!",
            getMenuItems: {
                1: {
                'name': '榴莲pizza',
                'description': '这是喜欢吃榴莲朋友的最佳选择',
                'options': [{
                    'size': 9,
                    'price': 38
                }, {
                    'size': 12,
                    'price': 48
                }]
                },
                2: {
                'name': '芝士pizza',
                'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
                'options': [{
                    'size': 9,
                    'price': 38
                }, {
                    'size': 12,
                    'price': 48
                }]
                },
                3: {
                'name': '夏威夷pizza',
                'description': '众多人的默认选择',
                'options': [{
                    'size': 9,
                    'price': 36
                }, {
                    'size': 12,
                    'price': 46
                }]
                }
            }
        }
    },
    methods: {
        addToBasket(item, option){
            this.baskets.push({
                name: item.name,
                size: option.size,
                price: option.price,
                quantily: 1
            })
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
