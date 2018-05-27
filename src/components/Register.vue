<template>
    <div id="register" class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <img src="../assets/register.jpg" alt="" class="mx-auto d-block">
                    <form @submit.prevent>
                        <div class="form-group text-center">
                            <label for="email"></label>
                            <input type="email" class="form-control" placeholder="Your Email" v-model="email">
                        </div>
                        <div class="form-group text-center">
                            <label for="password"></label>
                            <input type="password" class="form-control" placeholder="Your Password" v-model="password">
                        </div>
                        <div class="form-group text-center">
                            <label for="confirmPassword"></label>
                            <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmPassword">
                        </div>
                        <button class="btn btn-block btn-success" @click="onSubmit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data: ()=>{
            return {
                email: "",
                password: "",
                confirmPassword: ""
            }
        },
        methods: {
            onSubmit(){
                if(this.password == this.confirmPassword){
                    const formData = {
                        email: this.email,
                        password: this.password,
                        confirmPassword: this.confirmPassword
                    }
                    //axios.post('')
                    this.$router.push({name: 'loginLink'})
                }
            }
        }
    }
</script>

<style>
img{
    width: 1000px;
    height: 400px;
}
</style>
