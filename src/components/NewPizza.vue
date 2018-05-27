<template>
    <form>
        <h3 class="text-muted my-5">Add New Pizza</h3>
        <div class="form-group row">
            <label class="col-sm-2">Category</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.name">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2">Description</label>
            <div class="col-sm-10">
                <textarea rows="5" class="form-control" v-model="newPizza.description"></textarea>
            </div>
        </div>
        <p class="strong">Option One</p>
        <div class="form-group row">
            <label class="col-sm-2">Size</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.size1">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2">Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.price1">
            </div>
        </div>

        <p class="strong">Option Two</p>
        <div class="form-group row">
            <label class="col-sm-2">Size</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.size2">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2">Price</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" v-model="newPizza.price2">
            </div>
        </div>
        <div class="form-group row">
            <button type="button" class="btn btn-success btn-block">Add</button>
        </div>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                newPizza: {

                }
            }
        }
    }
</script>