<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>Welcome taste pizza!</h1>
                <h2>There have best pizza</h2>
                <button @click="gotoMenu" class="btn btn-success">Let's order!</button>
            </div>
        </div>
        <!-- <h1>Home</h1>
        <button @click="gotoMenu" class="btn btn-success">Let's order!</button> -->
    </div>
</template>

<script>
export default {
    methods: {
        gotoMenu(){
            // this.$router.go(-1)
            // this.$router.replace('/menu')
            this.$router.replace({name: 'menuLink'})
        }
    }
}
</script>

<style>
#home {
    background: url('../assets/pizza.jpg');
    height: 90vh;
    padding: 10%;
}

h1,h2 {
    margin: 6%;
}

.background {
    background: #eee;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px, 0;
}
</style>
